import React from 'react';
import { HcResultItemEmPlaces } from './timbuctoo-emlo';


  export class HcResultListHeader extends React.Component {
    render() {
      return (
        <div className="hcResultsHeader hcMarginBottom1">
                <div>{this.props.totalResults} Results</div>
                <div>
                  <select className="" name="">
                    <option value="">**Order options**</option>
                  </select>
                </div>
              </div>
      );
    }
  }

  export class HcResultList extends React.Component {
    render() {
      return (
        <div className="hcList hcMarginBottom2">
          <HcResultItemEmPlaces/>
          <HcResultItemEmPlaces/>
          <HcResultItemEmPlaces/>
          <HcResultItemEmPlaces/>
          <HcResultItemEmPlaces/>
        </div>
      );
    }
  }

  export class HcResultSelectedFacets extends React.Component {
    render() {
      return (
        <div className="hcMarginBottom2">
          <span className="hcSmallTxt hcTxtColorGreyMid">Selected facets:</span>
          <HcResultSelectedFacetsItem
            selectedFacetType="Fields of interest"
            selectedFacetValue="mathematics"
          />
      </div>
      );
    }
  }

  export class HcResultSelectedFacetsItem extends React.Component {
    render() {
      return (
          <span className="hcSelectedFacet">
            <span className="hcSelectedFacetType">{this.props.selectedFacetType}</span>
            {this.props.selectedFacetValue}
          </span>
      );
    }
  }

  export class HcResultListLegend extends React.Component {
    render() {
      return (
        <div className="hcList">
          <div className="hcListHeader">
            <div className="hcLabel hcListItemLong">Name </div>
            <div className="hcLabel">Birth</div>
            <div className="hcLabel">Death</div>
          </div>
        </div>
      );
    }
  }
