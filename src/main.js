import { Carousel, Container, Row, Col } from 'react-bootstrap';
const Main = () => {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1 className="text-center">TaxiExpress</h1>

                    <Carousel id="carouselExample">
                        <Carousel.Item>
                            <img src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/06/26/000596154W.jpg" className="d-block w-100" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://www.peruhop.com/wp-content/uploads/taxis-en-peru_web.jpg" className="d-block w-100" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://cdn.www.gob.pe/uploads/document/file/4048049/taxi%20modelo%20web.jpeg.jpeg" className="d-block w-100" alt="" />
                        </Carousel.Item>
                    </Carousel>

                    <div className="py-4">
                        <p className="text-justify">En TaxiExpress, nos enorgullece ofrecer un servicio de taxi rápido, confiable y conveniente para satisfacer todas tus necesidades de transporte. Nuestro objetivo es proporcionar una experiencia de viaje sin problemas, ya sea que estés dirigiéndote al aeropuerto, a una reunión importante o simplemente explorando la ciudad.</p>
                        <p>Ya sea que estés viajando solo o en grupo, para negocios o placer, TaxiExpress está aquí para llevarte a tu destino de manera segura, rápida y cómoda. ¡Reserva tu taxi con nosotros hoy mismo y experimenta la diferencia que ofrecemos en cada viaje!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;