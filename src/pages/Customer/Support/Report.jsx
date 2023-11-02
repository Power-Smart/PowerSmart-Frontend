import Form from '../../../components/Forms/Form'
import React, { useEffect, useRef, useState } from 'react'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import { addReport } from '../../../redux/slices/reportSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'



const Report = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)


    const [report, setReport] = useState({
        phone_number: '',
        email: '',
        description: '',
    })

    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        visible: false,
    });


    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(addReport({ ...report, id: user.id, phone_number: phone_number, email: email, description: description }))
            setAlert({
                message: 'Report Submitted Successfully!',
                type: 'success',
                visible: true,
            })
        }
        catch (error) {
            console.log(error);
            setAlert({
                message: 'Error Submitting Report!',
                type: 'error',
                visible: true,
            })
        }
        navigate(-1)
    }

    const resetForm = (e) => {
        e.preventDefault()
        setReport({
            phone_number: '',
            email: '',
            description: '',
            is_active: false,
        })

        setAlert({
            message: '',
            type: 'success',
            visible: false,
        })
    }

    return (

        <Form>
            <h3 className='text-white text-3xl'>Not satisfied with something?</h3>
            <p className='text-white mt-8 mb-3'>We apologize for any inconvenience caused. Please fill n the required details so that one of our customer service representative could get back to you as soon as possible.</p>
            <br></br>
            <FormGroup>
                <TextInput type='text' label='Phone number to reach you' required={true} value={report.phone_number} onChange={(e) => { setReport({ ...report, phone_number: e.target.value }) }} />
            </FormGroup>
            <FormGroup>
                <TextInput type='text' label='Email address' required={true} value={report.email} onChange={(e) => { setReport({ ...report, email: e.target.value }) }} />
            </FormGroup>
            <FormGroup>
                <TextInput type='text' label='Explant your incident to us' required={true} value={report.description} onChange={(e) => { setReport({ ...report, description: e.target.value }) }} />
            </FormGroup>
            <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-10 mb-5">
                <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Submit'} onClick={handleSubmit} />
                <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Cancel'} onClick={resetForm} />
            </div>
        </Form>

    )
}

export default Report