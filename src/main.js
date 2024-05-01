import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Taxis from './data/taxis.json'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1 className="text-center">TaxiExpress</h1>

                    <Carousel>
                        {
                                Taxis.map(it => {
                                return (<Carousel.Item onClick={(e) => {
                                    e.preventDefault(); handleClick(it.slug)
                                }}>
                                    <img className="d-block w-100" src={it.picture}></img>
                                    <Carousel.Caption>
                                        <h3>{it.name}</h3>
                                        <p>{it.description}</p>
                                    </Carousel.Caption>

                                </Carousel.Item>);
                            })
                        }
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