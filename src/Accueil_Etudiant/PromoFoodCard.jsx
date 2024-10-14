function PromoFoodCard (props) {

    const styleRed = {
        color : 'red'
    }

    return (
        <div class="col">
            <div class="card">
                <img src={props.TopImage} class="card-image-top"/>
                <div class="class-body">
                    <div class="class-title fs-4 fw-bold mt-3" style={{color : 'black'}}>{props.Title}</div>
                    <div class="row mt-3 mb-3">
                        <div className="col">
                            <div class="class-text fw-lighter mt-3" style={{textDecoration : 'line-through'}}>{props.FullPrice}</div>
                        </div>
                        <div className="col">
                            <div class="class-text fw-lighter mt-3" style={styleRed}>{props.Discount}</div>
                        </div>
                    </div>
                    <div className="class-text fw-lighter mt-3">{props.DiscountPrice}</div>
                </div>
            </div>
        </div>
    );
}

export default PromoFoodCard