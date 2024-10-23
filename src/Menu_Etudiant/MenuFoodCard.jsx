import Addbtn from '../assets/addbtn.svg'

function MenuFoodCard ({ Topimage, price, title, addToCart }) {
    return (
        <div className="col">
            <div className="card rounded">
                <img src={Topimage} className="card-image-top rounded"/>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <div className="card-title fs-4 fw-bold">{title}</div>
                            <div className="card-text">{price} FCFA</div>
                        </div>
                        <div className="col">
                            <button className='btn border-none' onClick={addToCart}><img src={Addbtn}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuFoodCard;