import { signOut } from 'firebase/auth'
import React from 'react'
import { FaHome, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Table from '../components/Table'
import TableData from '../components/TableData'
import auth from '../firebase.init'

const Home = () => {

    return (
        <div
            className='max-w-7xl md:w-10/12 mx-auto '
        >
            {/* simple navbar part  */}
            <div
                className='flex justify-between items-center h-20 sticky top-0 text-xl'
            >
                <p
                    className='cursor-pointer'
                >
                    <Link to='/'>
                        <FaHome />
                    </Link>
                </p>
                <p
                    className='cursor-pointer'
                    onClick={() => signOut(auth)}
                >
                    <FaSignOutAlt />
                </p>
            </div>
            {/* table part  */}
            <div className='text-center'>
                <h1
                    className='text-5xl font-bold mb-5'
                >
                    Spinner Tech
                </h1>
                <h2
                    className='text-xl mb-5'
                >
                    Total project of 2022
                </h2>
            </div>
            {/* table component  */}
            <Table />
            <TableData />

        </div>
    )
}

export default Home