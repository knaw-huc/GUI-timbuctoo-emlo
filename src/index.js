import React from 'react';
import ReactDOM from 'react-dom';
import {StyleGuide, DescribedMock, Embed} from './component-view';

import { HcHeaderTimbuctoo } from './tim-emlo-faceted-search';


ReactDOM.render(
    <StyleGuide>
      <DescribedMock title="Faceted Search">
        Components for data entry, forms and uploads.



          <Embed caption="Basic input" description="">
            <HcHeaderTimbuctoo/>
          </Embed>



      </DescribedMock>

    </StyleGuide>,
  document.getElementById('container')
);
