import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
// import { Provider as UrqlProvider } from "urql";
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../../global.css";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ loaded, error ] = useFonts({
    "Nunito-Light": require("../../assets/fonts/Nunito-Light.ttf"),
    "Nunito-Regular": require("../../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("../../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-SemiBold": require("../../assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("../../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Italic": require("../../assets/fonts/Nunito-Italic.ttf"),
    "Nunito-LightItalic": require("../../assets/fonts/Nunito-LightItalic.ttf"),
    "Nunito-MediumItalic": require("../../assets/fonts/Nunito-MediumItalic.ttf"),
  });

  useEffect(() => {

    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [ loaded ]);

  if (!loaded && !error) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* Temporary screens */}
        {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
        {/* End of Temporary screens */}
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
