import React from 'react';
import './DescriptionWindow.css'

class PhotosDescription extends React.Component {
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
                            <img src={item}
                                 className='Pic-size-description'
                            />
                        </div>
                    ))}
                </div>

                <div className='Main-pic'><img
                    src={this.state.mainPhoto}
                    className='Main-pic-size'
                />
                </div>
            </>
        )
    }
}

export default PhotosDescription