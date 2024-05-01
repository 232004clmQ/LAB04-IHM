import Taxis from './data/taxis.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const Taxi = Taxis.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{Taxi.name}</h1>
        <hr></hr>
        <img src={Taxi.picture}></img>
        <p>{Taxi.description}</p>
    </>);
}

export default Single;