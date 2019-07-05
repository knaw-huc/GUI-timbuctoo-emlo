import React from 'react';
import { HcFacetBasic, HcFacetTextSearch } from './facets';
import { HcEmPlaceDataBlock,HcEmPlaceItemHeader, HcEmPlaceListRow, HcEmPlaceCalander, emPlHierarchyItem } from './detailpage';
import { HcResultListHeader, HcResultList, HcResultSelectedFacets,HcResultListLegend,HcResultListPaging } from './results';

  export class HcLayoutFacetResults extends React.Component {
    render() {
      return (
        <div className="hcContentContainer">

          <div className="hcBasicSideMargin hcMarginTop4 hcMarginBottom1">
            <h1>{this.props.pageName}</h1>
          </div>

          <div className="hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15">

            <div className="hcLayoutFacets">
              <button type="button" name="button" id="showFacets" className="hcfixedSideButton">
                <img src="images/icons/icon-set-facets.svg" className="icon" alt="Click to open en close facets"/>
              </button>

              <div className="hcLayoutFacetsToggel" id="hcLayoutFacetsToggel">
                <HcFacetTextSearch
                  facetName="Text search"
                />
                <HcFacetBasic
                  facetName="Dataset"
                />
                <HcFacetBasic
                  facetName="Persons"
                />
              </div>
            </div>

            <div className="hcLayoutResults">
              <HcResultListHeader
                totalResults="2332"
              />
              <HcResultSelectedFacets/>
              <HcResultListLegend/>
              <HcResultList/>
              <HcResultListPaging/>


            </div>


          </div>
        </div>
      );
    }
  }



  export class HcLayoutEmplacesDetail extends React.Component {
    render() {
      return (
        <React.Fragment>
        <div className="hcContentContainer">
          <div className="hcEmpl2Col hcMarginBottom5">
            <div className="hcEmpl2Col1 basicSideMargin">
              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Opole" isH1={true} hasProv={true} />
                  <div>
                    Opolė, Òpòle, Opolí, Oppein, Oppeln, Uopole, Горад Аполе, Ополе, ออปอเล, 오폴레 ,אופולה, أبولوسكي, اوپول, اوپوله
                  </div>
              </HcEmPlaceDataBlock>


              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Administrative hierarchy" isH1={false} hasProv={false} />
                  <div className="hcEmplHierarchy">
                <ul>
                  <li>Poland Country
                    <ul>
                      <li>Opole VoioVodeship
                        <ul>
                          <li>Opole (AMD2)
                            <ul>
                              <li>Opole (AMD3)
                                <ul>
                                  <li>Opole (Populated place)</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              </HcEmPlaceDataBlock>

              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Location" isH1={false} hasProv={false} />
                Greenwich Meridian: 50.67211, 17.92533 (N 50°40′20′′ E 17°55′31′′)
              </HcEmPlaceDataBlock>

              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Citation" isH1={false} hasProv={false} />
                <a href="#">Chicago Manual of Style</a>, <a href="#">MLA</a>, <a href="#">BibTeX</a>, <a href="#">RIS</a>
              </HcEmPlaceDataBlock>

              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Persistent URI" isH1={false} hasProv={false} />
                 https://emplaces.info/ark:/12345/abc67890
              </HcEmPlaceDataBlock>

              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Authorities" isH1={false} hasProv={false} />
                <a href="#">GeoNames</a>, <a href="#">Getty TGN</a>, <a href="#">WikiData</a>, <a href="#">GND</a>
              </HcEmPlaceDataBlock>

              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Name Attestations" isH1={false} hasProv={true} />
                  <div className="hcEmplList">
                     <div className="hcEmplListHeader">
                       <div>Name</div>
                       <div>Language</div>
                       <div>Date</div>
                       <div>Source</div>
                     </div>
                  </div>
                  <HcEmPlaceListRow />
              </HcEmPlaceDataBlock>

              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Calanders" isH1={false} hasProv={true} />
              <HcEmPlaceCalander percent="23%" date="1584.01.28"/>
              </HcEmPlaceDataBlock>


              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Connections" isH1={false} hasProv={true} />
                  <div class="hcEmplDataBlock hcMarginBottom3">

                    <div class="hcEmplList">
                      <div class="hcEmplListHeader">
                        <div>Name</div>
                        <div>Type</div>
                        <div>Relation</div>

                      </div>
                      <div class="hcEmplListRow">
                        <div>St. Adalbert</div>
                        <div>Church</div>
                        <div>Located within</div>
                      </div>
                    </div>
                  </div>

              </HcEmPlaceDataBlock>



              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Related Resources" isH1={false} hasProv={false} />
                <ul>
                  <li>Herder Institute: Historical-Topographical Atlas of Silesian Towns</li>
                  <li>ARTFL: Diderot and d’Alembert, Encyclopédie (Opole)</li>
                </ul>
              </HcEmPlaceDataBlock>


              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Bibliography" isH1={false} hasProv={false} />
                There are 16 publications associated with Opole.
              </HcEmPlaceDataBlock>






            </div>{/* col 1 */ }





            <div className="hcEmpl2Col2">
              <HcEmPlaceDataBlock>
                <HcEmPlaceItemHeader title="Description" isH1={false} hasProv={false} />
                Opole is a city located in southern Poland on the Oder River (Odra). With a population of approximately 127,792 (January 2017), it is the capital of the Opole Voivodeship and also the seat of Opole County. With it long history dating back to the ninth century, Opole is considered to be one of the oldest towns in Poland.
              </HcEmPlaceDataBlock>


              <HcEmPlaceDataBlock>
                <div className="hcEmplDataBlock hcMarginBottom3">
                  <HcEmPlaceItemHeader title="Maps" isH1={false} hasProv={true} />
                  <div className="hcEmplTabBar">
                    <div className="hcSelected">Current</div>
                    <div>1561</div>
                    <div>1608</div>
                    <div>1740</div>
                    <div>1794</div>
                  </div>
                  <div className="hcEmplEmbedBox"> </div>
                </div>
              </HcEmPlaceDataBlock>


              <HcEmPlaceDataBlock>
                  <div className="hcEmplDataBlock hcMarginBottom3">
                    <HcEmPlaceItemHeader title="Historical Hierarchies" isH1={false} hasProv={true} />
                    <div className="hcEmplTabBar">
                      <div className="hcSelected">Administrative</div>
                      <div className="">Ecclesiastical</div>
                      <div className="hcTxtColorGreyMid">Military</div>
                      <div className="hcTxtColorGreyMid">Judicial</div>
                    </div>
                    <div className="hcEmplEmbedBox hcEmplEmbedBoxaSide">
                      <div className="hcEmplEmbedBoxNav">
                        <div>1490-1521￼￼</div>
                        <div>1521-1526</div>
                        <div>1526-1742</div>
                        <div>1742-1806</div>
                      </div>
                      <div className="hcEmplEmbedBoxContent">
                        <emPlHierarchyItem name="Holy Roman Empire" timeRange="0010 - 0129" />
                        <emPlHierarchyItem name="Bohemian Crown" timeRange="1100 - 1347" />
                        <emPlHierarchyItem name="Holy Roman Empire" timeRange="0010 - 0129" />
                        <emPlHierarchyItem name="Bohemian Crown" timeRange="1100 - 1347" />
                      </div>
                    </div>
                  </div>
              </HcEmPlaceDataBlock>



            </div>{/* col 2 */ }
          </div> {/* coll layout */ }









        </div>

        <div className="colorBgGreyLight">

          <div className="hcContentContainer">
            <div className="hcEmpl2Col hcMarginBottom5  hcMarginTop3">
              <div className="hcEmpl2Col1 basicSideMargin">
                <h2>About this record</h2>
                <HcEmPlaceDataBlock>
                  <HcEmPlaceItemHeader title="Feedback" isH1={false} hasProv={false} />
                    Please email us your comments. We welcome contributions both from individual researchers and projects.
                </HcEmPlaceDataBlock>


              </div>

              <div className="hcEmpl2Col2 basicSideMargin">

                <HcEmPlaceDataBlock>
                  <br/><br/><br/>
                  <strong>Creator:</strong> Cultures of Knowledge <br/>
                  <strong> Contributors:</strong> Dariusz Gierczak, Arno Bosse <br/>
                  <strong>License:</strong> CC-BY (v3)
                </HcEmPlaceDataBlock>

                <HcEmPlaceDataBlock>
                  <HcEmPlaceItemHeader title="Export" isH1={false} hasProv={true} />
                  Export record as <a href="#">CSV</a>, <a href="#">Excel</a>, <a href="#">Turtle-RDF</a>, <a href="#">GeoJSON</a>
                </HcEmPlaceDataBlock>


              </div>

            </div>
          </div>
        </div>
      </React.Fragment>


      );
    }
  }
