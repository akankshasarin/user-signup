import React, { Component } from 'react'
import AutoSuggest from './AutoSuggest'
import PhotoUpload from './PhotoUpload';

export class OfficeAddress extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div className="page-title">Office Address</div>
          <AutoSuggest/>
          <PhotoUpload
            title="Upload Photos"
            subtitle="Upload up to 10"
          />
        </main>
      </React.Fragment>
    )
  }
}

export default OfficeAddress
