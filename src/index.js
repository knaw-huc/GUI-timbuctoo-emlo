import React from 'react';
import ReactDOM from 'react-dom';
import {StyleGuide, DescribedMock, Embed} from './component-view';

import { HcHeaderTimbuctoo, HcFooterTimbuctoo } from './tim-emlo-faceted-search';
import { HcLayoutFacetResults, HcLayoutEmplacesDetail } from './layouts';
import { HcFacetBasic } from './facets';
import { HcResultListHeader, HcResultList, HcResultListPaging } from './results';


ReactDOM.render(
<div>
    <StyleGuide>
      <DescribedMock title="Faceted Search">
        Timbuctoo and Emlo faceted search page components



          <Embed caption="Timbuctoo Header" description="">
            <HcHeaderTimbuctoo/>
          </Embed>

          <Embed caption="Two column responsive faceted search" description="">
            <HcLayoutFacetResults
              pageName="Place search"
            />
          </Embed>

          <Embed caption="Basic facet" description="">
            <HcFacetBasic
              facetName="Datasets"
            />
          </Embed>

          <Embed caption="Result list Header" description="">
            <HcResultListHeader
              totalResults="2332"
            />
          </Embed>

          <Embed caption="Result list" description="">
            <HcResultList/>
          </Embed>

          <Embed caption="Paging" description="">
            <HcResultListPaging/>
          </Embed>



      </DescribedMock>

    </StyleGuide>
      <p>Full page</p>
      <HcHeaderTimbuctoo/>
      <HcLayoutEmplacesDetail/>
      <HcFooterTimbuctoo/>
    </div>
    ,
  document.getElementById('container')
);
