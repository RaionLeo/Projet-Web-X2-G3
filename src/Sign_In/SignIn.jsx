import logo from '../assets/logo.png'

function SignIn () {

    const contstyle = {
        backgroundColor : 'rgba(207, 189, 151, 0.15)',
        color : 'white',
        border : '1px hidden',
        borderRadius : '20px',
        paddingBottom : '10px'
    } 
    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'black',
        border : 'none',
        padding : '10px',
        width : '100%'
    }

    return (
        <div className="container-fluid bg-black">
            <img src={logo} width={'100px'}/>
            <div className="container col-12 col-md-6 px-5" style={contstyle}>
                <p className="fs-1 fw-bold mt-5 mb-3 text-center">Login</p>
                <form className="mt-5">
                    <label className="form-label mt-3">E-mail</label>
                    <input className="form-control mt-3" type="email" placeholder="Entrez votre email" required/>
                    <label className="form-label mt-3">Password</label>
                    <input className="form-control mt-3" type="password" placeholder="Entrez votre mot de passe" required/>
                    <div className="container text-end mt-3">
                        <a href="#" style={{color : 'white', textDecoration : 'none'}}>Forgot Password ?</a>
                    </div>
                    <div className="container text-center">
                        <button className="btn btn-primary my-5 px-5 fw-bold" style={styleGoldenButton}>Sign In</button>
                        <a href="#" style={{color : 'white'}}>Create a new account? Click here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn