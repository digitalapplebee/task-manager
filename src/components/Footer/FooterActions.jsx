import React, { Component } from 'react'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

import './footer-actions.css'

class FooterActions extends Component {
  render() {
    const {
      currentFilter,
      handleFilter,
      handleRemoveCompleted,
      handleCompleteAll,
    } = this.props

    return (
      <div className="footer-actions-container">

        {/* edit radiobutton */}
        <RadioButtonGroup
          name="filter"
          defaultSelected={currentFilter}
          onChange={(e, value) => handleFilter(value)}
          className="footer-actions-radio-button-group"
        >
          <RadioButton
            label="All"
            value="all"
            className="footer-actions-radio-button"
          />
          <RadioButton
            label="Active"
            value="active"
            className="footer-actions-radio-button"
          />
          <RadioButton
            label="Completed"
            value="completed"
            className="footer-actions-radio-button"
          />

        </RadioButtonGroup>

        <button
          onClick={handleRemoveCompleted}
          className="footer-actions-clear-complete__button"
        >
          Clear completed
        </button>

        <button
          onClick={handleCompleteAll}
          className="footer-actions-done-all__button"
        >
          Done all
        </button>

      </div>
    )
  }
}

export default FooterActions