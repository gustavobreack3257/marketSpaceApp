import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoute } from "./auth.routes";

import { Box, useTheme } from "native-base";

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[600];
  return (
    <Box flex={1} bg='gray.600'>
      <NavigationContainer theme={theme}>
        <AuthRoute />
      </NavigationContainer>
    </Box>
  );
}
