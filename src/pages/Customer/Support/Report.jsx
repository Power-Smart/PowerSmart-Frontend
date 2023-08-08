import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'


const Report = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Form Submitted')
    }

    const resetForm = (e) => {
        e.preventDefault()
        alert('Form Reset')
    }

    return (

        <Form>
            <h3 className='text-white text-3xl'>Not satisfied with something?</h3>
            <p className='text-white mt-8 mb-3'>We apologize for any inconvenience caused. Please fill n the required details so that one of our customer service representative could get back to you as soon as possible.</p>
            <br></br>
            <FormGroup>
                <TextInput type='text' label='Phone number to reach you' required={true} />
            </FormGroup>
            <FormGroup>
                <TextInput type='text' label='Email address' required={true} />
            </FormGroup>
            <FormGroup>
                <TextInput type='text' label='Explant your incident to us' required={true} />
            </FormGroup>
            <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-10 mb-5">
                <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Submit'} onClick={handleSubmit} />
                <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Cancel'} onClick={resetForm} />
            </div>
        </Form>

    )
}

export default Report