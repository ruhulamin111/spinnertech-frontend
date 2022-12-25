import React, { useEffect, useState } from 'react'

const TableData = () => {
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/project`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [project])


    return (
        <div>
            <div
                className="overflow-x-auto mt-10 border"
            >
                <table
                    className="table w-full"
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
                                <td>Edit</td>
                                <td>Remove</td>
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