const Header = () => {
    return  <div className="bg-orange">
    <header className="d-flex justify-content-center py-3">
    <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link text-dark">
        <i data-feather="home"></i> Inicio</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-dark">
        <i data-feather="briefcase"></i> Servicios</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-dark">
        <i data-feather="users"></i> Nosotros</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-dark">
        <i data-feather="help-circle"></i> Centro de Ayuda</a></li>
    </ul>
</header>
</div>

}

export default Header;