import React from 'react';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RecentSuccessStories = props => {
  const { id } = props;
  const searchSubrequests = useSelector(state => state.search.subrequests);
  const dispatch = useDispatch();
  const results = searchSubrequests?.[id]?.items;

  React.useEffect(() => {
    dispatch(
      searchContent(
        '/',
        {
          sort_on: 'created',
          metadata_fields: '_all',
          portal_type: ['success_story'],
        },
        id,
      ),
    );
  }, [dispatch, id]);

  return (
    <ul>
      {results &&
        results.map(story => (
          <li key={story['@id']}>
            <Link to={story['@id']}>{story.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default RecentSuccessStories;
