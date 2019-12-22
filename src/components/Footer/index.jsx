import React from "react"
import FooterActions from "./FooterActions"

import "./footer.css"

const Footer = ({
  tasks,
  currentFilter,
  handleFilter,
  handleRemoveCompleted,
  handleCompleteAll
}) => {
  const leftTasks = tasks.reduce(
    (count, { completed }) => (completed ? count : count + 1),
    0
  )

  return (
    <React.Fragment>
      <hr className="footer-divider" />
      <div className="footer-container">
        <span className="footer-items-count">{leftTasks} Tasks left</span>
        <FooterActions
          currentFilter={currentFilter}
          handleFilter={handleFilter}
          handleRemoveCompleted={handleRemoveCompleted}
          handleCompleteAll={handleCompleteAll}
        />
      </div>
    </React.Fragment>
  )
}

export default Footer
