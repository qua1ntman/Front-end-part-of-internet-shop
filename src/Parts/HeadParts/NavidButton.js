import React from 'react';
import './Head.css';
import {Query} from "@apollo/client/react/components";
import {PRODUCT_INFO_CATEGORIES} from "../../Queries";

class NavigButton extends React.Component {

    render() {
        return (
            <Query query={PRODUCT_INFO_CATEGORIES}>
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    return data.categories.map(({name}) => (
                        <div className="Category-block"
                             onClick={() => this.props.handleChangeCategory(name)
                                 && this.props.handleWindowChange('products')}
                        >
                            <div className='Each-navig-container'>
                                <div  className={this.props.categoryActive === name ? 'Navig-text Active-text' : 'Navig-text'}>{name.toUpperCase()}</div>
                                <div className={this.props.categoryActive === name ? 'Line-under-text active-line' : 'Line-under-text'}/>
                            </div>
                        </div>

                    ))}
                        }
            </Query>
        )
    }
}

export default NavigButton