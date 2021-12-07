import React from 'react';
import './Head.css';
// import {Query} from "@apollo/client/react/components";
// import {PRODUCT_CATEGORIES, } from "../../Queries";

class NavigButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                "categories": [
                    {
                        "name": "clothes"
                    },
                    {
                        "name": "tech"
                    }
                ]
            }
        }
    }

    categorySwitch = (name) => {
        this.props.handleChangeCategory(name)
        this.props.handleWindowChange('products')
    }

    render() {
        return (
            // <Query query={PRODUCT_CATEGORIES}>
            //     {({loading, error, data}) => {
            //         if (loading) return <p>Loading...</p>;
            //         if (error) return <p>Error :(</p>;
            //         return (
                        this.state.data.categories.map(({name}) => (
                        <div className="Category-block"
                             onClick={() => this.categorySwitch(name)}
                        >
                            <div className='Each-navig-container'>
                                <div  className={this.props.categoryActive === name ? 'Navig-text Active-text' : 'Navig-text'}>{name.toUpperCase()}</div>
                                <div className={this.props.categoryActive === name ? 'Line-under-text active-line' : 'Line-under-text'}/>
                            </div>
                        </div>
                        )
                    )
                // )}}
            // </Query>
        )
    }
}

export default NavigButton