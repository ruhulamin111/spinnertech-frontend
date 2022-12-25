import React from 'react'
import Signin from '../components/Signin'

const Home = () => {
    return (
        <div className='h-screen max-w-7xl md:w-10/12 mx-auto'>
            {/* title part  */}
            <section>
                <h1
                    className='text-2xl font-bold text-center py-5'
                >
                    Spinner Tech
                </h1>
            </section>
            {/* form part  */}
            <section>
                <Signin />
            </section>
        </div>
    )
}

export default Home