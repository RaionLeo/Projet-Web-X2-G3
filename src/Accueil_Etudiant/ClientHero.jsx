import show1 from '../assets/Food1.jpg'
import show2 from '../assets/Food2.jpg'
import Carousel  from "react-bootstrap/Carousel";

function ClientHero () {

    const mxheight = {
        maxHeight : '700px'
    }

    return (
        <div className="row tu-world">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        width={'100%'}
                        src={show1}
                        style={mxheight}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        width={'100%'}
                        src={show2}
                        style={mxheight}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ClientHero