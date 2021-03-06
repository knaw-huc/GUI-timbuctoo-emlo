import React from 'react';


  export class HcFacetBasic extends React.Component {
    render() {
      return (
        <div class="hcFacet">
              <div className="hcFacetTitle">
                <span>{this.props.facetName}</span>
                <span className="hcIconHelp"><img src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg" alt="Click for info" /></span>
              </div>

              <div className="hcFacetHelp">
              <strong>The Source dataset facet </strong><br/>
                Please note that the content is organised by archive folder. This may affect your results. Learn more about the structure of the archive.
              </div>


              <div className="hcFacetItems">
              <HcFacetItem
                facetItemName="KNAW-Lid"
                facetItemAmount="2143"
              />
              <HcFacetItem
                facetItemName="Auteur KNAW"
                facetItemAmount="321"
              />
              <HcFacetItem
                facetItemName="Database Boerhave"
                facetItemAmount="221"
              />
              <HcFacetItem
                facetItemName="Medical Professors Leiden"
                facetItemAmount="142"
              />

                {/* eslint-disable-next-line */}
                <a href="#">More</a>
              </div>
            </div>
      );
    }
  }
  //<div className="hcFacetFilter"><input type="text" name="" value="" placeholder="Type to filter"/></div>

  export class HcFacetItem extends React.Component {
    render() {
      return (
        <div className="hcFacetItem">
          {this.props.facetItemName} <span className="hcFacetCount">{this.props.facetItemAmount}</span>
        </div>
      );
    }
  }

  export class HcFacetTextSearch extends React.Component {
    render() {
      return (
        <div class="hcFacet">
          <div class="hcFacetTitle">{this.props.facetName}</div>
          <div class="hcFacetSearch">
            <input type="text"/> <button type="button" name="button">Search</button>
          </div>
        </div>
      );
    }
  }
