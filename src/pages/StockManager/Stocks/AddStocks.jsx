import  { useState } from 'react'
import PageWrapper from '../../../components/Wrappers/PageWrapper'
import PageContent from '../../../components/Wrappers/PageContent'
import TopBar from '../../../components/smallComps/TopBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ContentWrapper from '../../../components/Wrappers/ContentWrapper'
import Form from '../../../components/Forms/Form'
import FormGroup from '../../../components/Forms/FormGroup'
import FormRowDual from '../../../components/Forms/FormRowDual'
import TextInput from '../../../components/Forms/TextInput'
import FormSubmitButton from '../../../components/Forms/FormSubmitButton'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import FileInput from '../../../components/Forms/FileInput'
import SelectInput from '../../../components/Forms/SelectInput'

const AddStocks = () => {
    // const navigate = useNavigate();
    // const { isLogged, user } = useSelector(state => state.user);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedOption, setselectedOption] = useState('');

    // useEffect(() => {
    //     if (!isLogged || user.role == 0) {
    //         navigate('/login');
    //     }
    // }, [])

    const categories = [
        { value: '', label: 'Category' },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        e.preventDefault()
        setSelectedFile(file);
      };

      const handleOptionChange = (e) => {
        e.preventDefault()
        setselectedOption(e.target.value)
    }

    const handleSAveStock = (e) => {
        e.preventDefault()
        alert('Form Submitted')
    }

    const clearForm = (e) => {
        e.preventDefault()
        alert('Form Reset')
    }

    return (
        <PageWrapper>
            <Sidebar />
            <PageContent>
                <TopBar title="Complaint" image="https://avatars.githubusercontent.com/u/73744585?v=4" />
                <ContentWrapper>
                <Form>
                    <FormGroup>
                        <FileInput id="stockImage" accept={'image/*'} selectedFile={selectedFile} onChange={handleFileChange} />
                    </FormGroup>
                        <FormGroup>
                            <TextInput type='text' label='Name' required={true} />
                        </FormGroup>
                        <FormRowDual>
                            <FormGroup>
                                <TextInput type='text' label='Selling Price' required={true} />
                            </FormGroup>
                            <FormGroup>
                                <SelectInput id={'category'} categories={categories} selectedOption={selectedOption} onChange={handleOptionChange} required={true} />
                            </FormGroup>
                        </FormRowDual>
                        <FormGroup>
                            <TextInput type='text' label='Description' required={true} />
                        </FormGroup>
                        <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
                            <FormSubmitButton backgroundColor={'#0856CD'} urlLink={'register'} buttonText={'Save'} onClick={handleSAveStock} />
                            <FormSubmitButton backgroundColor={'#CE4444'} urlLink={'register'} buttonText={'Cancel'} onClick={clearForm} />
                        </div>
                    </Form>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    )
}

export default AddStocks