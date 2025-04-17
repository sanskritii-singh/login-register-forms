import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import './form.css';

import { TextField, Button, Typography, Box } from '@mui/material';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box className="form-container">
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Register
      </Typography>

      <TextField
        fullWidth
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2, backgroundColor: '#a7c7e7', '&:hover': { backgroundColor: '#7aaed6' } }}
        onClick={handleRegister}
      >
        REGISTER
      </Button>
    </Box>
  );
}
