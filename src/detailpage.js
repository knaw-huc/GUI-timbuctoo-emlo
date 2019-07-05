import React from 'react';


  export class HcEmPlaceItemHeader extends React.Component {

    render() {
      return (
        <div className="hcEmplacesItemHeader">
          <div className="hcEmplacesTitle">
              {/* if isH1=={true} the next line should have a <h1>*/}
              <strong>{this.props.title}</strong>
            <div className="hcTxtColorGreyMid hcSmallTxt">Info</div>
          </div>
          {/* if hasProv=={true}, the next line should be displayed*/ }
          <div className="hcTxtColorGreyMid hcSmallTxt">Provenance</div>

        </div>
      );
    }
  }


  export class HcEmPlaceDataBlock extends React.Component {
    render() {
      return (
        <div class="hcEmplDataBlock hcMarginBottom3">
            {this.props.children}
        </div>

      );
    }
  }

  export class HcEmPlaceListRow extends React.Component {
    render() {
      return (
        <div className="hcEmplListRow">
          <div>Oppol</div>
          <div>(ger, lat)</div>
          <div>1226-1487</div>
          <div>Liber fundationis episcopatus Vratislaviensis</div>
        </div>
      );
    }
  }


  export class HcEmPlaceCalander extends React.Component {
    render() {
      return (
        <React.Fragment>
          {/* The percentage (here 23%) needs to be dynamic fro the var percent */}
        <div className="hcEmplCalMarker" style={{
                				marginLeft: '23%',
                			}}><span>{this.props.date}</span> <span class="hcTxtColorGreyMid hcSmallTxt">(Inferred)</span> </div>
        <div className="hcEmplCalBarLegend">
          <div className="hcTxtColorGreyMid hcSmallTxt">1500</div>
          <div className="hcTxtColorGreyMid hcSmallTxt">1800</div>
        </div>

        <div className="hcEmplCalBar">
          <div className="hcEmplCalBarFill bgColorBrand1  hcSmallTxt" style={{
                  				width: '23%',
                  			}}>Julian (Jan. 1)</div>
          <div className="hcEmplCalBarSpace hcSmallTxt" style={{
                  				width: 'calc(100% - 23%)',
                  			}}>Gregorian</div>
        </div>
      </ React.Fragment>
      );
    }
  }




  export class emPlHierarchyItem extends React.Component {
    render() {
      return (
        <div className="hcEmplacesHierarchyItem">
          <div>
            {this.props.name}
          </div>
            <svg height="10" width="100%">
              <line x1="50%" y1="0" x2="50%" y2="10" className="hcEmplacesHierarchyItemLine" />
              <circle cx="50%" cy="2" r="2" className="hcEmplacesHierarchyItemDot" />
            </svg>
          <div className="hcSmallTxt">
            {this.props.timeRange}
          </div>
          <svg height="10" width="100%">
            <line x1="50%" y1="0" x2="50%" y2="10" className="hcEmplacesHierarchyItemLine" />
          </svg>
        </div>

      );
    }
  }
