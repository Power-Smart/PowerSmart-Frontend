import PageWrapper from '../../../components/Wrappers/PageWrapper'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import MainSidebar from '../../../components/Sidebar/Customer/MainSidebar'
import TopBar from '../../../components/smallComps/TopBar'
import CheckoutBox from '../../../components/Cards/CheckoutBox'
import { useDispatch, useSelector } from 'react-redux'
import { selectOrders, fetchOrder, selectOrderStatus } from '../../../redux/slices/orderSlice'
import { selectPlaces, fetchPlaces, selectPlacesStatus } from '../../../redux/slices/placesSlice'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../../../components/smallComps/LoadingSpinner'
import CheckoutButton from '../../../components/smallComps/CheckoutButton'

const dataSet = [
    {
        place: 'Home',
        room: 'Living Room',
        total: '22000'
    },
    {
        place: 'Workplace',
        room: 'Meeting Room',
        total: '12000'
    },
    {
        place: 'Home',
        room: 'Living Room',
        total: '22000'
    },
    {
        place: 'Workplace',
        room: 'Meeting Room',
        total: '12000'
    },
];

const BuyingCart = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const orders = useSelector(selectOrders);
    const ordersStatus = useSelector(selectOrderStatus);
    const places = useSelector(selectPlaces);
    const placesStatus = useSelector(selectPlacesStatus);
    const [groupedOrders, setGroupedOrders] = useState({});
    const [totals, setTotals] = useState({});
    const [checked, setChecked] = useState({});

    useEffect(() => {
        if (user.id && ordersStatus === 'idle') {
            dispatch(fetchOrder(user.id));
        }
        if (ordersStatus === 'succeeded') {
            if (user.id && placesStatus === 'idle') {
                dispatch(fetchPlaces(user.id));
            }
            const grouped = {};
            orders.forEach(order => {
                if (grouped[order.place_id]) {
                    grouped[order.place_id].push(order);
                } else {
                    grouped[order.place_id] = [order];
                    grouped[order.place_id].place = places.find(place => place.place_id == order.place_id)?.name;
                }
            });
            setGroupedOrders(grouped);
            // console.log(grouped);
        }
    }, [orders, user, dispatch, places]);

    const onChange = (e, place_id) => {
        setChecked(checked => {
            if (e.target.checked) {
                return { ...checked, [place_id]: totals[place_id] };
            } else {
                return { ...checked, [place_id]: 0 };
            }
        });
    };

    return (
        <PageWrapper>
            <MainSidebar />
            <PageContent>
                <TopBar image="https://avatars.githubusercontent.com/u/73744585?v=4" title="Buying Cart" baclLink='/' />
                <ContentWrapper>
                    <div className='flex flex-col items-center justify-center w-full h-full'>
                        {ordersStatus === 'loading' && <LoadingSpinner />}
                        {ordersStatus === 'succeeded' && Object.keys(groupedOrders).map((key) =>
                            <CheckoutBox
                                place_id={key}
                                key={key}
                                items={groupedOrders[key]}
                                place={groupedOrders[key].place}
                                setTotals={setTotals}
                                setChecked={setChecked}
                                onChange={onChange}
                            />
                        )}
                        {ordersStatus === 'loading' && !groupedOrders && <h1 className='text-center text-gray-600'>No Orders Yet !</h1>}
                        <hr className='border-gray-800 w-4/5 m-4' />
                        {ordersStatus === 'succeeded' && groupedOrders &&
                            <div className="text-lg leading-6 text-slate-900 dark:text-white font-semibold select-none mx-2 my-3 w-4/5 flex justify-between items-center">
                                <div className='flex items-center'>
                                    <h1 className='px-2'>{"Total"}</h1>
                                </div>
                                <div className='px-2'>Rs. {checked ? Object.keys(checked).reduce((acc, key) => acc + checked[key], 0).toFixed(2) : 0}</div>
                            </div>}
                        {ordersStatus === 'succeeded' && groupedOrders &&
                            <div className='flex flex-end w-4/5 justify-end my-4'>
                                <CheckoutButton checkedList={checked} setChecked={setChecked} userID={user.id} total={checked ? Object.keys(checked).reduce((acc, key) => acc + checked[key], 0).toFixed(2) : 0} />
                            </div>
                        }
                    </div>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default BuyingCart