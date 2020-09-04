import React, { Component } from 'react';
import { ReactiveBase, DataSearch, ReactiveList} from "@appbaseio/reactivesearch";
import ReactHtmlParser from 'react-html-parser';
import {Card} from 'react-bootstrap';


const { ResultListWrapper } = ReactiveList;



class ReactiveBaseClass extends Component {
    render() {
        return(
<ReactiveBase
          app="search-article-test"
          credentials="Tip72NH54:e828e97e-9c9f-48c6-bae2-34500048d090"
          url="https://scalr.api.appbase.io"
          analytics={true}
          searchStateHeader>
          <u>Recommendation System</u> 
          <DataSearch
                componentId="SearchSenors"
                dataField={[
                  'title',
                  'title.autosuggest',
                ]}
                iconPosition="right"
                fieldWeights={[
                  1,
                  1,
                  1,
                  1
                ]}
                fuzziness={0}
                highlight={true}
                highlightField={[
                  'title',
                ]}
                placeholder="title"
                style={{
                  marginBottom: 20
                }}
                title="Search!"
              />
<ResultListWrapper>
<ReactiveList
    componentId="SearchResult"
    dataField={'title'}
    react={{
      and: ["SearchSenors"]
    }}
   
    renderItem={res => 
    <div key={res.docid}>
         <Card>
          <Card.Body>
        {res.title}
        {ReactHtmlParser(res.content)}
        </Card.Body>
      </Card>
        
    </div>}
    
/>
</ResultListWrapper>
            </ReactiveBase>


        );
    }
}


export default ReactiveBaseClass;