import React from 'react';
import './Product.css'
import ChoseProdInPLPWindow from "./ChoseProdInPLPWindow";

class AttributeContainerInPLP extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            chosenAttributes: [],
            choseAllAttributes: false
        }
    }

    reloadAndPush = () => {

        this.props.chosenItemDetailsContainer(this.state.chosenAttributes
            .sort((a, b) => a.name > b.name ? 1 : -1)
        )
        this.setState({
            choseAllAttributes: true,
            chosenAttributes: []
        })
        console.log(this.state.choseAllAttributes)
    }

    async attributesToCreateBagComp(attrName, attrValue) {

        this.setState(prevState => ({
            chosenAttributes: this.state.chosenAttributes.filter(item => item.name === attrName).length > 0
                ? this.state.chosenAttributes.map( item => item.name === attrName
                    ? {
                        name: attrName,
                        value: attrValue,
                    } : item)
                : [...prevState.chosenAttributes, {
                    name: attrName,
                    value: attrValue,
                }],

        }))
        await this.setState({
            choseAllAttributes: this.props.product.attributes.length!==this.state.chosenAttributes.length
        })
        await this.props.choseProdInPLPClick(this.state.chosenAttributes.length!==this.props.product.attributes.length)

        if (this.state.chosenAttributes.length===this.props.product.attributes.length) {
            await this.reloadAndPush()
        }

    }

    render() {

        if (this.props.attributesInPLPActive) {
            return (
                <div className='Attribute-block-plp'
                     onClick={(event) => event.stopPropagation()}>
                    <div className='Chose-attributes-text'>Chose attributes</div>
                    <div className='Attributes-container-plp'>{this.props.product.attributes.map(({name, items}) => (
                        <ChoseProdInPLPWindow
                            name={name}
                            items={items}
                            attributesToCreateBagComp={this.attributesToCreateBagComp.bind(this)}
                            chosenAttributesSort={this.chosenAttributesSort}
                            choseAttributes={this.props.attributesInPLPActive}
                        />
                    )) || <div></div>}

                    </div>
                </div>

            )
        }
            return <div></div>
    }
}

export default AttributeContainerInPLP