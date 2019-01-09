// Customized material-ui theme
import { createMuiTheme } from '@material-ui/core/styles';

import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import pink from '@material-ui/core/colors/pink';

const shadeLight = '50'; // set common shadeMain for color palette
const shadeMain = '500'; // set common shadeMain for color palette

const options = {
	palette: {
		primary: {
			light: lightBlue[shadeLight],
			main: lightBlue[shadeMain],
		},
		secondary: {
			main: lightGreen[shadeMain],
		},
		tertiary: {
			main: pink[shadeMain],
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
