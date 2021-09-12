import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
});

export default function ProductosCard(props) {
  const classes = useStyles();
  const { title, body } = props

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="">
            <LabelImportantIcon /> {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}