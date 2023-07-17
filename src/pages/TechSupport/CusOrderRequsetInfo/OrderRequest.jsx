import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './OrderRequest.css'

const OrderRequest = () => {
    return (
        <section className='page__body'>
            <div className="requestInfoBox">
                <div className="infoHeader">
                    <div className="title">
                        <h3>Customer Order Request Information</h3>
                    </div>
                    <div className="closeBtn">
                        <AiOutlineCloseCircle className='h-8 w-8 text-red-500 cursor-pointer'/>
                    </div>
                </div>
                <div className="form">
                    <div className="data__field">
                        <label htmlFor="">Customer ID: </label>
                        <input type="text" value="#455662" />
                    </div>

                    <div className="data__field">
                        <label htmlFor="">Customer: </label>
                        <input type="text" value="Anawarathna  M.A.D.V.S" />
                    </div>

                    <div className="data__field">
                        <label htmlFor="">Number of Places: </label>
                        <input type="text" value="03" />
                    </div>

                    <div className="data__field">
                        <label htmlFor="">Number of Rooms: </label>
                        <input type="text" value="10" />
                    </div>

                    <div className="data__field">
                        <label htmlFor="">Order Description: </label>
                        <textarea value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </div>

                    <div className="flex justify-around mt-3">
                        <button className='p-2 bg-red-700 rounded-md'>Reject</button>
                        <button className='p-2 bg-blue-700 rounded-md'>Accept</button>
                    </div>

                </div>
            </div>

        </section>
    )
}


export default OrderRequest;