import React from 'react';
import cx from 'classnames';

const Edit = props => {
  return (
    <div className={cx('tile text', { selected: props.selected })}>
      I'm the tile edit component!
    </div>
  );
};

export default Edit;
