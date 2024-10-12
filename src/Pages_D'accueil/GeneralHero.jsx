
function GeneralHero () {

    const styleGolden = {color: '#CFBD97'}
    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'white',
        border : 'none',
    }
    const styleGoldBorder = {
        borderColor : '#CFBD97',
        color : 'white',
        backgroundColor : 'black',
    }

    return(
        <>
            <div className="container-fluid bg-black">
                <div className="row">
                    <div className="col-6">
                        <div className="">
                            <div className="d-inline-block align-text-center fs-1">Un coup de <div className="d-inline-block align-text-center" style={styleGolden}>fourchette</div><br/>avant un coup<br/>de <div className="d-inline-block align-text-center" style={styleGolden}>génie</div> !</div>
                        </div>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </>
    );
}

export default GeneralHero