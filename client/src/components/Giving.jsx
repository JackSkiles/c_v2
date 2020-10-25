import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

toast.configure();

export default function Giving() {
    const [price, setPrice] = useState(0.00);

    async function handleToken(token) {
        // console.log({ token, addresses, price })
        const response = await axios.post('https://ry7v0516on.sse.codesandbox.io/checkout', {
            token
        });
        const { status } = response.data
        if (status === 'success'){
            toast('Success! Check email for receipt',
            { type: 'success' })
        } else {
            toast("Something went wrong", { type:
            "error" });
        }
    }
    const myChangeHandler = (event) => {
        setPrice(event.target.value)
    }
    return (
        <div>
            <div>
                <Form>
                    <div>
                        <h2>Enter amount you would like to give in dollars:</h2>
                        <input type="integer" name="password" onChange={myChangeHandler} value={price}></input>
                    </div>
                </Form>
            </div>
            <StripeCheckout
                stripeKey="pk_test_51HfAIJGuKajdMWRykHExDj6ZSCNHsex0qYE0IfOm2jz2ZOkdb02sNhiNpgj7ygBGWvFle6HdU3tahaE5lDHF5Itk00qgcIl0lU"
                token={handleToken}
                amount={price + '00'}
            />
        </div>
    )
}
