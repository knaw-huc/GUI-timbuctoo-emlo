import React from 'react';
const Fragment = React.Fragment;


  export class HcHeaderTimbuctoo extends React.Component {
    render() {
      return (
        <React.Fragment>
        <div className="hcContentContainer bgColorBrand1 hcMarginBottom1">
          <header className=" hcPageHeaderSimple hcBasicSideMargin">
            <a href="#" className="hcBrand">
              <div className="hcBrandLogo"><img src="images/{{logo}}" className="logo" alt=""/></div>
            </a>

            <nav>
              <a href="#">All datasets</a>
              <a href="#">About</a>
            </nav>
          </header>
        </div>
        <div className="hcContentContainer hcMarginBottom5 hcBorderBottom">
          <div className="hcBarDataset hcBasicSideMargin">
            <span>
              <span className="hcSmallTxt hcTxtColorGreyMid">Dataset</span>
              <select  >
                //
                  <option value="">//</option>
                //
              </select>

            </span>
            <span>
              <span className="hcSmallTxt hcTxtColorGreyMid"> Collections</span>
              <select  >
                //
                  <option value="">//</option>
                //
              </select>
            </span>

          </div>
        </div>
      </React.Fragment>
      );
    }
  }
