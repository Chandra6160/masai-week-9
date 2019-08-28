import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Error extends React.Component {
  render()
  {
    return (
      <div style={{background : "rgb(255, 235, 59)"}} class = "card col-lg-4 col-md-6 col-sm-5 ml-2 mt-2 text-white border-danger">
        <div class="card-body mt-6">
            <h3 class="card-title text-dark" > Error 404 Not Found</h3><br />

            <br />
        </div>
      </div>
    );
  }
}
