import React from "react";

export default function Header(props) {
  return (
    <div id="header">
      <div id="inner">
        <span>{props.head}</span>
        <button>{props.inner}</button>
      </div>
    </div>
  );
}
