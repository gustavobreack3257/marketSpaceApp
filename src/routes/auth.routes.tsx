import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Login } from "@screens/login";
import { Register } from "@screens/Register";

type AuthRoutesProps = {
    login: undefined;
    register: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesProps>;

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutesProps>()
export function AuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='login'
            component={Login}/>

            <Screen name='register'
            component={Register}/>
        </Navigator>
    )
}