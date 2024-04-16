const Main = () => {
    return         <div className="row">
    <div className="col-md-8">
        <h1 className="text-center">TaxiExpress</h1>

        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/06/26/000596154W.jpg" class="d-block w-100" alt=""></img>
                </div>
                <div class="carousel-item">
                <img src="https://www.peruhop.com/wp-content/uploads/taxis-en-peru_web.jpg" class="d-block w-100" alt=""></img>
                </div>
                <div class="carousel-item">
                <img src="https://cdn.www.gob.pe/uploads/document/file/4048049/taxi%20modelo%20web.jpeg.jpeg" class="d-block w-100" alt=""></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className="py-4">
            <p className="text-justify">En TaxiExpress, nos enorgullece ofrecer un servicio de taxi rápido, confiable y conveniente para satisfacer todas tus necesidades de transporte. Nuestro objetivo es proporcionar una experiencia de viaje sin problemas, ya sea que estés dirigiéndote al aeropuerto, a una reunión importante o simplemente explorando la ciudad.</p>
            <p>Ya sea que estés viajando solo o en grupo, para negocios o placer, TaxiExpress está aquí para llevarte a tu destino de manera segura, rápida y cómoda. ¡Reserva tu taxi con nosotros hoy mismo y experimenta la diferencia que ofrecemos en cada viaje!

            </p>        
        </div>
    </div>
    </div>
}

export default Main;