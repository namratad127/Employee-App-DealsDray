// // // src/pages/login/Login.js

// // import React, { useState } from 'react';
// // import './Login.css'; // Import the CSS file for styling

// // function Login({ onLogin }) {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');

// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         // Basic validation (you can improve this)
// //         if (!email || !password) {
// //             setError('Please fill in all fields');
// //             return;
// //         }

// //         // Simulate login
// //         // Replace this with real authentication logic
// //         if (email === 'user@example.com' && password === 'password') {
// //             onLogin(); // Notify the parent component (Dashboard) that login was successful
// //         } else {
// //             setError('Invalid email or password');
// //         }
// //     };

// //     return (
// //         <div className="login-container">
// //             <h2>Login</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label htmlFor="email">Email:</label>
// //                     <input
// //                         type="email"
// //                         id="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="password">Password:</label>
// //                     <input
// //                         type="password"
// //                         id="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                     />
// //                 </div>
// //                 {error && <p className="error">{error}</p>}
// //                 <button type="submit">Login</button>
// //             </form>
// //         </div>
// //     );
// // }

// // export default Login;



// // src/pages/login/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError(''); // Clear previous errors

//         try {
//             const response = await axios.post('http://localhost:5000/api/auth/login', {
//                 email,
//                 password,
//             });

//             if (response.data.token) {
//                 // Save the token to local storage or state (for session management)
//                 localStorage.setItem('token', response.data.token);
//                 alert('Login successful!');
//                 // Redirect to another page if needed
//             }
//         } catch (error) {
//             setError('Invalid email or password');
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default Login;

