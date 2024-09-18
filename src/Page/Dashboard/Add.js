// import React, { useState, useRef, useEffect } from 'react'
// import Swal from 'sweetalert2';

// function Add({ employees, setEmployees, setIsAdding }) {

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [salary, setSalary] = useState('');
//     const [date, setDate] = useState('');

//     const textInput = useRef(null);

//     useEffect(() => {
//         textInput.current.focus();
//     }, [])

//     const handleAdd = e => {
//         e.preventDefault();
//         if (!firstName || !lastName || !email || !salary || !date) {
//             return Swal.fire({
//                 icon: 'error',
//                 title: 'Error!',
//                 text: 'All fields are required.',
//                 showConfirmButton: true
//             });
//         }

//         const id = employees.length + 1;
//         const newEmployee = {
//             id,
//             firstName,
//             lastName,
//             email,
//             salary,
//             date
//         }
//         employees.push(newEmployee);
//         setEmployees(employees);
//         setIsAdding(false);

//         Swal.fire({
//             icon: 'success',
//             title: 'Added!',
//             text: `${firstName} ${lastName}'s data has been Added.`,
//             showConfirmButton: false,
//             timer: 1500
//         });
//     }


//     return (
//         <div className="small-container">
//             <form onSubmit={handleAdd}>
//                 <h1>Add Employee</h1>
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                     id="firstName"
//                     type="text"
//                     ref={textInput}
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
//                     <input type="submit" value="Add" />
//                     <input
//                         style={{ marginLeft: '12px' }}
//                         className="muted-button"
//                         type="button"
//                         value="Cancel"
//                         onClick={() => setIsAdding(false)}
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Add


import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';


function Add({ employees, setEmployees, setIsAdding }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [designation, setdesignation] = useState('');
    const [gender, setGender] = useState('');
    const [courses, setCourses] = useState([]);
    const [image, setImage] = useState(null);

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    const handleAdd = e => {
        e.preventDefault();
        if (!name || !email || !phone || !designation || !gender || courses.length === 0 || !image) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            name,
            email,
            phone,
            designation,
            gender,
            courses,
            image
        }
        employees.push(newEmployee);
        setEmployees([...employees]);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }

    const handleImageUpload = e => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleCourseChange = e => {
        const value = e.target.value;
        setCourses(prevCourses =>
            prevCourses.includes(value)
                ? prevCourses.filter(course => course !== value)
                : [...prevCourses, value]
        );
    };

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    ref={textInput}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;
