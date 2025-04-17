// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Button, Box } from '@mui/material';
// import './navbar.css';

// export default function Navbar() {
//   return (
//     <AppBar position="static" className="navbar">
//       <Toolbar className="toolbar">
//         {/* Left - Login & Register */}
//         <Box className="left-options">
//           <Button color="secondary" variant="contained" component={Link} to="/login">
//             Login
//           </Button>
//           <Button color="secondary" variant="outlined" component={Link} to="/register">
//             Register
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import './navbar.css';

export default function Navbar() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        {/* Left - Login & Register */}
        <Box className={`left-options ${animate ? 'animate' : ''}`}>
          <Button color="secondary" variant="contained" component={Link} to="/login">
            Login
          </Button>
          <Button color="secondary" variant="outlined" component={Link} to="/register">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
