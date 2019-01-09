// Customized material-ui theme
import { createMuiTheme } from '@material-ui/core/styles';

import deepOrange from '@material-ui/core/colors/deepOrange';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';

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
			main: deepOrange[shade],
		},
	},
	sizes: {
		drawerWidth: 264,
	},
	status: {
		danger: 'orangered',
	},
	typography: {
		useNextVariants: true,
	},
};

const myTheme = createMuiTheme(options);

export default myTheme;
