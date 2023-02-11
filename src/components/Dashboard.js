import React from 'react'
import '../App.css';

function Dashboard({data}) {
    console.log(data)
    return (
        <div className='table'>
            <input/>
            <table>
                <thead>
                    <tr>
                        <th><input type = "checkbox"/></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th><input type = "checkbox"/></th>
                        <td>text1.1</td>
                        <td>text1.2</td>
                        <td>text1.3</td>
                        <td>text1.4</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard