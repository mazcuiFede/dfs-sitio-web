import React from "react"
import { Title } from "../Components/elements/Title"
import { Container, Row, Col } from "react-bootstrap"
import { BioCard, TextCard } from "../Components/elements"
import Typography from "@material-ui/core/Typography"
import minibar from "../images/minibar.png"
import curriculumsMock from "../__mocks__/curriculums"

export const NosotrosPage = () => {
  return (
    <>
      <Title>Nosotros</Title>

      <Container>
        <Row>
          {/* <Col>
                        DFS nació en 2002 con el propósito de acompañar y servir a sus clientes a través un asesoramiento financiero profesional, sólido y transparente, identificando las mejores oportunidades de inversión que brindó el mercado financiero tanto en épocas de expansión económica, como en momentos de incertidumbre y volatilidad financiera en Argentina.
                        Asesoramos a nuestros clientes con el objetivo de mantener y acrecentar sus ahorros. 
                    </Col>
                    <Col>
                        Nos enorgullecemos de abrir una nueva etapa de expansión y crecimiento a partir de 2016, invitando a los clientes individuales y a nuevos segmentos de clientes (instituciones, corporaciones y pymes) a sumarse nuestra propuesta de valor y también ampliando la oferta de servicios y productos financieros.
                    </Col> */}

          <Col>
            En DFS asesoramos a nuestros clientes con el objetivo de mantener y
            acrecentar sus ahorros. Deal Financial Services se enorgullece de
            abrir una etapa de expansión a partir del 2016, ampliando la
            propuesta de valor para Instituciones, empresas y Pymes.
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-5">
          <Col>
            <Container>
              <Row>
                <Col>
                  <TextCard
                    classes="text-center"
                    title="Visión"
                    body="Ser su Compañía de Servicios Financieros de preferencia, brindando soluciones financieras integrales. Proveer  una visión global con independencia de criterio."
                  ></TextCard>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Container>
              <Row>
                <Col>
                  <TextCard
                    classes="text-center"
                    title="Valores Corporativos & Cultura Organizacional"
                    body="DFS nació en 2002 con el propósito de acompañar y servir a sus clientes a través un asesoramiento financiero profesional, sólido y transparente, identificando las mejores oportunidades de inversión que brindó el mercado financiero tanto en épocas de expansión económica, como en momentos de incertidumbre y volatilidad financiera en Argentina."
                  ></TextCard>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              paragraph={true}
              className="mt-4 mb-5 text-center"
            >
              Nuestro Equipo <br />
              <img src={minibar} alt="minibar"></img>
            </Typography>

            <Typography variant="body2" component="p" className="text-center">
              Contamos con un equipo de profesionales con más de 25 años de
              amplia y probada experiencia administrando activos financieros
              argentinos y globales de compañias de asset management, de libros
              propietarios de bancos extranjeros lideres de mercado, de
              compañías de seguros de primera línea, y de Banca Privada.
            </Typography>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5">
          {curriculumsMock.map((x) => (
            <Col>
              <BioCard
                nombre={x.nombre}
                puesto={x.puesto}
                bio={x.bio}
                link={x.link}
                imagen={x.imagen}
              ></BioCard>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
