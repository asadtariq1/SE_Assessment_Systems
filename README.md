# Systems Coding Challenge

## Useful information
### Colors
Below we have a list of useful color.

|Color name| HEX|
|---|---|
|backgroundColor | #121212|
|activeButtonColor | #9138FF|
|inActiveButtonColor | #2E2E2E|
|lightText | #FFFFFF|
|darkText | #000000|
|placeholderText | #979797|

### App Demo (Video)
- [App](https://drive.google.com/file/d/1eY0aPhoKadw5jNbVQ2OnHgF8tzWV3vkv/view?usp=sharing)

### Android Apk (For Testing)
- [SE_Assessment Apk](https://drive.google.com/file/d/1XlKklWYMs64oQ6Gv7F8iCxOcaBRnCNIx/view?usp=sharing)

## Prerequisites

- [Node.js > 16](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode](https://developer.apple.com/xcode)
- [Cocoapods](https://cocoapods.org)
- [JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) vector icons.
- [react-native-simple-toast](https://www.npmjs.com/package/react-native-simple-toast) Toast component for showing error message.
- [react-native-responsive-dimensions](https://www.npmjs.com/package/react-native-responsive-dimensions) Responsive height, width and fontSize.
- [react-native-vector-icons](https://reactnavigation.org/) vector icons.
- [react-native-fast-image](https://www.npmjs.com/package/react-native-fast-image) Image component handles image caching.

## Folder structure

This task follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `redux`: Folder for global state management.
  - `navigation`: Folder to store the navigators.
  - `utils`: Folder for Helper functions or utilities.
  - `services`: Folder for Services or utility functions.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.tsx`
      - `styles.tsx`
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.
 
## Installation

```bash
$ npm install
OR
$ yarn
```

## Pod Install (For iOS)

```bash
$ cd ios
$ pod install --repo-update
```

## Run iOS build

```bash
$ npx react-native run-ios
```

## Run Android build

```bash
$ npx react-native run-android
```

## Approach taken:
I initially designed a splash screen to load and store data in Redux for future use. Once the user navigates to the home screen, all data is preloaded. The home screen features a header at the top with a search bar button underneath. I prioritized creating a user-friendly UI/UX, replicating the color theme of the Giphy website. Users can view 15 gifs at a time, with the option to load more as they scroll through the list. Additionally, users can provide feedback for each gif by simply clicking on the gif card.

## Total Time Taken:
Almost 4 hours

## To be done:
  - Redux implementation for storing data globally
  - Unit testing

## Hints:
  - Vector icons - https://oblador.github.io/react-native-vector-icons/
  - Shadow generator - https://ethercreative.github.io/react-native-shadow-generator/
