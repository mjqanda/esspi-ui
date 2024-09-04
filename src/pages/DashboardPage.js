import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TableComponent from '../components/TableComponent'; // Ensure this component is set up to handle the data
import { Container, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { getLoginRecords } from '../api/ApiService';

const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState({ id: '', userId: '', loginTime: '', username: '', password: '', createdDate: '' });

  useEffect(() => {
    fetchLoginRecords();
  }, []);

  const fetchLoginRecords = async () => {
    try {
      const response = await getLoginRecords();
      setData(response);
    } catch (error) {
      console.error('Error fetching login records:', error);
    }
  };

  const handleOpen = (row) => {
    setCurrentRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentRow({ id: '', userId: '', loginTime: '', username: '', password: '', createdDate: '' });
  };

  const handleLogout = () => {
    // Implement logout functionality
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem'
      }}
    >
      <Typography variant="h4" gutterBottom>Login Records</Typography>
      <Link to="/" onClick={handleLogout}>Go to Login Page</Link>

      <TableComponent data={data} onEdit={handleOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentRow.id ? 'Edit Record' : 'View Record'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Username"
            fullWidth
            value={currentRow.username}
            disabled
          />
          <TextField
            margin="dense"
            label="Password"
            fullWidth
            value={currentRow.password}
            disabled
          />
          <TextField
            margin="dense"
            label="Login Time"
            fullWidth
            value={currentRow.loginTime}
            disabled
          />
          <TextField
            margin="dense"
            label="Created Date"
            fullWidth
            value={currentRow.createdDate}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DashboardPage;
