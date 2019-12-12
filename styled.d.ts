// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      main: string
      secondary: string
      origin: string
      green: string
      purple: string
      pink: string
      yellow: string
      white: string
    }
  }
}
