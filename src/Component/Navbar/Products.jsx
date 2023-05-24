import React from 'react'
import Props from '../../Props/Props';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

const Products = (props) => {
    return (
        <div className="w[50%] p-10 hover:scale-110 cursor-pointer hover:shadow hover:duration-1000">
            <div key={props.id} className="product Card">
                <div>
                    <img src={props.image} alt="product-img" className="productImage" />

                </div>
                <div className="flex gap-5">
                    <FaShoppingCart className={"productCard_Cart"} />
                    <FaRegBookmark className={"productCard_wishlist"} />
                    <FaFireAlt ClassName={"productCard_fastSelling"} />
                </div>

                <div className="proudctCard_Cart">
                    <h1 className="font-bold">{props.name}</h1>
                    <div className="displayStack_1">
                        <div className="productPrice">${props.price}</div>
                        <div className="productSale">{props.totalSales} units sold</div>
                    </div>
                    {/* <div className="displayStack_2">
                        <div className="productRating">
                            {[...Array(props.rating)]}.map((index) => (
                                <FaStar id={index + 1} key={index} />
                            ))
                        </div>
                    </div> */}
                    <div className='productTime'>{props.timeLeft}Days Left</div>
                </div>
            </div>

        </div>
    )
}

export default Products
