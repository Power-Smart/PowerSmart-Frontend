import React from 'react'

const FormRowDual = ({ children }) => {
    return (
        <div className="grid md:grid-cols-2 md:gap-6">
            {children}
        </div>
    )
}

export default FormRowDual