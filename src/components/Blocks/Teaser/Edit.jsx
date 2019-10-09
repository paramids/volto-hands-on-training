import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import TeaserSidebar from './TeaserSidebar';
import TeaserBody from './TeaserBody';

const Edit = ({ data, onChangeTile, tile, selected, properties }) => {
  return (
    <>
      <TeaserBody data={data} properties={properties} id={tile} isEditMode />
      <SidebarPortal selected={selected}>
        <TeaserSidebar data={data} tile={tile} onChangeTile={onChangeTile} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
