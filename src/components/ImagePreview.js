import React, { Component } from 'react'

export class ImagePreview extends Component {
  render() {
    const {imgUrl, imgAlt} = this.props
    return (
      <React.Fragment>
        <div className="photo__placeholder">
          <img className="photo__preview" src={imgUrl} alt={imgAlt}/>
        </div>
      </React.Fragment>
    )
  }
}

export default ImagePreview
