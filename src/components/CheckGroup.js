import React, { Component } from "react";
import "../resources/sass/components/check-group.scss";
import icon from "../resources/dist/icons/icons.svg";

export class CheckGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      closeIcon: `${icon}#icon-cross`,
      selectedItems: []
    };
  }

  SelectButton = props => {
    const { options, values, icon } = props;
    return (
      <React.Fragment>
        {options.map(option => (
          <div className="check-group__item" key={option.id}>
            <input
              className="check-group__input"
              type={option.inputType}
              name={values.name}
              id={option.id}
              defaultValue={option.id}
              onChange={() => this.selectItem(option, 'close')}
            />
            <label htmlFor={option.id} className="check-group__label">
              <span className="check-group__text">{option.label}</span>
              <span className="check-group__icon ico">
                <svg>
                  <use xlinkHref={icon} />
                </svg>
              </span>
            </label>
          </div>
        ))}
      </React.Fragment>
    );
  };

  handleClickOutside() {
    this.setState({
      listOpen: false
    });
  }
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  selectItem = (item, displayOthers) => {
    if (!this.state.selectedItems.includes(item.id)) {
      this.state.selectedItems.push(item.id);
    } else {
      let index = this.state.selectedItems.indexOf(item.id);
      if (index > -1) {
        this.state.selectedItems.splice(index, 1);
      }
    }
    if (displayOthers === 'open') {
      this.setState({
        listOpen: true
      });
    } else {
      this.setState({
        listOpen: false
      });
    }
  };

  OtherCount = props => {
    let { SelectedItems, OriginalOptions } = props;
    let selectedList = [...SelectedItems];
    let list = [...OriginalOptions];
    let count = 0;
    const filterItems = list.splice(0, 2);
    for (let item of filterItems) {
      let index = selectedList.indexOf(item.id);
      if (index > -1) {
        selectedList.splice(index, 1);
      }
    }
    count = selectedList.length;
    return (
      <React.Fragment>
        {count > 0 && (
          <div className="check-group__dropdown__badge">{count}</div>
        )}
      </React.Fragment>
    );
  };

  OtherItems = props => {
    const { options, values } = props;
    const caretDown = `${icon}#icon-caret-down`;
    const list = [...options];
    const backArrow = `${icon}#icon-arrow-left`;
    list.splice(0, 2);
    const { listOpen, closeIcon } = this.state;
    return (
      <React.Fragment>
        <div className="check-group__item">
          <div
            className="check-group__dropdown"
            onClick={() => this.toggleList()}
          >
            <div className="check-group__dropdown__text">Others</div>
            <div className="check-group__dropdown__icon ico">
              <svg>
                <use xlinkHref={caretDown} />
              </svg>
            </div>
            <this.OtherCount
              SelectedItems={this.state.selectedItems}
              OriginalOptions={options}
            />
          </div>
          {listOpen && (
            <div
              className={`check-group__modal check-group__modal--${
                listOpen ? "open" : "close"
              }`}
            >
              <div
                className="check-group__modal__overlay"
                onClick={() => this.handleClickOutside()}
              />
              <div className="check-group__modal__container">
                <div className="check-group__modal__header">
                  <div className="check-group__modal__title">
                    {values.title}
                  </div>
                  <div
                    className="check-group__modal__close ico"
                    onClick={() => this.toggleList()}
                  >
                    <svg>
                      <use xlinkHref={closeIcon} />
                    </svg>
                  </div>
                </div>
                <div className="check-group__modal__body">
                  <div className="check-group__modal__list">
                    {list.map(option => (
                      <div
                        className={`check-group__modal__item check-group__modal__item--${
                          option.inputType
                        }`}
                        key={option.id}
                        onClick={() => this.selectItem(option, `${option.inputType === 'checkbox' ? 'open' : 'close'}`)}
                      >
                        {option.inputType === "checkbox" && (
                          <span
                            className={`check-group__modal__item__icon ico ${
                              this.state.selectedItems.indexOf(option.id) > -1
                                ? "is-selected"
                                : ""
                            }`}
                          >
                            <svg>
                              <use xlinkHref={backArrow} />
                            </svg>
                          </span>
                        )}
                        <span className="check-group__modal__item__text">
                          {option.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { title, name, helpText, eventHandler, options } = this.props;
    const values = { title, name, helpText, eventHandler, options };
    const backArrow = `${icon}#icon-arrow-left`;
    return (
      <React.Fragment>
        <div className="check-group">
          <div className="check-group__title">{title}</div>
          <div className="check-group__container">
            {options.length <= 2 ? (
              <this.SelectButton
                options={options}
                values={values}
                icon={backArrow}
              />
            ) : (
              <this.SelectButton
                options={[options[0], options[1]]}
                values={values}
                icon={backArrow}
              />
            )}
            {options.length > 2 ? (
              <this.OtherItems name="" options={options} values={values} />
            ) : (
              ""
            )}
          </div>
          <div className="check-group__help">{helpText}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckGroup;
