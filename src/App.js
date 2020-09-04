import React, { Component } from "react";
import ReactiveBaseClass from './containers/reactivebase';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactiveBase, DataSearch, ReactiveList} from "@appbaseio/reactivesearch";
import {Card} from 'react-bootstrap';

const { ResultListWrapper } = ReactiveList;

class App extends Component {
  
  // customQuery=function() {
  //   return {
  //     "query": {
  //       "match": {
  //         "author": "Niem Chheng"
  //       }
  //     }
  //   }
  // }

  render() {
    return (
      <div className="container-fluid">
      <ReactiveBase
          app="search-article-test"
          credentials="Tip72NH54:e828e97e-9c9f-48c6-bae2-34500048d090"
          url="https://scalr.api.appbase.io">
      
      {/* <DataSearch
      componentId="customQuery"
      dataField ={'author'} 
      customQuery={this.customQuery}
      /> */}
    
      { <ReactiveBaseClass /> }
      </ReactiveBase>
      </div>
    );
  }
}


export default App;