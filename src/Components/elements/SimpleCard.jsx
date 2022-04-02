import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import Typography from "@material-ui/core/Typography"

export default function SimpleCard(props) {
  const { title, body, children, color, icon, link, height } = props

  return (
    <Card className={color}>
      <CardActionArea href={link} style={{ height }}>
        <CardContent>
          {icon ? (
            <Typography paragraph="true">
              <ViewModuleIcon fontSize="large" />
            </Typography>
          ) : (
            <></>
          )}

          {title ? (
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              paragraph={true}
              className="card-title-1"
            >
              {title}
            </Typography>
          ) : (
            <></>
          )}

          <Typography variant="body2" component="p" align={"justify"}>
            {body || children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
