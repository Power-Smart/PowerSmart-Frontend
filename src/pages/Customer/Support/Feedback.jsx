import './support.css'
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { FiSend } from 'react-icons/fi'


const customIcons = {
    1: <FrownOutlined className='smile-icon' />,
    2: <FrownOutlined className='smile-icon' />,
    3: <MehOutlined className='smile-icon' />,
    4: <SmileOutlined className='smile-icon' />,
    5: <SmileOutlined className='smile-icon' />,
};

const Feedback = () => {
    return (
        <div className='customer-feedback text-center text-3xl'>
            <div className="title my">
                <h1 className='text-white mb-4'>Leave a Review</h1>
            </div>

            <div className="one-feedback-question">
                <h2 className='text-white text-ml'>How would you rate your overall experience?</h2>
                <div className="feedback-option mt-3">
                    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
                </div>
            </div>

            <div className="one-feedback-question">
                <h2 className='text-white text-ml'>How would you rate your overall experience?</h2>
                <div className="feedback-option mt-3">
                    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
                </div>
            </div>

            <div className="one-feedback-question">
                <h2 className='text-white text-ml'>How would you rate your overall experience?</h2>
                <div className="feedback-option mt-3">
                    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
                </div>
            </div>

            <div className="one-feedback-question">
                <h2 className='text-white text-ml'>Is there anything else you'd like to share about your experience with us?</h2>
                <form>
                    <textarea type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Send Message<FiSend className='inline-block ml-2' /></button>
                </form>
            </div>

        </div>
    )
}

export default Feedback