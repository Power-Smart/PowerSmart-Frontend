import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'
import { TiShoppingCart } from 'react-icons/ti'


const TechSupportTopBar = ({ title, image, baclLink = "", customerID, totalPrice, itemsNumbers }) => {
    return (
        <div className='px-16 py-5 flex justify-between items-center' >
            <div className='flex items-center justify-center'>
                {baclLink != "" && <Link to={baclLink} >
                    {/* <div className='mr-4 font-bold'> {"<"} </div> */}
                    < IoChevronBack className='mr-4 h-7 w-7 text-xl font-bold bg-white/10 rounded-md' />
                </Link>}
                <h2 className='text-3xl font-bold'>{title}</h2>
            </div>

            <div className='bg-white text-black flex justify-between items-center rounded-xl font-bold h-[70px] w-[190px] pl-1'>
                <div className="cart-icon">
                    <TiShoppingCart className='text-black text-4xl' />
                </div>
                <div className="cart-details flex flex-col">
                    <div className="price ">
                        <span className="actual-price">{totalPrice} LKR</span>
                    </div>
                    <div className="item-count">
                        <span className="count">{itemsNumbers} item(s)</span>
                    </div>
                </div>

                <Link to={`/tech/paymentSummary/${customerID}`}>
                    <div className="visit-cart bg-[#83BCFF] h-[70px] w-[60px] flex justify-center items-center rounded-xl border-4 border-[#006DFF]">
                        <button>Cart</button>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default TechSupportTopBar