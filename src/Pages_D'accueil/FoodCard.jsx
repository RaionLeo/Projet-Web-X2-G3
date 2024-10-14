function FoodCard (props) {

    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'white',
        border : 'none',
    }
    const styleWhite = {
        color : 'white'
    }
    const styleBorderGold = {
        borderColor : '#CFBD97',
    }

    return (
        <div class="col">
            <div class="card" style={styleBorderGold}>
                <img src={props.TopImage} class="card-image-top"/>
                <div class="class-body bg-black">
                    <div class="class-title fs-4 fw-bold mt-3" style={styleWhite}>{props.Title}</div>
                    <div class="class-text fw-lighter mt-3" style={styleWhite}>{props.Text}</div>
                    <div class="row mt-3 mb-3">
                        <div class="col text-center">
                            <a href="#" class="btn btn-secondary p-3" style={styleGoldenButton}>Voir Le Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodCard