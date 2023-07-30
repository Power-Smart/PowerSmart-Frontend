import React from 'react'

const PageWrapper = ({ children }) => {
    return (
        <section className='h-screen flex w-full overflow-hidden'>
            {children}
        </section>

    )
}

export default PageWrapper