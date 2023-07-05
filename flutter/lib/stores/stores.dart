import 'package:riverpod/riverpod.dart';

final userProvider = StateNotifierProvider<User, String>((ref) => User());

class User extends StateNotifier<String> {
  User() : super("");

  update(value) {
    state = value;
  }
}
