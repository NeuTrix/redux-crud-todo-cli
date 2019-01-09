// Customized material-ui theme
import { createMuiTheme } from '@material-ui/core/styles';

import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import pink from '@material-ui/core/colors/pink';

const shade = '500'; // set common shade for color palette

const options = {
	palette: {
		primary: {
			main: lightBlue[shade],
		},
		secondary: {
			main: lightGreen[shade],
		},
		tertiary: {
			main: pink[shade],
		},
	},
	sizes: {
		drawerWidth: 264,
	},
	status: {
		danger: pink,
	},
	typography: {
		useNextVariants: true,
	},
};

const myTheme = createMuiTheme(options);

export default myTheme;
