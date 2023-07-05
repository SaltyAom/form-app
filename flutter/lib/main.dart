import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import 'package:vrouter/vrouter.dart';

import 'pages/pages.dart';

void main() {
  runApp(
    const ProviderScope(
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  build(context) {
    return VRouter(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.green),
        useMaterial3: true,
      ),
      routes: [
        VWidget(
          path: '/',
          widget: const HomePage(),
          stackedRoutes: [
            VWidget(
              path: '/form',
              widget: FormPage(),
            )
          ],
        )
      ],
    );
  }
}
