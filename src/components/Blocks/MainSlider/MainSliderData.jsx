import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { defineMessages, injectIntl } from 'react-intl';
import { CheckboxWidget, TextWidget } from '@plone/volto/components';
import { compose } from 'redux';
import withObjectBrowser from '@plone/volto/components/manage/Sidebar/ObjectBrowser';

import clearSVG from '@plone/volto/icons/clear.svg';
import navTreeSVG from '@plone/volto/icons/nav.svg';

const messages = defineMessages({
  SourceSlider1: {
    id: 'Source Slide 1',
    defaultMessage: 'Source Slide 1',
  },
  SourceSlider2: {
    id: 'Source Slide 2',
    defaultMessage: 'Source Slide 2',
  },
  openLinkInNewTab: {
    id: 'Open in a new tab',
    defaultMessage: 'Open in a new tab',
  },
});

const MainSliderData = ({
  data,
  tile,
  onChangeTile,
  openObjectBrowser,
  required = false,
  intl,
}) => {
  return (
    <>
      <Segment className="form sidebar-image-data">
        <TextWidget
          id="source1"
          title={intl.formatMessage(messages.SourceSlider1)}
          required={false}
          value={data.hrefSource1}
          icon={data.hrefSource1 ? clearSVG : navTreeSVG}
          iconAction={
            data.hrefSource1
              ? () => {
                  onChangeTile(tile, {
                    ...data,
                    hrefSource1: '',
                  });
                }
              : () => openObjectBrowser('link')
          }
          onChange={(name, value) => {
            debugger;

            onChangeTile(tile, {
              ...data,
              hrefSource1: value,
            });
          }}
        />
        <CheckboxWidget
          id="openLinkInNewTab"
          title={intl.formatMessage(messages.openLinkInNewTab)}
          value={data.openLinkInNewTab1 ? data.openLinkInNewTab1 : false}
          onChange={(name, value) => {
            onChangeTile(tile, {
              ...data,
              openLinkInNewTab1: value,
            });
          }}
        />
      </Segment>
      <Segment className="form sidebar-image-data">
        <TextWidget
          id="source2"
          title={intl.formatMessage(messages.SourceSlider2)}
          required={false}
          value={data.hrefSource2}
          icon={data.hrefSource2 ? clearSVG : navTreeSVG}
          iconAction={
            data.hrefSource2
              ? () => {
                  onChangeTile(tile, {
                    ...data,
                    hrefSource2: '',
                  });
                }
              : () => openObjectBrowser('link')
          }
          onChange={(name, value) => {
            onChangeTile(tile, {
              ...data,
              hrefSource2: value,
            });
          }}
        />
        <CheckboxWidget
          id="openLinkInNewTab"
          title={intl.formatMessage(messages.openLinkInNewTab)}
          value={data.openLinkInNewTab2 ? data.openLinkInNewTab2 : false}
          onChange={(name, value) => {
            onChangeTile(tile, {
              ...data,
              openLinkInNewTab2: value,
            });
          }}
        />
      </Segment>
    </>
  );
};

MainSliderData.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  tile: PropTypes.string.isRequired,
  onChangeTile: PropTypes.func.isRequired,
  openObjectBrowser: PropTypes.func.isRequired,
};

export default compose(
  withObjectBrowser,
  injectIntl,
)(MainSliderData);
