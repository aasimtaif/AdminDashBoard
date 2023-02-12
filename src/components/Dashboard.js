import React from 'react'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import '../App.css';

function Dashboard({ data, setData,completeData}) {
    console.log(data)

    const handleDelete = (info) => {
        completeData.splice(completeData.findIndex(a => a.id === info.id), 1)

        //print result
        setData(completeData)
        console.log(data)
        console.log(completeData)
    }


    const handleEdit = () => {

    }


    return (
        <div className='table'>
            <input />
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((info) => {
                        return (<tr>
                            <td><input type="checkbox" /></td>
                            <td>{info.name}</td>
                            <td>{info.email}</td>
                            <td>{info.role}</td>
                            <td>
                                <button onClick={() => {
                                    handleEdit(info)
                                }}><BsPencilSquare /></button>
                                <button onClick={() => {
                                    handleDelete(info)

                                }}><BsFillTrashFill /></button>

                            </td>

                        </tr>)
                    })}
                </tbody>
            </table>
            {/* {data?.map((info) => {
               return(<>{info.name}</>)
            })} */}
        </div>
    )
}

export default Dashboard