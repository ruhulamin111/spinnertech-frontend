import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const category = event.target.category.value;
        const project = {
            name: name,
            category: category
        }
        fetch(`http://localhost:5000/project/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === true) {
                    toast.success('Your project successfully updated')
                } else {
                    toast.error('Your project already updated')
                }
            })
        event.target.reset()
        navigate('/')
    }

    return (
        <div
            className=' max-w-7xl md:w-10/12 mx-auto '
        >
            {/* simple navbar part  */}
            <div className='flex justify-between items-center h-20 absolute top-0 text-xl'>
                <p
                    className='cursor-pointer'
                >
                    <Link to='/'>
                        <FaHome />
                    </Link>
                </p>

            </div>
            <form
                onSubmit={handleSubmit}
                className='h-screen flex flex-col justify-center items-center'
            >
                <div
                    className="form-control mb-5"
                >
                    <label
                        className="input-group input-group-md flex items-center justify-center gap-2"
                    >
                        <span className='text-lg'>Project new name </span>
                        <input
                            name='name'
                            type="text"
                            placeholder="Project new name"
                            className="input input-bordered input-md py-2 px-5 rounded-full text-black"
                        />
                    </label>
                </div>
                <div
                    className="form-control mb-5"
                >
                    <label
                        className="input-group input-group-md flex items-center justify-center gap-2"
                    >
                        <span className='text-lg'>Project new category </span>
                        <input
                            name='category'
                            type="text"
                            placeholder="Project new category"
                            className="input input-bordered input-md py-2 px-5 rounded-full text-black "
                        />
                    </label>
                </div>
                <div
                    className="form-control "
                >
                    <input
                        type="submit"
                        value='Edit project'
                        className="input input-bordered input-md py-2 px-5 rounded-full border cursor-pointer"
                    />
                </div>
            </form>
        </div>
    )
}

export default Edit