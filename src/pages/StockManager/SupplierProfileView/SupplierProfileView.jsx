import './SupplierProfileView.css'
import Table from './Table';


const SupplierProfileView = () => {
    return (
        <div className="page__body">
            <div className="profile__content">
                <div className="header">
                    <div className="supply__id">
                        <h4>Supplier ID: <span>#123456</span></h4>
                    </div>
                    <div className="buttons">
                        <button className='remove__btn'>Remove</button>
                        <button className='edit__btn'>Edit</button>
                    </div>
                </div>

                <div className="profile__info">
                    <div className="data__field">
                        <label htmlFor="">Supplier ID: </label>
                        <input type="text" value="#455662" />
                    </div>

                    <div className="data__field">
                        <label htmlFor="">Supplier Name: </label>
                        <input type="text" value="Anawarathna  M.A.D.V.S" />
                    </div>

                    <div className="data__field">
                        <label htmlFor="">Email: </label>
                        <input type="text" value=" nimal@hmail.com" />
                    </div>

                    <div className="data__field">
                        <label htmlFor="">Address: </label>
                        <input type="text" value="No: 2/67, Piliyandala, Colombo" />
                    </div>

                    <div className="data__field">
                        <label htmlFor="">Telephone Number: </label>
                        <input type="text" value="07704065423" />
                    </div>

                    <label htmlFor="">Request Products</label>
                    <div className="provide__products">

                        <div className="product">
                            <h3>PIR Sensor</h3>
                        </div>
                        <div className="product">
                            <h3>PIR Sensor</h3>
                        </div>
                        <div className="product">
                            <h3>PIR Sensor</h3>
                        </div>
                        <div className="product">
                            <h3>PIR Sensor</h3>
                        </div>
                        <div className="product">
                            <h3>PIR Sensor</h3>
                        </div>
                        <div className="product">
                            <h3>PIR Sensor</h3>
                        </div>
                        <div className="product">
                            <h3>PIR Sensor</h3>
                        </div>
                    </div>
                </div>

                <div className="transaction__summary">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default SupplierProfileView