import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	onSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  color: 'primary',
  disabled: 'false',
  label: 'Submit',
  size: 'small',
  variant: 'contained',
}


const SubmitButton = (props) => {
	const {
    classes,
    color,
    disabled,
    label,
		onSubmit,
    size,
    variant,
	} = props;

	return (
    <Button
      className={classes.button}
      color={color}
      component="core"
      disabled={disabled}
      size={size}
      type="submit"
      variant={variant}
    >
      {label}
    </Button>
	);
};

const styles = theme => ({
	button: {
		color: '#fafafa',
		marginTop: theme.spacing.unit * 2,
		width: 100,
	},
});

SubmitButton.propTypes = propTypes;
SubmitButton.defaultProps = defaultProps;

export default withStyles(styles)(SubmitButton);
