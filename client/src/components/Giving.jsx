import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Form, Button } from 'react-bootstrap';

export default function Giving() {
    const [price, setPrice] = useState(0.00);

    function handleToken(token, addresses) {
        console.log({ token, addresses, price })
    }
    const myChangeHandler = (event) => {
        setPrice(parseInt(event.target.value))
    }
    return (
        <div>
            <div className="form">
                <Form>
                    <div>
                        <h2>Enter amount you would like to give:</h2>
                        <input type="integer" name="password" onChange={myChangeHandler} value={price}></input>
                    </div>
                </Form>
            </div>
            <StripeCheckout
                stripeKey="pk_test_51HfAIJGuKajdMWRykHExDj6ZSCNHsex0qYE0IfOm2jz2ZOkdb02sNhiNpgj7ygBGWvFle6HdU3tahaE5lDHF5Itk00qgcIl0lU"
                token={handleToken}
                amount={price}
            />
        </div>
    )
}
