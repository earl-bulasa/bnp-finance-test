import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { TailSpin } from  'react-loader-spinner'
import AddPayment from './AddPayment'
import Swal from 'sweetalert2'

  
export default function UserTable() {
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true);

    function successAddPayment()
    {
        Swal.fire({
            icon: 'success',
            title: 'Payment successful',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            getUsers();
        });
        
    }

    function getUsers() {
        axios.get('http://localhost:8000/api/users').then((response) => {
            setUsers(response.data.users);
        });
    }
    
    useEffect(() => {
        setTimeout(() => {
            getUsers();
            setLoader(false);
        }, 10000)
        
    }, []);
    
    
    return (
        <div>
            {loader ? 
                <div style={{margin: "auto", width: "fit-content"}}>
                    <TailSpin ariaLabel="loading-indicator" />
                </div> :
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell align="right">Total Loan</TableCell>
                            <TableCell align="right">Total Payment</TableCell>
                            <TableCell align="right">Add Payment</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell align="left">{user.name}</TableCell>
                                        <TableCell align="right">{user.loans_sum_amount}</TableCell>
                                        <TableCell align="right">{user.payments_sum_amount !== null ? user.payments_sum_amount : "0.00"}</TableCell>
                                        <TableCell align="right"><AddPayment user_id={user.id} successAddPayment={successAddPayment}></AddPayment></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    );
}