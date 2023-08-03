import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import PageContent from '../../components/Wrappers/PageContent'

const PageNotFound = () => {
    return (
        <PageWrapper>
            <PageContent>
                <div className="relative flex flex-col items-center justify-center m-10">
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                    <div className="flex flex-col justify-center items-center m-10">
                        <h1 className="my-2 text-gray-100 font-bold text-2xl">
                            Looks like you've found the
                            doorway to the great nothing
                        </h1>
                        <p className="my-2 text-gray-200">Sorry about that! Please visit our hompage to get where you need to go.</p>
                        <Link to="/">
                            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-[#0e739e] text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
                        </Link>
                    </div>
                </div>
            </PageContent>
        </PageWrapper>
    )
}

export default PageNotFound