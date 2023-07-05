import 'package:flutter/material.dart';
import 'package:flutter_demo/stores/stores.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import 'package:vrouter/vrouter.dart';
import 'package:niku/namespace.dart' as n;

import '../models/models.dart';

class FormPage extends HookConsumerWidget {
  FormPage({Key? key}) : super(key: key);

  final _formKey = GlobalKey<FormState>();

  @override
  build(context, ref) {
    final username = useTextEditingController();
    final password = useTextEditingController();

    final user = ref.read(userProvider.notifier);

    return Scaffold(
      body: Form(
        key: _formKey,
        child: n.Column([
          "Hello Form".n..displaySmall,
          n.TextFormField.label("Username")
            ..controller = username
            ..isFilled
            ..validator = (value) {
              if (value == null) return "Username can't be nul";
              if (value.length < 5) return "Username must be longer than 5";

              return null;
            },
          n.TextFormField.label("Password")
            ..controller = password
            ..isFilled
            ..asPassword
            ..validator = (value) {
              if (value == null) return "Password can't be nul";
              if (value.length < 5) return "Password must be longer than 5";

              return null;
            },
          n.Row([
            n.Button.filled("Sign In".n
              ..bodyLarge
              ..bold
              ..color = Colors.white)
              ..onPressed = () async {
                if (!_formKey.currentState!.validate()) return;

                user.update(
                  api
                      .signIn(
                        SignUser(
                          username: username.text,
                          password: password.text,
                        ),
                      )
                      .then((value) => value.username),
                );

                context.vRouter.historyBack();
              }
              ..expanded
              ..py = 12,
            n.Button("Back".n..bodyLarge)
              ..onPressed = () {
                context.vRouter.historyBack();
              }
              ..expanded
              ..py = 12,
          ])
            ..gap = 16
            ..my = 8,
        ])
          ..mainCenter
          ..crossStart
          ..fullSize
          ..gap = 16
          ..px = 16,
      ),
    );
  }
}
