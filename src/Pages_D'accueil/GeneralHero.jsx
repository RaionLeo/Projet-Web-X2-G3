import heroimg from '../assets/7c920d09-e95f-4e34-ac59-983e4a72b874.webp'
import { useNavigate } from 'react-router-dom'


function GeneralHero () {
    const navigate = useNavigate();

    const styleGolden = {color: '#CFBD97'}
    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'white',
        border : 'none',
        padding : '10px',
        width : '100%'
    }
    const styleGoldBorder = {
        borderColor : '#CFBD97',
        color : 'white',
        backgroundColor : 'black',
        padding : '10px',
        width : '100%'
    }
    const styleWhite = {
        color : 'white',
        fontSize : '4vw'
    }

    const goToTransition = () => {
        navigate('/Transition');
    } 

    const goToSignIn = () => {
        navigate('/SignIn');
    }

    return(
        <>
            <div className="container-fluid bg-black mt-5 pb-5">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div>
                            <div className="d-inline-block align-text-center" style={styleWhite}>Un coup de <div className="d-inline-block align-text-center" style={styleGolden}>fourchette</div><br/>avant un coup<br/>de <div className="d-inline-block align-text-center" style={styleGolden}>génie</div> !</div>
                        </div>
                        <div className='container mt-4'>
                            <div className='row'>
                                <div className='col-6'>
                                    <button className='mb-3' style={styleGoldenButton} onClick={goToSignIn}>Placer une commande</button>
                                </div>
                                <div className='col-6'>
                                    <button style={styleGoldBorder} onClick={goToTransition}>Je suis un employé</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={heroimg} width={'100%'} className='d-sm-inline-block d-none'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GeneralHero