import React from 'react'

const FormTitle = ({ children, align = "center", color = "white" }) => {

    const styles = {
        textAlign: align,
        color: color,
    }

    return (
        <h1 className='text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6' style={styles}>
            {children}
        </h1>
    )


}

export default FormTitle