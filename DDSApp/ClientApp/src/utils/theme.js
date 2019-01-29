import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#01579b',
        },
        secondary: {
            main: '#b71c1c',
            contrastText: '#ffcc00',

        },
    },
    typography: {
        useNextVariants: true,
    }
});