import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

function PaymentComponent() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleCheckout = () => {
    if (selectedPaymentMethod === 'cash_on_delivery') {
      alert('order confirmed');
    } else {
    }
  };

  return (
    <div>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
     <Typography variant='h5'color='red'>Select Payment Method</Typography>
      <br /><br />
      <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="credit_card"
            checked={selectedPaymentMethod === 'credit_card'}
            onChange={() => handlePaymentMethodSelection('credit_card')}
          />
         Credit Card
        </label>
    <br /><br />
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Gpay"
            checked={selectedPaymentMethod === 'Gpay'}
            onChange={() => handlePaymentMethodSelection('Gpay')}
          />
          Gpay
        </label>
        <br /><br />
      </div>
      <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="cash_on_delivery"
            checked={selectedPaymentMethod === 'cash_on_delivery'}
            onChange={() => handlePaymentMethodSelection('cash_on_delivery')}
          />
          Cash on Delivery
        </label>
      </div><br /><br />
      &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
      <Button variant='contained'color='info'>CANCEL</Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant='contained'onClick={handleCheckout}color='error'>𝖮𝖱𝖣𝖤𝖱</Button>
    
    </div>
  );
}

export default PaymentComponent;