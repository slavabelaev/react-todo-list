import React from 'react';
import './AppHeader.css';

const AppHeader = ({ totalDone, totalNeedToDone }) => (
  <div className="d-flex align-items-center justify-content-between">
      <h1>Todo List</h1>
      <div>
          <span className="badge mr-2">Need to do: {totalNeedToDone}</span>
          <span className="badge badge-success">
              <i className="fa fa-check" /> Done: {totalDone}
          </span>
      </div>
  </div>
);

export default AppHeader;
