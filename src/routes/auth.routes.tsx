import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Login } from "@screens/Login";
import { Register } from "@screens/Register";
import React from "react";

type AuthRoutes = {
  login: undefined;
  register: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />

      <Screen name="register" component={Register} />
    </Navigator>
  );
}
