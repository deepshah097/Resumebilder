import React from 'react';

export class Personalinfo extends React.Component {

  render() {
    return (
      <form>
        <div className="form-group m-3">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group m-3">
          <label>Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group m-3">
          <label>Date of Birth</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group m-3">
          <label>Address</label>
          <input type="text" className="form-control" />
        </div>
      </form>
    );
  }
}