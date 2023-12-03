import React, { useState } from 'react'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import '../App.css';
import { removeData, editInfoDetails } from '../store/Data'
import { useDispatch } from 'react-redux';
import { MdDownloadDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
function Dashboard({ data }) {
    const dispatch = useDispatch()
    console.log(data)
    const [selected, setSelected] = useState([]);
    const [openEdit, setOpenEdit] = useState(null);
    const [editInput, setEditInput] = useState();
    // console.log(data)



    const handleDelete = (info) => {

        console.log(info)

        dispatch(removeData(info))
    }


    const handleSelect = (event, info) => {
        if (event.target.checked) {

            setSelected([...selected, info])
        }

    }
    const handleEditInput = (event) => {
        setEditInput({ ...editInput, [event.target.name]: event.target.value })
    }
    const editInfo = (event) => {
        dispatch(editInfoDetails(editInput))
        setOpenEdit(null)
        setEditInput(null)

    }

    console.log(openEdit)
    const handleMultipleDelete = (event) => {
        selected.map((element) => {
            dispatch(removeData(element))
        })
        setSelected([])
    }

    console.log(editInput)
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
                            {openEdit == info.id ?
                                <>
                                    <td><input name='name' value={editInput.name} onChange={handleEditInput} /></td>
                                    <td><input name='email' value={editInput.email} onChange={handleEditInput} /></td>
                                    <td><input name='role' value={editInput.role} onChange={handleEditInput} /></td>
                                    <td>
                                        <button
                                            onClick={editInfo}
                                        >
                                            <MdDownloadDone size="20px" color='blue' />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setOpenEdit(null)
                                                setEditInput(null)
                                            }}
                                        >
                                            <RxCross1 size="20px" color='red' />
                                        </button>
                                    </td>
                                </> : <>
                                    <td>{info.name}</td>
                                    <td>{info.email}</td>
                                    <td>{info.role}</td>
                                    <td>
                                        <button onClick={() => {
                                            setOpenEdit(info.id)
                                            setEditInput(info)
                                        }} ><BsPencilSquare /></button>
                                        <button onClick={() => {
                                            handleDelete(info)

                                        }}><BsFillTrashFill /></button>

                                    </td>
                                </>
                            }


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