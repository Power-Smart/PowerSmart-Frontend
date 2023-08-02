import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'


const Info = () => {

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
            <FormGroup>
                <TextInput type='text' label='Name' value="Viraj Sandakelum" required={true} />
            </FormGroup>
            <FormGroup>
                <TextInput type='text' label='Address Line 01' value="Gampaha" required={true} />
            </FormGroup>
            <FormGroup>
                <TextInput type='text' label='Address Line 01' value="Colombo Road" required={true} />
            </FormGroup>
            <FormGroup>
                <TextInput type='text' label='Telephone No' value=" +94772878877" required={true} />
            </FormGroup>
            
            <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Submit'} onClick={handleSubmit} />
                <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Cancel'} onClick={resetForm} />
            </div>
        </Form>

    )
}

export default Info