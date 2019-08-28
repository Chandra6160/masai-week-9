import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state={
      val : "",
      inputVal : ""
    }
  }
  render()
  {
    console.log(this.state.val+"  selectmenu")
    return (
        <React.Fragment>
          <div class="col-lg-12 col-md-6 col-sm-4 justify-content-center text-center text-white">
            <select class="custom-select " id="inputGroupSelect01" onClick = {(e) => {
            this.setState({
              val : e.target.value
            });
          }}>
              <option selected>Open this select menu</option>
              <option value="1">All Companies</option>
              <option value="2">Stock price--Low to High</option>
              <option value="3">Stock price--High to Low</option>
              <option value="4">Marketcap -- Low to High</option>
              <option value="5">Marketcap--High to Low</option>
              <option value="6">Search Stock Symbol</option>
            </select>
            <br/>
            {this.state.val==="6" ? <input class="col-12 md-col-6 sm-col-3 text-center " onChange={(e) => {
            this.setState({
              inputVal : e.target.value
            });
          }} /> : null }
          </div>
          <br />

          <br />
          <div class="ml-10 text-center lg-col-1 md-col-3 sm-col-6 text-white">
            <button class="btn btn-danger  " type="submit" onClick = {() => this.props.handleShow(this.state.val,this.state.inputVal)}>Show</button>
          </div>
        </React.Fragment>
    );
  }

}
