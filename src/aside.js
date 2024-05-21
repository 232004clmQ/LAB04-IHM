const Aside = () => {
    return (
        <div className="registro border-black d-flex ">
            <div>
                <h1 className="text-center">Registro</h1>
                <p className="text-center mb-4"><strong>¡Bienvenid@ a TaxiExpress!</strong></p>
                <p className="text-center">Únete a nosotros hoy mismo para acceder a beneficios exclusivos</p>
                <p className="text-center">Completa el formulario a continuación para registrarte y comienza a disfrutar de la experiencia TaxiExpress.</p>
                <form>
                    <div className="form-group row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Nombre"></input>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Apellido"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Correo electrónico" required></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Contraseña"></input>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 yellow-btn">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default Aside;
