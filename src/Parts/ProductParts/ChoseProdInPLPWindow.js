import React from 'react';
import './Product.css'
import AttributesInPLP from "./AttributesInPLP";

class ChoseProdInPLPWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attributeSelected: '',
            chosenAttribute: [
                {name: ''},
                {value: ''},
            ],
        }
    }

    SelectAttribute = (value) => {
        this.setState({
            attributeSelected: value
        })
    }

    SelectAttributeInBag = (name, value) => {
        this.props.attributesToCreateBagComp(name, value)
        this.setState({
            chosenAttribute: [
                {name: name},
                {value: value},
            ]
        })
        console.log(12341234)
    }


    render() {
        return (
            <div className='Each-attribute-container-plp'>
                <div className='Attributes-plp'>{this.props.name}</div>
                <div className='Attribute-items-plp'>{
                    this.props.items.map(({displayValue, value}) => (
                        <AttributesInPLP
                            name={this.props.name}
                            value={value}
                            SelectAttribute={this.SelectAttribute}
                            attributeSelected={this.state.attributeSelected}
                            SelectAttributeInBag={this.SelectAttributeInBag}
                            chosenAttributes={this.state.chosenAttributes}
                            chosenAttributesSort={this.props.chosenAttributesSort}
                            choseAttributes={this.props.choseAttributes}
                        />
                    ))

                }

                </div>
            </div>
        )
    }
}

export default ChoseProdInPLPWindow