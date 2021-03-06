import React from 'react'
import Attributes from "./Attributes";


class AttributeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            attributeSelected: '',

        }
    }

    SelectAttribute = (value) => {
        this.setState({
            attributeSelected: value
            })
    }

    SelectAttributeInBag = (name, value) => {
        this.props.attributesToCreateBagComp(name, value)

    }


    render() {
        return (
            <div className='Each-attribute-container'>
                <div className='Attributes'>{this.props.name}</div>
                <div className='Attribute-items'>{
                    this.props.items.map(({displayValue, value}) => (
                        <Attributes
                            name={this.props.name}
                            value={value}
                            displayValue={displayValue}
                            SelectAttribute={this.SelectAttribute}
                            attributeSelected={this.state.attributeSelected}
                            SelectAttributeInBag={this.SelectAttributeInBag}
                            chosenAttributes={this.state.chosenAttributes}
                        />
                    ))

                }

                </div>
            </div>
        )
    }
}

export default AttributeContainer