import { extendTheme } from "native-base";

export const THEME = extendTheme({

        colors: {
          blue:{
            blue_: '#364D9D',
            blue_light: '#647AC7',
          },
          green: {
            700: '#00875F',
            500: '#00B37E',
          },
          gray: {
            100: '#1A181B',
            200: '#3E3A40',
            300: '#5F5B62',
            400: '#9F9BA1',
            500: '#D9D8DA',
            600: '#EDECEE',
            700: '#F7F7F8'
          },
          white: '#FFFFFF',
          red: {
            red_light: '#EE7979'
          }
        },
        fonts: {
          heading: 'Karla_700Bold',
          body: 'Karla_400Regular',
        },
        fontSizes: {
          xs: 12,
          sm: 14,
          md: 16,
          lg: 20,
          xl: 24,
          xy: 32,
        },
        sizes: {
          14: 56,
          18: 72,
          30: 112,
          33: 148,
          44: 600,
          70: 280
        }
})