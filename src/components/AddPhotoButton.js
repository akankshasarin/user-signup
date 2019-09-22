import React, { Component } from "react";
import icon from "../resources/dist/icons/icons.svg";

export class AddPhotoButton extends Component {
  state = {
    closeIcon: `${icon}#icon-cross`,
    galleryIcon: `${icon}#icon-cross`,
    cameraIcon: `${icon}#icon-cross`,
    photoIcon: `${icon}#icon-cross`
  };

  render() {
    const { handleChange, toggleUploadModal, uploadModalOpen } = this.props;
    const { closeIcon, galleryIcon, cameraIcon, photoIcon } = this.state;
    return (
      <React.Fragment>
        <div className="photo__add" onClick={toggleUploadModal}>
          <div className="photo__add__icon ico">
            <svg>
              <use xlinkHref={photoIcon} />
            </svg>
          </div>
          <div className="photo__add__label">Add Photo</div>
        </div>

        {uploadModalOpen && (
          <div className="photo__modal">
            <div
              className="photo__modal__overlay"
              onClick={toggleUploadModal}
            />
            <div className="photo__modal__container">
              <div
                className="photo__modal__close ico"
                onClick={toggleUploadModal}
              >
                <svg>
                  <use xlinkHref={closeIcon} />
                </svg>
              </div>
              <div className="photo__modal__action">
                <div className="photo__modal__item">
                  <label
                    htmlFor="upload-gallery"
                    className="photo__modal__label"
                  >
                    <div className="photo__modal__icon ico">
                      <svg>
                        <use xlinkHref={galleryIcon} />
                      </svg>
                    </div>
                    <div className="photo__modal__text">Gallery</div>
                  </label>
                  <input
                    type="file"
                    name="upload-gallery"
                    id="upload-gallery"
                    className="photo__input"
                    onChange={handleChange}
                    accept="image/jpeg"
                  />
                </div>
                <div className="photo__modal__item">
                  <label
                    htmlFor="upload-camera"
                    className="photo__modal__label"
                  >
                    <div className="photo__modal__icon ico">
                      <svg>
                        <use xlinkHref={cameraIcon} />
                      </svg>
                    </div>
                    <div className="photo__modal__text">Camera</div>
                  </label>
                  <input
                    type="file"
                    name="upload-camera"
                    id="upload-camera"
                    className="photo__input"
                    onChange={handleChange}
                    accept="image/jpeg"
                    capture="camera"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default AddPhotoButton;
