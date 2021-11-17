import React from 'react';
import './Head.css';




class Converter extends React.Component{


    clickerFunc = (currencyProp, currencyNameProp) => {
        this.props.handleConverterNotActive(false)
        this.props.handleCurrencyChangeAction(currencyProp, currencyNameProp)
        console.log('Converter ,'+currencyProp+', '+currencyNameProp)
    }

    render() {
        const currencySet = [
            ['USD','$'],
            ['EUR','€'],
            ['GBP','£'],
            ['AUD','A$'],
            ['RUB','₽'],
            ['JPY','¥'],
        ]


        return (
            <div className={this.props.active ? "Converter Converter-active" : "Converter"} >
                {currencySet.map(([key, value]) =>
                            <div key={key}
                                className='Each-currency'
                                onClick={() => this.clickerFunc(value, key)}
                            >
                                {value} {key}
                            </div>
                    )
                }
            </div>
        )
    }
}

export default Converter
