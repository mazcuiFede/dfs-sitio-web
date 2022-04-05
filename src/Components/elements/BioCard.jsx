import * as React from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

export default function BioCard(props) {
  const { nombre, puesto, bio, link, imagen } = props
  return (
    <Card sx={{ maxWidth: 345 }} style={{ height: "460px" }} className="mb-4">
      <CardMedia
        component="img"
        height="140"
        image={imagen}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {puesto}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
      <CardActions className="text-center">
        <Button size="small">
          <a href={link}>
            <LinkedInIcon />
          </a>
        </Button>
      </CardActions>
    </Card>
  )
}
