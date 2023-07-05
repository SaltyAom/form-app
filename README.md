# Form App
A demo app to compare between React Native and Flutter Developer Experience.

The demo app involve usage of:
- Routing
- State Management
- Form Management
- Utility-first styling
- Fetch (Network Call)

## Prerequisted
- [Bun](https://oven.sh) for running demo API server

## Before Start
Run the API server in ``api`:
```bash
cd api && bun install && bun run start
```

## React Native
Using React Native 0.72.1

| Type | Library |
| --- | --- |
| Routing | Expo Router |
| State Management | Jotai |
| Form Management | React Hook Form |
| Styling | NativeWind |
| Fetch | Tanstack Query, Elysia Eden |
| Etc | Zod |

## Setup
```bash
pnpm install && pnpm start
```

If you are using Expo Go to run app, don't forget to edit `react-native/libs/eden.ts` to your local IP address instead of **localhost**

---

### Summary

Pros:
- It's JavaScript (TypeScript), many developer are familiar with TypeScript
- Using both TypeScript on front and backend, allow us to do end-to-end type safety (shared data type across client-server) with Elysia Eden
- Expo Router provide a very nice Developer Experience, which imo is better than Flutter
- Brining stack from React
- NativeWind provide fluent Developer Experience almost identical to Tailwind

Cons:
- It's JavaScript
- Even with NativeWind, styling is sometime unpredictable
    - Component inside `Touchable` sometime doesn't styled as expected
    - Sometime `rounded` doesn't work
- React Hook Form required additional `Controller` and `control` which is not expected moving from React web

## Flutter
Using Flutter 3.10.5

| Type | Library |
| --- | --- |
| Router | vRouter |
| State Management | Riverpod Hook |
| Form Management | - (Built-in `controller`) |
| Styling | Niku |
| Fetch | Dio, Retrofit |
| Etc | Flutter Hook |

## Setup
```bash
flutter pub get && flutter pub run build_runner build && flutter run
```

---

### Summary

Pros:
- Flutter provide a Material 3 component which looks good out of the box, doesn't required much additional styling
- Creating UI with utility styling feels just like home
- Once everything is setup, developing new feature is very snappy

Cons:
- Boilerplate are everywhere even with a library designed to minimize boilerplate (require additional library to reduce boilerplate)
- Generating code with build_runner sometime feels like magic, and sometime I need to fight the tooling to get what I need in complex case
- It's hard and sometime confusing to setup something especially for the first time
- Dart is not quite a mainstream language beside usage with Flutter, so not many developer are familiar with the language result in some learning curve

## Overall
Both is a great choice for developing cross-platform, and has a difference pros and cons

Overall **in my opinion**, my summary is:
| Type | React Native | Flutter |
| --- | --- | --- |
| Routing | ✅ |  |
| State Management | ✅ |  |
| Form Management | ✅ |  |
| Styling |  | ✅ |
| User Interface |  | ✅ |
| Business Logic DX | ✅ |  |
| Boilerplate (less) | ✅ |  |
| Fetch | ✅ |  |
| Setup Experience | ✅ |  |
| Tooling | ✅ |  |
| Debugging (Logic) | ✅ | |
| Debugging (UI) |  | ✅ |
| Debugging (Logic) | ✅ | |
