import './SelectPlace&Room.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'


const SelectPlaceRoom = () => {
    return (
        <section className='page__body'>
            <div className="requestInfoBox">
                <div className="infoHeader">
                    <div className="title">
                        <h3>Select a Place and Room</h3>
                    </div>
                    <div className="closeBtn">
                        <AiOutlineCloseCircle className='h-8 w-8 text-red-500 cursor-pointer' />
                    </div>
                </div>

                <div className="form">
                    <div className="data__field">
                        <label htmlFor="">Select Place: </label>
                        <select name="" id="">
                            <option value="">Home</option>
                        </select>
                    </div>

                    <div className="data__field">
                        <label htmlFor="">Select Room: </label>
                        <select name="" id="">
                            <option value="">Room 1</option>
                        </select>
                    </div>


                    <div className="button flex justify-center mt-3">
                        <button className='px-4 py-1 bg-blue-700 rounded-lg'>Add to plan</button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default SelectPlaceRoom