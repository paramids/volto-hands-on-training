import React from 'react';
import { DefaultView } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';

const SuccessStoryView = props => {
  const { content } = props;
  return (
    <>
      <img
        className="lead image"
        alt={content.image_caption}
        src={flattenToAppURL(content.image.download)}
      />
      <DefaultView {...props} />
    </>
  );
};

export default SuccessStoryView;
