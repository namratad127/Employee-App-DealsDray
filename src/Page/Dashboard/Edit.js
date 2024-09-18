// import React, { useState } from 'react'
// import Swal from 'sweetalert2';

// function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

//     const id = selectedEmployee.id;

//     const [firstName, setFirstName] = useState(selectedEmployee.firstName);
//     const [lastName, setLastName] = useState(selectedEmployee.lastName);
//     const [email, setEmail] = useState(selectedEmployee.email);
//     const [salary, setSalary] = useState(selectedEmployee.salary);
//     const [date, setDate] = useState(selectedEmployee.date);

//     const handleUpdate = e => {
//         e.preventDefault();

//         if (!firstName || !lastName || !email || !salary || !date) {
//             return Swal.fire({
//                 icon: 'error',
//                 title: 'Error!',
//                 text: 'All fields are required.',
//                 showConfirmButton: true
//             });
//         }

//         const employee = {
//             id,
//             firstName,
//             lastName,
//             email,
//             salary,
//             date
//         };

//         for (let i = 0; i < employees.length; i++) {
//             if (employees[i].id === id) {
//                 employees.splice(i, 1, employee);
//                 break;
//             }
//         }

//         setEmployees(employees);
//         setIsEditing(false);

//         Swal.fire({
//             icon: 'success',
//             title: 'Updated!',
//             text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
//             showConfirmButton: false,
//             timer: 1500
//         });
//     };

//     return (
//         <div className="small-container">
//             <form onSubmit={handleUpdate}>
//                 <h1>Edit Employee</h1>
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                     id="firstName"
//                     type="text"
//                     name="firstName"
//                     value={firstName}
//                     onChange={e => setFirstName(e.target.value)}
//                 />
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                     id="lastName"
//                     type="text"
//                     name="lastName"
//                     value={lastName}
//                     onChange={e => setLastName(e.target.value)}
//                 />
//                 <label htmlFor="email">Email</label>
//                 <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="salary">Salary ($)</label>
//                 <input
//                     id="salary"
//                     type="number"
//                     name="salary"
//                     value={salary}
//                     onChange={e => setSalary(e.target.value)}
//                 />
//                 <label htmlFor="date">Date</label>
//                 <input
//                     id="date"
//                     type="date"
//                     name="date"
//                     value={date}
//                     onChange={e => setDate(e.target.value)}
//                 />
//                 <div style={{ marginTop: '30px' }}>
//                     <input type="submit" value="Update" />
//                     <input
//                         style={{ marginLeft: '12px' }}
//                         className="muted-button"
//                         type="button"
//                         value="Cancel"
//                         onClick={() => setIsEditing(false)}
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Edit

import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [name, setName] = useState(selectedEmployee.name);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [phone, setPhone] = useState(selectedEmployee.phone);
    const [designation, setdesignation] = useState(selectedEmployee.designation);
    const [gender, setGender] = useState(selectedEmployee.gender);
    const [courses, setCourses] = useState(selectedEmployee.courses || []);
    const [image, setImage] = useState(selectedEmployee.image);

    const handleUpdate = e => {
        e.preventDefault();

        if (!name || !email || !phone || !designation || !gender || courses.length === 0 || !image) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            name,
            email,
            phone,
            designation,
            gender,
            courses,
            image
        };

        const updatedEmployees = employees.map(emp =>
            emp.id === id ? employee : emp
        );

        setEmployees(updatedEmployees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleCourseChange = e => {
        const value = e.target.value;
        setCourses(prevCourses =>
            prevCourses.includes(value)
                ? prevCourses.filter(course => course !== value)
                : [...prevCourses, value]
        );
    };

    const handleImageUpload = e => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <label htmlFor="designation">designation</label>
                <select
                    id="designation"
                    name="designation"
                    value={designation}
                    onChange={e => setdesignation(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="HR">HR</option>
                    <option value="Sales">Sales</option>
                    <option value="Manager">Manager</option>
                </select>
                <label>Gender</label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={e => setGender(e.target.value)}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={e => setGender(e.target.value)}
                    />
                    Female
                </label>
                <label>Course</label>
                <label>
                    <input
                        type="checkbox"
                        value="mca"
                        checked={courses.includes('mca')}
                        onChange={handleCourseChange}
                    />
                    MCA
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="bsc"
                        checked={courses.includes('bsc')}
                        onChange={handleCourseChange}
                    />
                    BSc
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="bca"
                        checked={courses.includes('bca')}
                        onChange={handleCourseChange}
                    />
                    BCA
                </label>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                {image && <img src={image} alt="Preview" style={{ width: '100px', height: '100px' }} />}
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit;
