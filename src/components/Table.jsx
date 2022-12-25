import React from 'react'
import { toast } from 'react-toastify';

const Table = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const category = event.target.category.value;
        const project = {
            name: name,
            category: category
        }
        fetch(`http://localhost:5000/project`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === true) {
                    toast.success('Your project successfully added')
                } else {
                    toast.error('Your project already added')
                }
            })
        event.target.reset()
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='flex justify-between mt-10 items-center'
            >
                <div
                    className="form-control "
                >
                    <label
                        className="input-group input-group-md flex items-center justify-center gap-2"
                    >
                        <span className='text-lg'>Project name </span>
                        <input
                            name='name'
                            type="text"
                            placeholder="Project name"
                            className="input input-bordered input-md py-2 px-5 rounded-full text-black"
                        />
                    </label>
                </div>
                <div
                    className="form-control "
                >
                    <label
                        className="input-group input-group-md flex items-center justify-center gap-2"
                    >
                        <span className='text-lg'>Project category </span>
                        <input
                            name='category'
                            type="text"
                            placeholder="Project category"
                            className="input input-bordered input-md py-2 px-5 rounded-full text-black"
                        />
                    </label>
                </div>
                <div
                    className="form-control "
                >
                    <input
                        type="submit"
                        value='Add project'

                        className="input input-bordered input-md py-2 px-5 rounded-full border cursor-pointer"
                    />
                </div>
            </form>
        </div>
    )
}

export default Table