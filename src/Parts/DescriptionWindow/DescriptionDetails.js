import React from 'react';
import './DescriptionWindow.css'

class DescriptionDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPhoto: this.props.gallery[0]
        }
    }

    handleChangeMainPhoto = (photo) => {
        this.setState({
            mainPhoto: photo
        })
    }

    render() {
        return (
            <>
                <div className='Pic-block-row'
                > {this.props.gallery.slice(0, 4).map((item) =>
                    (<div className='Description-pic'
                          onClick={() =>this.handleChangeMainPhoto(item)}>
                            <img alt="img"
                                 src={item}
                                 className='Pic-size-description'
                            />
                        </div>
                    ))}
                </div>
                {/*<OutOfStockDescr*/}
                {/*    product={this.props.product}*/}
                {/*/>*/}
                <div className='Main-pic'><img
                    alt="img"
                    src={this.state.mainPhoto}
                    className='Main-pic-size'
                />
                </div>
            </>
        )
    }
}

// class OutOfStockDescr extends React.Component {
//
//     render() {
//         if (!this.props.product.inStock)
//             return (
//                 <div className='Out-of-stock-active-descr'
//                 >
//                     <div className='Out-of-stock-text-descr'>OUT OF STOCK</div>
//                 </div>
//             )
//         return <div></div>
//
//
//     }
// }

export default DescriptionDetails