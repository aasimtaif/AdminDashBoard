import React from 'react'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import '../App.css';
import { setInfo ,removeData} from '../store/Data'
import { useDispatch ,useSelector} from 'react-redux';

function Dashboard({ data }) {
    const dispatch = useDispatch()
    const details = useSelector(state => state.data.info)

    console.log(data)
    console.log(details)


    const handleDelete = (info,index) => {
        // details.splice(details.findIndex(a => a.id === info.id) , 1)
    console.log(details)
    console.log(info)

        dispatch(removeData(info))
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
                    {data?.map((info,index) => {
                        return (<tr key = {index}>
                            <td><input type="checkbox" /></td>
                            <td>{info.name}</td>
                            <td>{info.email}</td>
                            <td>{info.role}</td>
                            <td>
                                <button onClick={() => {
                                    handleEdit(info,index)
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