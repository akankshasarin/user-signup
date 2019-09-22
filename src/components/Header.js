import React, { PureComponent } from 'react'
import "../resources/sass/components/header.scss";
import icon from "../resources/dist/icons/icons.svg";

export default class Header extends PureComponent {
  back = () => {
    const { backButtonUrl, goToPage } = this.props;
    goToPage(backButtonUrl);
  }
  
  render() {
    const { title, backButtonUrl } = this.props;
    const backArrow = `${icon}#icon-arrow-left`;

    return (
      <div className="header">
        {backButtonUrl && (
          <div className="header__nav ico" onClick={this.back}>
            <svg>
              <use xlinkHref={backArrow} />
            </svg>
          </div>
        )}
        <div className="header__title">{title}</div>
      </div>
    );
  }
}
