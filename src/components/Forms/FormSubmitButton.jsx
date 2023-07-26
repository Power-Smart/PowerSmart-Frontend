import React from 'react';

const FormSubmitButton = ({ backgroundColor, urlLink, buttonText }) => {
    const defaultBackgroundColor = "bg-red-600"; // Change this to the default color you want

    const handleClick = () => {
        window.location.href = urlLink;
    };

    return (
        <div>
            <button onClick={handleClick} className={`${backgroundColor || defaultBackgroundColor} text-white font-bold py-1 px-7 rounded-3xl`}>
                {buttonText}
            </button>
        </div>
    );
}

export default FormSubmitButton;
