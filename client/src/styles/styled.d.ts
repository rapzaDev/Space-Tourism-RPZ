import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            Heading1: string;
            Heading2: string;
            Heading3: string;
            Heading4: string;
            Heading5: string;

            SubHeading1: string;
            SubHeading2: string;

            NavText: string;          
            BodyText: string;
        }

        colors: {
            primary: string;
            secundary: string;
            white: string;
        }
    }
}