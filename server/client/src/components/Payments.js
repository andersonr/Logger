import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';
import { connect } from "react-redux";

class Payments extends Component{
    render(){
        return (
            <StripeCheckout 
                name="Logger"
                description="$5 por 5 moedas logger"
                amount={500}
                token={token => }
                stripeKey={ process.env.REACT_APP_STRIPE_KEY }
            >
                <button className="btn">
                    Add créditos
                </button>
            </StripeCheckout>
        );
    }

    EnviarTokenPagamentoRealizadoServidor = (token) => {
        console.log(token);
        this.props.handleToken(token);
    }
}

export default connect(null, actions)(Payments);