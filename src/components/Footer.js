import React, {memo} from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
    <span className="todo-count">
      <strong>{props.count}</strong>
      items left</span>
      <button className="clear-completed"
              onClick={props.onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
};

export default memo(Footer);
