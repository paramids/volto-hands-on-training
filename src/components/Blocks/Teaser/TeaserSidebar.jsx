import React from 'react';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import TeaserData from './TeaserData';

const TeaserSidebar = props => {
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Teaser" defaultMessage="Teaser" />
        </h2>
      </header>

      <TeaserData {...props} />
    </Segment.Group>
  );
};

export default TeaserSidebar;
