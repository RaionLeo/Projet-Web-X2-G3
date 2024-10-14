import logo from "../assets/logo.png";

function GeneralNavbar () {

    const styleGolden = {color: '#CFBD97'}
    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'white',
        border : 'none',
        width : '100%'
    }
    const styleGoldBorder = {
        borderColor : '#CFBD97',
        color : 'white',
        backgroundColor : 'black',
        width : '100%'
    }

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-black pb-5">
                <div className="container-fluid">
                    <a className="navbar-brand col-3 col-md-6" href="#">
                        <img src={logo} width={'100px'} className="d-inline-block align-text-center mx-3 w-md-100"/>
                        <div className="navbar-brand d-md-inline-block d-none">Mon <div style={styleGolden} className="d-inline-block">Miam Miam</div></div>
                    </a>
                    <button className="fs-4 px-3 py-2 mx-3 my-3" style={styleGoldenButton}>Sign Up</button>
                    <button className="fs-4 px-3 py-2 mx-3" style={styleGoldBorder}>Sign In</button>
                </div>
            </nav>
        </>
    );
}

export default GeneralNavbar