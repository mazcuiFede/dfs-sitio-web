import React from "react"
import { Typography } from "@material-ui/core"
import { Row, Col } from "react-bootstrap"
import minibar from "../../images/minibar.png"

export const Title = (props) => {
  const { children } = props
  return (
    <>
      <Row>
        <Col className="title text-center">
          <Typography className="title__text" variant="h4">
            {children}
            <br />
            <img src={minibar} alt="minibar"></img>
          </Typography>
        </Col>
      </Row>
    </>
  )
}
