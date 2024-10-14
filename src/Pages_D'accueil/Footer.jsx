

function Footer () {

    const styleGolden = {color: '#CFBD97'}

    return (
        <div className="container-fluid bg-white mt-5">
            <h1 className="d-inline-block mb-5 pt-3">Zeduc-<h1 className="d-inline-block" style={styleGolden}>Space</h1></h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <p style={styleGolden} className="fw-bold fs-5">Telephone</p>
                        <p>+237 652690210</p>
                        <p>+237 699844554</p>
                    </div>
                    <div className="col">
                        <p style={styleGolden} className="fw-bold fs-5">Heure-d'ouverture</p>
                        <p>Lun-Ven: 16h</p>
                        <p>Sam-Dim: 13h</p>
                    </div>
                    <div className="col">
                        <p style={styleGolden} className="fw-bold fs-5">Localisation</p>
                        <p>Cite la Terasse, Yansoki</p>
                        <p>Douala</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer