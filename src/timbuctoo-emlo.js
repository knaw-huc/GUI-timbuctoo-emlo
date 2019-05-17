import React from 'react';


  export class HcResultItemEmPlaces extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div class="hcListBasicResult">
            <div class="hcListItemLong"><strong>{this.props.resultItemName}</strong><br/>{this.props.resultItemAdministration}</div>
            <div>{this.props.resultItemType}</div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            {/* { this.props.resultItemAltNames} */}

            {this.props.resultItemAltNames.map(apartment => (
              <span>{this.props.resultItemAltNames.altName}</span>
              ))}

          </div>
          </div>

        </React.Fragment>
      );
    }
  }
