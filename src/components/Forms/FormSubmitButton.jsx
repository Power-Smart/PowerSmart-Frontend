import React from 'react';

const FormSubmitButton = ({ backgroundColor = "backgroundColor", urlLink = "urlLink", buttonText = "buttonText", onClick = undefined }) => {

    return (
        <div>
            <button onClick={onClick} className={`text-white font-bold py-1 px-7 rounded-3xl`} style={{ backgroundColor }} type='button'>
                {buttonText}
            </button>
        </div>
    );
}

export default FormSubmitButton;
