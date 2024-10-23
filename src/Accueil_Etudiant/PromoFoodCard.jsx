import Addbtn from '../assets/addbtn.svg'

function PromoFoodCard ({TopImage, Title, FullPrice, Discount, DiscountPrice, display, addToCart2}) {

    const styleRed = {
        color : 'red'
    }

    return (
        <div className="col">
            <div className="card">
                <img src={TopImage} className="card-image-top"/>
                <div className="card-body">
                    <div className="card-title fs-4 fw-bold mt-3" style={{color : 'black'}}>{Title}</div>
                    <div className="row mt-3 mb-3">
                        <div className="col">
                            <div className="card-text fw-lighter mt-3" style={{textDecoration : 'line-through'}}>{FullPrice}FCFA</div>
                        </div>
                        <div className="col">
                            <div className="card-text fw-lighter mt-3" style={styleRed}>{Discount}</div>
                        </div>
                    </div>
                    <div className="card-text fw-lighter mt-3">{DiscountPrice}</div>
                    <div className={display}>
                        <button className='btn border-none' onClick={addToCart2}><img src={Addbtn}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromoFoodCard