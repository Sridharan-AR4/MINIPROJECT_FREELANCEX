// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, Box, CircularProgress, FormControlLabel, Checkbox, FormControl } from '@mui/material';
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate, Link } from 'react-router-dom';
// import Userservice from "../../services/Userservice";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       toast.error('All fields are required.');
//       return;
//     }
//   };

//   return (
//     <Container maxWidth="xs" style={{ marginTop: '100px' }}>
//       <Box boxShadow={3} p={4} borderRadius={2} textAlign="center">
//         <Typography variant="h4" gutterBottom>Login to FreelanceX</Typography>
//         <FormControl fullWidth required>
//           <TextField
//             fullWidth
//             label="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             variant="outlined"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             margin="normal"
//             variant="outlined"
//             required
//           />
//           <FormControlLabel
//             control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
//             label="Remember Me"
//           />
//           <Button
//             fullWidth
//             type="submit"
//             variant="contained"
//             color="primary"
//             onClick={handleSubmit}
//             style={{ marginTop: '20px' }}
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : 'Login'}
//           </Button>
//           <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
//             Don’t have an account? <Link to="/signup" style={{ color: 'blue' }}>Sign up</Link>
//           </Typography>
//         </FormControl>
//       </Box>
//       <ToastContainer />
//     </Container>
//   );
// };

// export default Login;
// Signup.js
import React, { useState } from 'react';
import './Signup.css';
import FreelancerLogin from './FreelancerLogin';
import ClientLogin from './ClientLogin';

const Login = () => {
  const [role, setRole] = useState(null);

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="signup-container">
      {!role ? (
        <div className="role-selection">
          <h2>Login</h2>
          <p>Are you login as a Freelancer or Client?</p>
          <button onClick={() => handleRoleSelection('freelancer')} className="role-button">
            Freelancer
          </button>
          <button onClick={() => handleRoleSelection('client')} className="role-button">
            Client
          </button>
        </div>
      ) : role === 'freelancer' ? (
        <FreelancerLogin />
      ) : (
        <ClientLogin />
      )}
    </div>
  );
};

export default Login;

