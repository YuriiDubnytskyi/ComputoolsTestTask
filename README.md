# Simple App (login, infinite list of images, profile screen)

- It took 4 hours to develop this application

## APK Download

- You can download application and test it for Android devices by link - [Download Apk File](https://drive.google.com/file/d/1qozOxeoghdxj3TH7N1fi7cytQ3le84FB/view?usp=sharing)

## App Functionality

### Internet Connectivity

- The application **requires an active internet connection**.
  - If there is **no internet connection**, a **warning modal** will appear, informing the user about the lost connection.

### State Persistence

- The application **saves the state** if user close app but still login

### Login Screen

- **Validation**: Simple validation with error messages.
- **Fake Login**: Use any valid email and password to login.

### Feeds Screen

- **Display List of Images**: Display infinite screen of image and the author.
- **Pull-to-Refresh**: Reset getting information.

### Details Screen

- **View Detailed Information**: See info about user.
- **Change theme**
- **Log out**

# Run Project Local

## Step 1: Install dependencies

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
#install pods
cd ios
pod install
cd ..

# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
