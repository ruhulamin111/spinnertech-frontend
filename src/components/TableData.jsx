import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const TableData = () => {
    // get project 
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch(`https://spinner-tech.onrender.com/project`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [project])
    // delete project 
    const removeProject = (id) => {
        fetch(`https://spinner-tech.onrender.com/project/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === true) {
                    toast.success('Your project successfully deleted')
                } else {
                    toast.error('Your project not available')
                }
            })
    }
    // edit route 
    const navigate = useNavigate()

    return (
        <div
            className='h-screen pb-10'
        >
            <div
                className="overflow-x-auto mt-10 border"
            >
                <table
                    className="table w-full "
                >
                    <thead >
                        <tr className='border-b'>
                            <th className='py-4 '>No</th>
                            <th>Project name</th>
                            <th>Project category</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            project.map((item, index) => <tr
                                key={item._id}
                                className='text-center '
                            >
                                <td className='py-3'>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td
                                    onClick={() => navigate(`/edit/${item._id}`)}
                                    className='cursor-pointer '
                                >
                                    Edit
                                </td>
                                <td
                                    onClick={() => removeProject(item._id)}
                                    className='cursor-pointer '
                                >
                                    Remove
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TableData