import React from 'react';
import './Head.css';

class NavigButton extends React.Component {

    handleChangeCategory(item){
        this.props.handleChangeCategory(item)
    }

    render() {
        return this.props.categoryButton.map(item =>
             <div className="Category-block"
                 onClick={() => this.handleChangeCategory(item)
                 && this.props.handleWindowChange('products')}
            >
                <div className='Each-navig-container'>
                    <div  className={this.props.categoryActive === item ? 'Navig-text Active-text' : 'Navig-text'}>{item.toUpperCase()}</div>
                    <div className={this.props.categoryActive === item ? 'Line-under-text active-line' : 'Line-under-text'}/>
                </div>
            </div>
        )
    }
}

export default NavigButton