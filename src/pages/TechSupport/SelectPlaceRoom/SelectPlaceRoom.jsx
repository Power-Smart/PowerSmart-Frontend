import './SelectPlaceRoom.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import PageWrapper from '../../../components/Wrappers/PageWrapper';
import ContentWrapper from '../../../components/Wrappers/ContentWrapper';
import PageContent from '../../../components/Wrappers/PageContent';
import { Link, useParams } from 'react-router-dom';
import TechSupportTopBar from '../TechSupportTopBar/TechSupportTopBar'
import MainSidebar from '../../../components/Sidebar/TechSupport/MainSidebar';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarketPlaceItems, selectMarketPlaceStatus, selectMarketPlaceItems } from '../../../redux/slices/techsupport/marketPlaceSlice'
import { addItems } from '../../../redux/slices/techsupport/customerCartSlice';
import { useNavigate } from 'react-router-dom';


const SelectPlaceRoom = () => {

    const { orderID,customerID } = useParams();
    const { itemID } = useParams();
    const navigate = useNavigate();

    console.log(orderID);


    const dispatch = useDispatch();
    const marketPlaceItem = useSelector(selectMarketPlaceItems);
    const marketPlaceStatus = useSelector(selectMarketPlaceStatus)

    
    useEffect(() => {
        dispatch(fetchMarketPlaceItems());
    }, [])

    const marketPlaceItemByItemID = marketPlaceItem.filter((data) => {
        if( data.item_id == itemID){
            return data
        }
    })
    
    
    const [itemCount, setItemCount] = useState(1);
    
    
    const itemRemove = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1)
        }
    }
    
    const itemAdd = () => {
        if (itemCount < marketPlaceItemByItemID[0].quantity) {
            setItemCount(itemCount + 1)
        }
    }

    
    const addItemCart = (marketPlaceItemByItemID) => {
            dispatch(addItems({
                item_id: marketPlaceItemByItemID[0].item_id,
                name: marketPlaceItemByItemID[0].name,
                price: marketPlaceItemByItemID[0].price,
                quantity: itemCount,
                description: marketPlaceItemByItemID[0].description,
                image: marketPlaceItemByItemID[0].image,
                is_build_in_package: marketPlaceItemByItemID[0].is_build_in_package,
                place_name: 'place',
                room_name: 'room'
            }))
    }

    const cancel = () => {
        navigate(-1);
    }


    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TechSupportTopBar title={'Market Place'} />
                <ContentWrapper>
                    <div className="requestInfoBox  mx-auto w-[800px]">
                        <div className="infoHeader">
                            <div className="title">
                                <h3>Select quantity</h3>
                            </div>
                        </div>
                        <div className="form">
                            <div className="item-image flex justify-center items-center">
                                <img src="https://microchip.lk/wp-content/uploads/2019/05/37-sensor-in-kit.jpg" alt="ddd" className='w-40 h-40 rounded-md' />
                            </div>

                            <div className="item-name">
                                <h3>Item Name: {marketPlaceItemByItemID[0].name}</h3>
                            </div>

                            <div className="item-price">
                                <h3>Price: Rs. {marketPlaceItemByItemID[0].price}</h3>
                            </div>

                            <div className="item-description">
                                <p>Description: {marketPlaceItemByItemID[0].description}</p>
                            </div>

                            <div className="item-quantity">
                                <p>Quantity: {marketPlaceItemByItemID[0].quantity}</p>
                            </div>

                            {/* <div className="data__field">
                                <label htmlFor="">Place Name: </label>
                                <input type="text" />
                            </div>

                            <div className="data__field">
                                <label htmlFor="">Room Name: </label>
                                <input type="text" />
                            </div> */}

                            <h1 className='mb-2'>Select Quantity</h1>
                            <div className="select-item-count flex flex-row justify-between items-center w-20">
                                <div className="decrement border border-[#006DFF] rounded-md p-1">
                                    <button className='flex items-center justify-center' onClick={(e) => itemRemove()}><AiOutlineMinus /></button>
                                </div>
                                <div className="count">
                                    <h1>{itemCount}</h1>
                                </div>
                                <div className="increment border border-[#006DFF] rounded-md p-1">
                                    <button className='flex items-center justify-center' onClick={(e) => itemAdd()}><AiOutlinePlus /></button>
                                </div>
                            </div>


                            <div className="button flex justify-center mt-3">
                                <Link to={`/tech/marketPlace/${orderID}/${customerID}`}>
                                    <button className='px-4 py-1 bg-blue-700 rounded-lg' onClick={(e) => addItemCart(marketPlaceItemByItemID)}>Add to plan</button>
                                </Link>
                                    <button className='px-4 py-1 bg-red-700 rounded-lg ml-3' onClick={(e) => cancel()}>Cancel</button>
                            </div>

                        </div>
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default SelectPlaceRoom