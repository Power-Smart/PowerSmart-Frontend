import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCustomer, updateCustomerProfile } from '../../../redux/slices/customerSlice'
import { updateName } from '../../../redux/slices/userSlice'
import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import KeyValueLabel from '../../../components/Forms/KeyValueLabel'
import { AiFillEdit } from "react-icons/ai";
import KeyValueInput from '../../../components/Forms/KeyValueInput'
import { fetchTechSupport,selectTechSupport, updateTechSupportProfile } from '../../../redux/slices/techSupportSlice';



const Info = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const customer = useSelector(selectCustomer)
    const [editToggle, setEditToggle] = useState(false)


    const techSupportInfo = useSelector(selectTechSupport);


    useEffect(()=> {
        dispatch(fetchTechSupport(user.id));
    },[dispatch,user])


    const [data, setData] = useState({
        id: 0,
        first_name: '',
        last_name: '',
        tel_no: []
    })

    useEffect(() => {
        setData({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            tel_no: customer.tel_no
        })
    }, [customer, user]);

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(updateTechSupportProfile(data))
            dispatch(updateName(data))
            setEditToggle(false)
        } catch (err) {
            console.log(err)
        }
    }

    const resetForm = (e) => {
        e.preventDefault()
        setData({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            tel_no: customer.tel_no
        })
        setEditToggle(false)
    }

    const toggleToEdit = () => {
        setEditToggle(!editToggle)
    }

    const updateTelNo = (e, index) => {
        e.preventDefault()
        const newTelNoArr = techSupportInfo.tel_no.map((tel, i) => i === index ? e.target.value : tel)
        setData({ ...data, tel_no: newTelNoArr })
    }

    return (
        <div className='grid grid-cols-2 gap-[100px]'>
            <div className="profile-details">
                {!editToggle && <div className='flex w-full justify-end'>
                    <div className='p-2 bg-white/10 cursor-pointer rounded-md' onClick={toggleToEdit}>
                        Edit Profile<AiFillEdit color='white' className='inline-block mb-1 ml-2' />
                    </div>
                </div>}

                
                {editToggle &&
                    <div className="mt-8">
                        <FormGroup>
                            <TextInput value={data.first_name} type='text' label='First Name' required={true} onChange={e => { setData({ ...data, first_name: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <TextInput value={data.last_name} type='text' label='Last Name' required={true} onChange={e => { setData({ ...data, last_name: e.target.value }) }} />
                        </FormGroup>
                        {
                            techSupportInfo.tel_no && techSupportInfo.tel_no.map((tel, index) => {
                                return (
                                    <FormGroup key={index}>
                                        <TextInput value={tel} type='text' label={`Telephone No ${index + 1}`} required={true} onChange={e => { updateTelNo(e, index) }} />
                                        {techSupportInfo.tel_no.length > 1 && <button type='button' className='absolute top-0 right-0' onClick={() => { setData({ ...data, tel_no: techSupportInfo.tel_no.filter(no => no !== tel) }) }}>X</button>}
                                    </FormGroup>
                                )
                            })
                        }
                        {techSupportInfo.tel_no.length < 3 && <button type='button' className='text-blue-500 p-2' onClick={() => { setData({ ...data, tel_no: [...techSupportInfo.tel_no, ''] }) }}>+ Add Tel No</button>}
                    </div>
                }

                {!editToggle &&
                    <div className='py-3'>
                        <FormGroup>
                            <KeyValueLabel name='First Name' value={data.first_name} />
                        </FormGroup>
                        <FormGroup>
                            <KeyValueLabel name='Last Name' value={data.last_name} />
                        </FormGroup>
                        <FormGroup>
                            <div className="flex flex-wrap space-x-4 text-base lg:text-lg md:text-sm rounded-xl flex-col">
                                <label className='px-3 py-1 rounded-xl text-blue-400'>Telephone Numbers : </label>
                                {
                                    techSupportInfo.tel_no && techSupportInfo.tel_no.map((tel, index) => {
                                        return (
                                            <label key={tel} className='m-1 px-3 py-1 rounded-xl bg-gray-900'>{tel}</label>
                                        )

                                    })
                                }
                            </div>
                        </FormGroup>
                    </div>}

                <div className="button-section w-[250px] text-center p-2 m-auto flex justify-around align-middle mt-8">
                    {editToggle && <>
                        <FormSubmitButton backgroundColor={'#0856CD'} buttonText={'Save'} onClick={handleSubmit} />
                        <FormSubmitButton backgroundColor={'#CE4444'} buttonText={'Cancel'} onClick={resetForm} />
                    </>}
                </div>
            </div>


            <div className="profile-update">
                <div className='py-3'>
                    <FormGroup>
                        <KeyValueInput name='Current Password' placeholder='Type your current password' />
                    </FormGroup>
                    <FormGroup>
                        <KeyValueInput name='New Password' placeholder='Type your new password' />
                    </FormGroup>
                    <FormGroup>
                        <KeyValueInput name='Confirm Password' placeholder='Confirm your new password' />
                    </FormGroup>
                </div>

                <div className="button-section w-[250px] text-center p-2 m-auto flex justify-around align-middle">
                    <FormSubmitButton backgroundColor={'#0856CD'} buttonText={'Update Password'} onClick={handleSubmit} />
                    {/* <FormSubmitButton backgroundColor={'#CE4444'} buttonText={'Cancel'} onClick={resetForm} /> */}
                </div>
            </div>
        </div>

    )
}

export default Info