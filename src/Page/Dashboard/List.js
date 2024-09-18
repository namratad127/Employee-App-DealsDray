// import React from 'react'

// function List({ employees, handleEdit, handleDelete }) {

//     const formatter = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//         minimumFractionDigits: null
//     });

//     return (
//         <div className='contain-table'>
//             <table className='striped-table'>
//                 <thead>
//                     <tr>
//                         <th>No.</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Email</th>
//                         <th>Salary</th>
//                         <th>Date</th>
//                         <th colSpan={2} className="text-center">
//                             Actions
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {employees.length > 0 ? (
//                         employees.map((employee, i) => (
//                             <tr key={employee.id}>
//                                 <td>{i + 1}</td>
//                                 <td>{employee.firstName}</td>
//                                 <td>{employee.lastName}</td>
//                                 <td>{employee.email}</td>
//                                 <td>{formatter.format(employee.salary)}</td>
//                                 <td>{employee.date} </td>
//                                 <td className="text-right">
//                                     <button
//                                         onClick={() => handleEdit(employee.id)}
//                                         className="button muted-button"
//                                     >
//                                         Edit
//                                     </button>
//                                 </td>
//                                 <td className="text-left">
//                                     <button
//                                         onClick={() => handleDelete(employee.id)}
//                                         className="button muted-button"
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan={7}>No Employees</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default List

import React from 'react';

function List({ employees, handleEdit, handleDelete }) {

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Courses</th>
                        <th>Image</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.courses.join(', ')}</td>
                                <td>
                                    {employee.image && (
                                        <img
                                            src={employee.image}
                                            alt="Employee"
                                            style={{ width: '50px', height: '50px' }}
                                        />
                                    )}
                                </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={9}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default List;
