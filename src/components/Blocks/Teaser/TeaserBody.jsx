import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { defineMessages, injectIntl } from 'react-intl';
import imageTileSVG from '@plone/volto/components/manage/Tiles/Image/tile-image.svg';
import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
});

const TeaserBody = ({ data, id, isEditMode, intl }) => {
  const contentSubrequests = useSelector(state => state.content.subrequests);
  const dispatch = useDispatch();
  const results = contentSubrequests?.[id]?.data;

  React.useEffect(() => {
    if (data.href) {
      dispatch(getContent(data.href, null, id));
    }
  }, [dispatch, data, id]);

  return (
    <>
      {!data.href && (
        <Message>
          <div className="teaser-item default">
            <img src={imageTileSVG} alt="" />
            <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
          </div>
        </Message>
      )}
      {data.href && results && (
        <div className="teaser-item">
          {(() => {
            const item = (
              <>
                {results.image && <img src={results.image.download} alt="" />}
                <h3>{results.title}</h3>
                <p>{results.description}</p>
              </>
            );
            if (!isEditMode) {
              return (
                <Link
                  to={flattenToAppURL(results['@id'])}
                  target={data.openLinkInNewTab ? '_blank' : null}
                >
                  {item}
                </Link>
              );
            } else {
              return item;
            }
          })()}
        </div>
      )}
    </>
  );
};

TeaserBody.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
};

export default injectIntl(TeaserBody);
