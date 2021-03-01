import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api/api';


const CheckoutPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 600px;
  margin: auto;
  margin-bottom: 60px;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 3px;

  div:last-child {
    margin-left: auto;
  }

`;

const Total = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: auto;
  font-weight: bold;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    border: 2px solid #9e9e9e;
    border-radius: 20px;
    padding-left: 12px;
    margin-bottom: 6px;
    

    :focus {
      outline: none;
      border-color: green;
    }
  }

  label {
    margin-bottom: 3px;
  }

  label, span {
    margin-left: 10px;
  }

  span {
    color: red;
    text-transform: capitalize;
    margin-bottom: 6px;
  }

`;

const Container = styled.div`
  margin-top: 12px;
`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #7cb342;
  background-color: #7cb342;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  :disabled {
    border: 1px solid #9e9e9e;
    background-color: #9e9e9e;
    cursor: not-allowed;
  }

`;

const validatePaymentSolution = (values) => {
  return new Promise(function(resolve) {
      setTimeout(resolve, 2000);
  });
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  number: yup.string().required(),
  cvc: yup.string().required(),
  expiry: yup.string().required(),
});


function CheckoutPage() {
  const location = useLocation();

  const checkoutStates = ['Pay', 'Validating Payment', 'Payment Sucessfull', 'Payment Error!'];
  
  const [focused, setFocus] = React.useState('');
  const [checkoutState, setCheckoutState] = React.useState(checkoutStates[0]);
  const [orderInfo, setOrderInfo] = React.useState(null);

  const formik = useFormik({
    initialValues: {
      selectedItems: location.state?.items || [],
      name: '',
      email: '',
      number: '',
      cvc: '',
      expiry: '',
    },
    validationSchema: schema,
    initialErrors: schema,
    onSubmit: async values => {

      setCheckoutState(checkoutStates[1]);
      setOrderInfo(null);

      try {

        await validatePaymentSolution();      
        const orderResponse = await api.post('/order', { items: values.selectedItems });
        setOrderInfo(orderResponse.data.id);
        setCheckoutState(checkoutStates[2]);
        
      } catch (error) {
        setCheckoutState(checkoutStates[3]);
        setTimeout(() => {
          setCheckoutState(checkoutStates[0]);
        }, 2000)
      };
    },
  });

  return (
    <CheckoutPageStyle>
      <a href='/menu'>{checkoutState === checkoutStates[2] ? 'Go Back' : 'Cancel'}</a>
      <div>
        {formik.values.selectedItems.map((item) => (
          <ItemsList key={item.id}>
            <div>{item.name}</div>
            <div>${item.price}</div>
          </ItemsList>
        ))}
      </div>
      <Total>Total: ${location.state.totalAmount || 0}</Total>
      <PaymentForm onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>{formik.errors.name}</span>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>{formik.errors.email}</span>
        <label htmlFor="number">Card Number</label>
        <input
          id="number"
          name="number"
          type="text"
          maxLength="16"
          onChange={formik.handleChange}
          value={formik.values.number}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>{formik.errors.number}</span>
        <label htmlFor="cvc">CVC</label>
        <input
          id="cvc"
          name="cvc"
          type="text"
          maxLength="3"
          onChange={formik.handleChange}
          value={formik.values.cvc}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>{formik.errors.cvc}</span>
        <label htmlFor="expiry">Expiration Date</label>
        <input
          id="expiry"
          name="expiry"
          type="text"
          maxLength="4"
          onChange={formik.handleChange}
          value={formik.values.expiry}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <span>{formik.errors.expiry}</span>
        <Cards
          cvc={formik.values.cvc}
          expiry={formik.values.expiry}
          focused={focused}
          name={formik.values.name}
          number={formik.values.number}
        />
        {orderInfo && 
          <Container>
            <h4 style={{textAlign: 'center' }}>
              Here's your order #{orderInfo}
            </h4>
          </Container>}
        <Container>
          <Button type="submit" disabled={!(formik.isValid && checkoutState === checkoutStates[0])}>{checkoutState}</Button>
        </Container>
      </PaymentForm>
    </CheckoutPageStyle>
  )
}

export default CheckoutPage
