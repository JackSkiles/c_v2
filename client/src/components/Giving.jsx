import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function Giving() {

    function handleToken(token, addresses) {
        console.log({ token, addresses })
    }
    return (
        <div>
            <StripeCheckout 
            stripeKey="pk_test_51HfAIJGuKajdMWRykHExDj6ZSCNHsex0qYE0IfOm2jz2ZOkdb02sNhiNpgj7ygBGWvFle6HdU3tahaE5lDHF5Itk00qgcIl0lU"
            token={handleToken} />
        </div>
    )
}
