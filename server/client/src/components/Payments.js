import StripeCheckout from 'react-stripe-checkout'

import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Payments = ({handleToken}) => {
  return (
    <StripeCheckout
        name='Emaily'
        description='$5 for 5 email credits'
        amount={500}
        token={token => handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
        <button className='btn'>Add Credits</button>
    </StripeCheckout>
  )
}

export default connect(null, actions)(Payments)