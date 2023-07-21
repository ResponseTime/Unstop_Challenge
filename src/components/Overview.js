import React from "react";

export default function Overview(props) {
  return (
    <>
      <div className="container" id="overview" hidden={props.style}>
        <h2>Assesments</h2>
        <table>
          <tr>
            <td>Total Assesments</td>
            <td>Candidates</td>
            <td>Candidates Source</td>
            <td>Total Purpose</td>
          </tr>
        </table>
      </div>
    </>
  );
}
