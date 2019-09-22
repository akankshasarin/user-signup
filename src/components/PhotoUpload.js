import React, { Component } from 'react'
import ImagePreview from './ImagePreview'
import AddPhotoButton from './AddPhotoButton'
import '../resources/sass/components/photo-upload.scss'

export class PhotoUpload extends Component {

  state = {
    images: [],
    uploadModalOpen: false
  }

  updateImageList = (images) => {
    console.log(images);
    this.setState({
      images: images
    })
  }

  toggleUploadModal = () => {
    this.setState({
      uploadModalOpen: !this.state.uploadModalOpen
    })
  }

  readAndAdd = (file) => {
    // Make sure `file.name` matches our extensions criteria
    const {images} = this.state;
    if (/\.(jpe?g)$/i.test(file.name)) {
      var reader = new FileReader();
      reader.addEventListener("load", () => {
        const image = {
          url: reader.result,
          alt: file.name
        }
        images.push(image);
        this.toggleUploadModal();
        this.updateImageList(images);
      }, false);
      reader.readAsDataURL(file);
    }

  }

  handlePhotoInput = (e) => {
    const files = e.target.files;
    if (files) {
      [].forEach.call(files, this.readAndAdd);
    }

  }
  render() {
    const { title, subtitle } = this.props;
    const { images, uploadModalOpen } = this.state;
    return (
      <React.Fragment>
        <div className="photo">
          <div className="photo__title">{title} {subtitle && <span className="photo__subtitle">({subtitle})</span>}</div>
          <div className="photo__gallery">
            {images.map((image, index) => (
              
              <div className="photo__item" key={index}>
                <ImagePreview
                  imgUrl={image.url}
                  imgAlt={image.alt}
                />
              </div>
            ))}

            <div className="photo__item">
              <AddPhotoButton
                handleChange={this.handlePhotoInput}
                uploadModalOpen = {uploadModalOpen}
                toggleUploadModal = {this.toggleUploadModal}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default PhotoUpload
