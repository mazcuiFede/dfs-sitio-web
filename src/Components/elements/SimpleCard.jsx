import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
});

export default function SimpleCard(props) {
  const { title, body, children, color, icon } = props

  return (
    <Card className={color} >
      <CardActionArea>
        <CardContent>
          {
            icon 
            ? 
              <Typography paragraph="true">
                <ViewModuleIcon fontSize="large"/>
              </Typography>
            :
            <></>
          }
          
          {

            title ? 
            <Typography gutterBottom variant="h5" component="h2" paragraph={true} className="card-title-1">
              {title}
            </Typography>
          :
            <></>
          }

          <Typography variant="body2" component="p">
            {body || children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}