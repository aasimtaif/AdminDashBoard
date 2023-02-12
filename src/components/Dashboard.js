import React from 'react'
import '../App.css';

function Dashboard({ data }) {
    console.log(data)

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
                            <td><input type="checkbox"/></td>
                            <td>{info.name}</td>
                            <td>{info.email}</td>
                            <td>{info.role}</td>
                            <td></td>

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