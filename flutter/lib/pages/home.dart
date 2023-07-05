import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import 'package:vrouter/vrouter.dart';
import 'package:niku/namespace.dart' as n;

import '../models/models.dart';
import '../stores/stores.dart';

class HomePage extends HookConsumerWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  build(context, ref) {
    final index = useFuture(api.index());
    final user = ref.watch(userProvider);

    return Scaffold(
      body: n.Column([
        "Hello Flutter".n..displaySmall,
        n.Button.tonal("Form".n)
          ..onPressed = () {
            context.vRouter.to('/form');
          },
        if (index.hasData) "API: ${index.data!}".n,
        if (user.isNotEmpty) "User: $user".n
      ])
        ..center
        ..fullSize
        ..gap = 16,
    );
  }
}
