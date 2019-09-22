import React, { Component } from "react";
import icon from "../resources/dist/icons/icons.svg";
import "../resources/sass/components/multiselect.scss";

export class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      closeIcon: `${icon}#icon-cross`,
      selectedItems: []
    };
  }

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

  selectItem = item => {
    const { selectedItems } = this.state;
    const index = selectedItems.indexOf(item);
    index > -1 ? selectedItems.splice(index, 1) : selectedItems.push(item);
    this.setState({
      selectedItems: selectedItems
    });
  };

  render() {
    const { options, title, label } = this.props;
    const { listOpen, closeIcon, selectedItems } = this.state;
    const backArrow = `${icon}#icon-arrow-left`;
    return (
      <React.Fragment>
        <div className="multiselect">
          <div className="multiselect__label">{label}</div>
          <div
            className={`multiselect__field multiselect__field--${
              listOpen ? "open" : "close"
            }`}
          >
            <div
              className="multiselect__field__overlay"
              onClick={() => this.toggleList()}
            />
            {selectedItems && selectedItems.length > 1 ? (
              <React.Fragment>
                <SelectedElements
                  opt={[selectedItems[0]]}
                  handleClick={this.selectItem}
                />
                <SelectionCount count={selectedItems.length - 1} />
              </React.Fragment>
            ) : (
              <SelectedElements
                opt={selectedItems}
                handleClick={this.selectItem}
              />
            )}
          </div>
          {listOpen && (
            <div
              className={`multiselect__modal multiselect__modal--${
                listOpen ? "open" : "close"
              }`}
            >
              <div
                className="multiselect__overlay"
                onClick={() => this.handleClickOutside()}
              />
              <div className="multiselect__container">
                <div className="multiselect__header">
                  <div className="multiselect__title">{title}</div>
                  <div
                    className="multiselect__close ico"
                    onClick={() => this.toggleList()}
                  >
                    <svg>
                      <use xlinkHref={closeIcon} />
                    </svg>
                  </div>
                </div>
                <div className="multiselect__body">
                  <div className="multiselect__list">
                    {options.map(option => (
                      <div
                        className="multiselect__item"
                        key={option.id}
                        onClick={() => this.selectItem(option)}
                      >
                        <span
                          className={`multiselect__icon ico ${
                            selectedItems.indexOf(option) > -1
                              ? "is-selected"
                              : ""
                          }`}
                        >
                          <svg>
                            <use xlinkHref={backArrow} />
                          </svg>
                        </span>
                        <span className="multiselect__text">
                          {option.value}
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
  }
}

class SelectedElements extends Component {
  render() {
    const { opt, handleClick } = this.props;
    return (
      <React.Fragment>
        {opt.map(item => (
          <div
            className="multiselect__selection"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.value}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

class SelectionCount extends Component {
  render() {
    const { count } = this.props;
    return (
      <React.Fragment>
        <div className="multiselect__counter" key={count}>
          +{count}
        </div>
      </React.Fragment>
    );
  }
}

export default MultiSelect;
