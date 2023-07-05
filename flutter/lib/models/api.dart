import 'package:json_annotation/json_annotation.dart';
import 'package:retrofit/retrofit.dart';
import 'package:dio/dio.dart' hide Headers;

part 'api.g.dart';

@RestApi(baseUrl: "http://localhost:3000/")
abstract class RestClient {
  factory RestClient(Dio dio, {String baseUrl}) = _RestClient;

  @GET("/")
  Future<String> index();

  @POST("/sign-in")
  Future<SignUser> signIn(@Body() SignUser signUser);
}

@JsonSerializable()
class SignUser {
  String? username;
  String? password;

  SignUser({this.username, this.password});

  factory SignUser.fromJson(Map<String, dynamic> json) =>
      _$SignUserFromJson(json);
  Map<String, dynamic> toJson() => _$SignUserToJson(this);
}
