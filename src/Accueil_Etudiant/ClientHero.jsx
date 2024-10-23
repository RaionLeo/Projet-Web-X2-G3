import show1 from '../assets/Food1.jpg'
import show2 from '../assets/Food2.jpg'
import Carousel  from "react-bootstrap/Carousel";
import { useCookies } from 'react-cookie';

function ClientHero () {

    const mxheight = {
        maxHeight : '700px',
        maxWidth : '1000px',
    }

    const [cookies] = useCookies(['clientId', 'clientName']);

    return (
        <div className='container-fluid'>
            {cookies.clientId ?
             (<h1 className='mb-5 text-center' style={{color:'white'}}>Hello, <span style={{color:'#CFBD97'}}>{cookies.clientName}</span>!</h1>) : 
             (<h1>WELCOME GUEST</h1>)}
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
        </div>
    );
}

export default ClientHero