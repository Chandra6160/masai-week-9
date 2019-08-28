import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search.js";
import axios from "axios";
import Error from "./Error.js"


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      val : "",
      result : [],
      inputVal : "",
      second : [],
      third : [],
      visible: 20,
      click : false,
    }
    this.loadMore = this.loadMore.bind(this);
  }
  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 4};
    });
  }
  handleShow = (val,inputVal) => {
      this.setState({
      val : val,
      inputVal : inputVal,
      click : true,
  	});

    axios.get('https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json')
    .then(response =>{
          console.log(val+" this is if")
          if(val === "1" || (val === "4" && inputVal != null)  )
          {
            console.log(val+" this is if 1")
            this.setState({
              result :response.data
            })
          }
          if(val === "2")
          {
            this.setState({
              result :response.data.sort((a,b) => a.stock_price - b.stock_price )
            })
          }
          if(val === "3")
          {
            this.setState({
              result :response.data.sort((a,b) => b.stock_price - a.stock_price )
            })
          }
          if(val === "4")
          {
            this.setState({
              result :response.data.sort((a,b) => a.market_cap - b.market_cap )
            })
          }
          if(val === "5")
          {
            this.setState({
              result :response.data.sort((a,b) => b.market_cap - a.market_cap )
            })
          }
			})
    .catch(err => console.log(err));

  }
  render()
  {
    if(this.state.result.stock_symbol === (this.state.inputVal.toUpperCase() || this.state.inputVal))
    {
      alert("Not found");
    }
    return (
      <div class="jumbotron bg-dark">
        <div class="container bg-primary sticky">
          <div class="col-12  md-col-6 sm-col-3 text-center text-white ">
            <h1 class="">List of Companies</h1>
          </div>
          <div class="col-12 md-col-6 sm-col-3 text-center text-white">
            <h5>We are here to show you Stock price and market cap of Companies </h5>
          </div>
          <Search handleShow = {this.handleShow} />

          {   (this.state.val==="1"||this.state.val==="2"||this.state.val==="3"||this.state.val==="4"||this.state.val==="5")  ? (
            <div>
            <div class = "row d-flex justify-content-center" >
                { this.state.result.slice(0, this.state.visible).map((result) => {
                    return (
                      <div style={{background : "rgb(178,34,34)"}} class = "card col-lg-4 col-md-6 col-sm-5 ml-2 mt-2   text-white border-danger" key = {result.id}>
                        <div class="card-body   ">
                            <h3 class="card-title text-white" > {result.title}</h3><br />
                            <h5 class="card-subtitle text-white">Stock Symbol : {result.stock_symbol}</h5>
                            <h5 class="card-subtitle text-white">Stock Price : {result.stock_price}</h5>
                            <h5 class="card-subtitle text-white">Marketcap : {result.market_cap}</h5>
                            <br />
                        </div>
                      </div>

                      );

                  })
                }

            </div>
            <div class="col text-center mt-3">
            {this.state.visible < this.state.result.length &&
               <button onClick={this.loadMore} type="button" className="btn " style={{background : "rgb(255, 235, 59)"}}>Load more</button>
            }
            </div>
            </div>

            ) : null
          }


          {   this.state.val=="6"  ? (
            <div class = "row d-flex justify-content-center" >
                { this.state.result.map((result) => {
                    if(result.stock_symbol === (this.state.inputVal.toUpperCase() || this.state.inputVal))
                    {
                      return (
                        <div style={{background : "rgb(255, 235, 59)"}} class = "card col-lg-4 col-md-6 col-sm-5 ml-2 mt-2 text-white border-danger" key = {result.id}>
                          <div class="card-body mt-6">
                              <h3 class="card-title text-dark" > {result.title}</h3><br />
                              <h5 class="card-subtitle text-white">Stock Symbol : {result.stock_symbol}</h5>
                              <h5 class="card-subtitle text-white">Stock Price : {result.stock_price}</h5>
                              <h5 class="card-subtitle text-white">Stock Symbol : {result.stock_symbol}</h5>
                              <br />
                          </div>
                        </div>
                        );
                    }
                  })
                }
                {(this.state.result.stock_symbol !== (this.state.inputVal.toUpperCase() || this.state.inputVal))
                ?  alert("Not found this") : null }
            </div>
            ) : null
          }








        </div>
      </div>);
    }
  }
