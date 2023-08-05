import React from 'react';
import { Alert } from 'antd';

const AlertMessage = ({ message, type = "success", visible, setVisible, closable = true }) => {
    const handleClose = () => {
        setVisible(false);
    };

    return (
        <div className='flex flex-col justify-center w-full pb-4'>
            {visible && (
                <Alert message={message} type={type} closable={closable} afterClose={handleClose} />
            )}
        </div>
    );
};

export default AlertMessage;