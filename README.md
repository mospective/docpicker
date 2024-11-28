# Welcome to your Portal Expo app 👋

## To allow typescript work correctly with Expo

Create a file in the root directory called expo-env.d.ts

```ts
/// <reference types="expo/types" />

// NOTE: This file should not be edited and should be in your git ignore
```

## Find env values here:
In working progress...

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Use the version of node specified in .nvmrc

   ```bash
   nvm use
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

## Follow the link to complete the setup for android and IOS
[Setup](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated&mode=development-build/)

It is recommended to setup for IOS and Android when you setup the project for th first time.

```bash
   npx expo run

   npx expo run:iOS
   npx expo run:Android
 ```  

```bash
   npx expo prebuild
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Debugging issues
[Xcode must be fully installed before you can continue](https://github.com/expo/expo/issues/21727)

[CommandError: Can't determine id of Simulator app; the Simulator is most likely not installed on this machine. Run sudo xcode-select -s /Applications/Xcode.app](https://github.com/expo/expo/issues/20693)

Potential solution to use Expo Go with MMKV installed https://github.com/mrousavy/react-native-mmkv/issues/157 

if there is a mismatch with signatures with android build run
```bash
   adb uninstall "com.domain.yourapp"
```
