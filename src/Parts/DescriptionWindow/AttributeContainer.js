import React from 'react'
import Attributes from "./Attributes";


class AttributeContainer extends React.Component {

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

    SelectAttribute (value) {
        this.setState({
            attributeSelected: value
            })
    }

    SelectAttributeInBag (name, value) {
        this.props.attributesToCreateBagComp(name, value)
        this.setState({
            chosenAttribute: [
                    {name: name},
                    {value: value},
            ]
        })
        setTimeout(() => console.log(this.state.chosenAttribute), 0)
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
                            SelectAttribute={this.SelectAttribute.bind(this)}
                            attributeSelected={this.state.attributeSelected}
                            SelectAttributeInBag={this.SelectAttributeInBag.bind(this)}
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