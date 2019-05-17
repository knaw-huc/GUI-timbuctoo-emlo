import React from 'react';
import { HcResultItemEmPlaces } from './timbuctoo-emlo';
import searchResults from './emlo-search-results.json';

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
          <HcResultItemEmPlaces
              resultItemName="Opole"
              resultItemAdministration="Poland, Opole Voivodeship"
              resultItemType="Inhabited place"
              resultItemAltNames={[{"altName":"Opolė"}, {"altName":"Òpòle"}, {"altName":"Opolí"}, {"altName":"Oppein"}, {"altName":"Oppeln"}]}
            />
        </div>
      );
    }
  }

  // export class HcResultList extends React.Component {
  //    render() {
  //      return (
  // const HcResultList = ({searchResults}) => (
  //   <div className="hcList hcMarginBottom2">
  //     {searchResults.map(searchResult => (
  //       <HcResultItemEmPlaces
  //         resultItemName={searchResult.resultItemName}
  //         resultItemAdministration={searchResult.resultItemAdministration}
  //         resultItemType={searchResult.resultItemType}
  //         resultItemAltNames={searchResult.resultItemAltNames}
  //       />
  //     ))}
  //   </div>
  // );
  //    }
  //  }
  // //export class HcResultList;





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
            <div className="hcLabel hcListItemLong">Place </div>
            <div className="hcLabel">Place type</div>
            <div className="hcLabel">Alternative names</div>
          </div>
        </div>
      );
    }
  }

  export class HcResultListPaging extends React.Component {
    render() {
      return (
        <div class="hcPagination">
        {/* eslint-disable-next-line */}
          <div><a href="#">← Previous</a></div>
          {/* eslint-disable-next-line */}
          <div><a href="#">1</a></div>
          {/* eslint-disable-next-line */}
          <div class="bgColorBrand2"><a href="#">2</a></div>
          {/* eslint-disable-next-line */}
          <div><a href="#">3</a></div>
          {/* eslint-disable-next-line */}
          <div><a href="#">4</a></div>
          {/* eslint-disable-next-line */}
          <div><a href="#">5</a></div>
          {/* eslint-disable-next-line */}
          <div><a href="#">6</a></div>
          {/* eslint-disable-next-line */}
          <div><a href="#">Next →</a></div>
        </div>
      );
    }
  }
