import React from 'react';
import './Head.css';
import {Query} from "@apollo/client/react/components";
import {PRODUCT_INFO_CURRENCIES} from "../../Queries";




class Converter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: {
                "currencies": [
                    "USD",
                    "GBP",
                    "AUD",
                    "JPY",
                    "RUB"
                ]
            }
        }
    }

    clickerFunc = (currencyProp) => {
        this.props.handleConverterActive(false)
        this.props.handleCurrencyChange(currencyProp)

    }

    render() {

        return (

            // <Query query={PRODUCT_INFO_CURRENCIES}>
            //     {({loading, error, data}) => {
            //         if (loading) return <p>Loading...</p>;
            //         if (error) return <p>Error :(</p>;
            //         return (
                        <div className={this.props.active ? "Converter Converter-active" : "Converter"} >
                            {this.state.data.currencies.map((item)  =>
                                    <div key={item}
                                         className='Each-currency'
                                         onClick={() => this.clickerFunc(item)}
                                    >{item}
                                    </div>
                                )
                            }
                        </div>
            //         )}}
            // </Query>

        )
    }
}

export default Converter
