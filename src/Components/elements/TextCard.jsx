import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import minibar from '../../images/minibar.png'

export default function TextCard(props) {
  const { title, body, children, classes } = props

  return (
    <Card className={classes} >
      <CardActionArea>
        <CardContent>
          {

          title ? 
            <Typography gutterBottom variant="h5" component="h2" paragraph={true} className="mt-4 mb-5">
              <b>{title}</b><br />
              <img src={minibar} alt="minibar"></img>
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