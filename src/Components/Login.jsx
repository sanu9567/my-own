import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';


function Login1() {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });


  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const inputHandler = (e) => {
    const { id, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [id]: value }));
  };


  const loginHandler = () => {
    axios.post("http://localhost:8080/login", inputs)
      .then((response) => {
        console.log(response.data);
        if (response.data === "success") {
          navigate('/Menu'); // Redirect to dashboard upon successful login
        } else {
          setMessage(response.data);
        }
      })
      .catch((err) => console.error(err));
  };


  return (
    <div style={{
      background: 'url("")',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
     <Box
      height={300}
      width={300}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      p={7}
      className="blurred-box" // Apply the blur effect using CSS
    >
        <br/><br/>
        <Typography variant='h4' color="dimgray">
          LOGIN PAGE
        </Typography>
        <TextField
        id='email'
          label='Enter emailid'
          variant='outlined'
          name='email'
          value={inputs.email}
          onChange={inputHandler}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          name='password'
          value={inputs.password}
          onChange={inputHandler}
        />
       <Button
          variant='contained'
          color='secondary'
          onClick={loginHandler}
          style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}
          className="btn btn-animated"
        >
          <span>Login</span>
        </Button>
        <Typography variant="body1" color="error" >
          {message}
        </Typography>
        <Typography variant='body2' color='textPrimary' component={Link} to={'/sign'} style={{textDecoration: 'none', color: 'white' }}>
  Don't have an account? Sign up here
</Typography>

      </Box>
    </div>
  );
}


export default Login1;
