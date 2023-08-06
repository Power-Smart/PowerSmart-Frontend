import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCustomer, updateCustomerProfile } from '../../../redux/slices/customerSlice'
import { updateName } from '../../../redux/slices/userSlice'
import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
import KeyValueLabel from '../../../components/Forms/KeyValueLabel'


const Info = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const customer = useSelector(selectCustomer)
    const [editToggle, setEditToggle] = useState(false)
    const [data, setData] = useState({
        id: 0,
        name: '',
        address: '',
        tel_no: []
    })

    useEffect(() => {
        setData({
            id: user.id,
            name: user.name,
            address: customer.address,
            tel_no: customer.tel_no
        })
    }, [customer, user]);

    console.log(data.tel_no)
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(updateCustomerProfile(data))
            dispatch(updateName(data.name))
            setEditToggle(false)
        } catch (err) {
            console.log(err)
        }
    }

    const resetForm = (e) => {
        e.preventDefault()
        setData({
            id: user.id,
            name: user.name,
            address: customer.address,
            tel_no: customer.tel_no
        })
        setEditToggle(false)
    }

    const toggleToEdit = () => {
        setEditToggle(!editToggle)
    }

    const updateTelNo = (e, index) => {
        e.preventDefault()
        const newTelNoArr = data.tel_no.map((tel, i) => i === index ? e.target.value : tel)
        setData({ ...data, tel_no: newTelNoArr })
    }

    return (

        <Form>
            {!editToggle && <div className='flex w-full justify-end'>
                <FormSubmitButton className="self-end" backgroundColor={'#0856CD'} buttonText={'edit'} onClick={toggleToEdit} />
            </div>}
            {editToggle &&
                <>
                    <FormGroup>
                        <TextInput value={data.name} type='text' label='Name' required={true} onChange={e => { setData({ ...data, name: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                        <TextInput value={data.address} type='text' label='Address' required={true} onChange={e => { setData({ ...data, address: e.target.value }) }} />
                    </FormGroup>
                    {
                        data.tel_no && data.tel_no.map((tel, index) => {
                            return (
                                <FormGroup key={index}>
                                    <TextInput value={tel} type='text' label={`Telephone No ${index + 1}`} required={true} onChange={e => { updateTelNo(e, index) }} />
                                    <button type='button' className='absolute top-0 right-0' onClick={() => { setData({ ...data, tel_no: data.tel_no.filter(no => no !== tel) }) }}>X</button>
                                </FormGroup>
                            )

                        })
                    }
                    <button type='button' className='text-blue-500 p-2' onClick={() => { setData({ ...data, tel_no: [...data.tel_no, ''] }) }}>+ Add</button>
                </>}

            {!editToggle &&
                <>
                    <FormGroup>
                        <KeyValueLabel name='Name' value={data.name} />
                    </FormGroup>
                    <FormGroup>
                        <KeyValueLabel name='Address' value={data.address} />
                    </FormGroup>
                    <FormGroup>
                        {
                            data.tel_no && data.tel_no.map((tel, index) => {
                                return (
                                    <KeyValueLabel key={index} name='Tel No' value={tel} />
                                )

                            })
                        }
                    </FormGroup>
                </>}

            <div className="button-section w-full text-center p-2 m-auto flex justify-around align-middle mt-8">
                {editToggle && <>
                    <FormSubmitButton backgroundColor={'#0856CD'} buttonText={'Save'} onClick={handleSubmit} />
                    <FormSubmitButton backgroundColor={'#CE4444'} buttonText={'Cancel'} onClick={resetForm} />
                </>}
            </div>
        </Form>

    )
}

export default Info