import React from 'react';

const FormSubmitButton = ({ backgroundColor = "backgroundColor", urlLink = "urlLink", buttonText = "buttonText" }) => {
    const handleClick = () => {
        window.location.href = urlLink;
    };

    return (
        <div>
            <button onClick={handleClick} className={`bg-[${backgroundColor}] text-white font-bold py-1 px-7 rounded-3xl`}>
                {buttonText}
            </button>
        </div>
    );
}

export default FormSubmitButton;
