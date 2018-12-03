import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string
};

const defaultProps = {
  label: "A"
};

function MediaCard(props) {
  const { classes, label } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {label}
            </Typography>
            <Typography component="p">
              {label}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

const styles = {
  card: {
    // gridArea: 'card',
    maxWidth: 150,
  },
  media: {
    height: 25,
  },
};
MediaCard.propTypes = propTypes;
MediaCard.defaultProps = defaultProps;

export default withStyles(styles)(MediaCard);
