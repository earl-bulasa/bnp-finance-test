import React from 'react';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function AddPayment({user_id, successAddPayment}) {
    function handleAddPayment(e) {
        e.preventDefault();
        console.log(e.target);

        let paymentData = {
            user_id: e.target.user_id.value,
            amount: e.target.amount.value,
        };

        axios.post('http://localhost:8000/api/pay', paymentData).then((response) => {
            console.log(response.data);
            successAddPayment();
            e.target.reset();
        });
    }

    return (
        <form onSubmit={handleAddPayment}>
            <Input type="hidden" name="user_id" value={user_id} />
            <TextField name="amount" id="standard-number" label="Amount" type="number" InputLabelProps={{shrink: true,}} variant="standard"/>
            <Button variant="contained" type="submit">Pay</Button>
        </form>
    )
}