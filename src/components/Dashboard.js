import React, { useState } from 'react'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import '../App.css';
import { removeData } from '../store/Data'
import { useDispatch } from 'react-redux';

function Dashboard({ data }) {
    const dispatch = useDispatch()

    const [selected, setSelected] = useState([]);
    console.log(data)



    const handleDelete = (info) => {

        console.log(info)

        dispatch(removeData(info))
    }


    const handleSelect = (event, info) => {
        if (event.target.checked) {

            setSelected([...selected, info])
        }

    }

    const handleMultipleDelete = (event) => {
        selected.map((element) => {
            dispatch(removeData(element))
        })
        setSelected([])
    }

    console.log(selected)
    return (
        <div >
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((info, index) => {
                        return (<tr key={index}>
                            <td><input type="checkbox" onClick={(e) => (handleSelect(e, info))} /></td>
                            <td>{info.name}</td>
                            <td>{info.email}</td>
                            <td>{info.role}</td>
                            <td>
                                <button ><BsPencilSquare /></button>
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
            <button className='delete_selected' onClick={handleMultipleDelete}>Delete Selected</button>
        </div>
    )
}

export default Dashboard