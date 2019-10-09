import React from 'react';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import MainSliderData from './MainSliderData';

const MainSliderSidebar = props => {
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="MainSlider" defaultMessage="MainSlider" />
        </h2>
      </header>

      <MainSliderData {...props} />
    </Segment.Group>
  );
};

export default MainSliderSidebar;
