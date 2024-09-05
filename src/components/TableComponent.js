import React, { useState } from 'react';
import {
  Button, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TableSortLabel, Paper
} from '@mui/material';

const TableComponent = ({ data, onEdit }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');

  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && order === 'asc';
    setOrder(isAscending ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'id'}
                direction={orderBy === 'id' ? order : 'asc'}
                onClick={() => handleRequestSort('id')}
              >
                ID
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'userId'}
                direction={orderBy === 'userId' ? order : 'asc'}
                onClick={() => handleRequestSort('userId')}
              >
                User ID
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'username'}
                direction={orderBy === 'username' ? order : 'asc'}
                onClick={() => handleRequestSort('username')}
              >
                Username
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'loginTime'}
                direction={orderBy === 'loginTime' ? order : 'asc'}
                onClick={() => handleRequestSort('loginTime')}
              >
                Password
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'createdDate'}
                direction={orderBy === 'createdDate' ? order : 'asc'}
                onClick={() => handleRequestSort('createdDate')}
              >
                Login Time
              </TableSortLabel>
            </TableCell>
            <TableCell>Created Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.userId}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>{row.loginTime}</TableCell>
              <TableCell>{row.createdDate}</TableCell>
              <TableCell>
                <Button onClick={() => onEdit(row)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
