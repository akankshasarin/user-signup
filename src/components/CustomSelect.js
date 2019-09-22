import React, { Component } from 'react'
import icon from "../resources/dist/icons/icons.svg"
import '../resources/sass/components/custom-select.scss'

export class CustomSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      selectedOption: this.props.options && this.props.options[0],
      modalTitle: this.props.title,
      closeIcon: `${icon}#icon-cross`
    }
  }
  handleClickOutside() {
    this.setState({
      listOpen: false
    })
  }
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  selectItem = (item) => {
    this.setState({
      selectedOption: item,
      listOpen: false
    })
  }

  render() {
    const { options, name, label } = this.props
    const { listOpen, selectedOption, modalTitle, closeIcon } = this.state
    return (
      <React.Fragment>
        <div className={`custom-select ${name === 'isdCode' ? 'custom-select--isd' : ''}`}>
          <div className={`custom-select__field custom-select__field--${listOpen ? 'open' : 'close'}`} onClick={() => this.toggleList()}>
            {label && <label className="custom-select__label">{label}</label>}
            <input type="hidden" name={name} defaultValue={selectedOption.id} className="custom-select__input" />
            <div className="custom-select__value">{selectedOption.value}</div>
          </div>
          {listOpen &&
            <div className={`custom-select__modal custom-select__modal--${listOpen ? 'open' : 'close'}`}>
              <div className="custom-select__overlay" onClick={() => this.handleClickOutside()}></div>
              <div className="custom-select__container">
                <div className="custom-select__header">
                  <div className="custom-select__title">{modalTitle}</div>
                  <div className="custom-select__close ico" onClick={() => this.toggleList()}>
                    <svg>
                      <use xlinkHref={closeIcon}></use>
                    </svg>
                  </div>
                </div>
                <div className="custom-select__body">
                  <div className="custom-select__list">
                    {options.map((option) => (
                      <div className="custom-select__item" key={option.id} onClick={() => this.selectItem(option)}>
                        {option.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default CustomSelect
