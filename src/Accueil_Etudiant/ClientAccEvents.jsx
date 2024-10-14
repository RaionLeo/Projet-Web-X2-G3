

function ClientAccEvent (props) {

    const styleGolden = {color: '#CFBD97'}
    const styleWhite = {
        color : 'white',
    }
    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'white',
        border : '1px hidden',
        borderRadius : '20px',
        padding : '10px',
    }
    const flexing = {
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',
        justifyContent : 'center'
    }

    return (
        <div className="container-fluid">
            <h1 className="d-inline-block my-5" style={styleWhite}>Nos <h1 style={styleGolden} className="d-inline-block">Evenements</h1></h1>
            <div className="row">
                <div className="col-6">
                    <img src={props.EventImage} width={'100%'}/>
                </div>
                <div className="col-6" style={flexing}>
                    <p style={{color:'white'}}>{props.EventDescription}</p>
                    <button style={styleGoldenButton} className=' w-50'>En Savoir Plus</button>
                </div>
            </div>
        </div>
    );
}

export default ClientAccEvent