import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import MainSliderSidebar from './MainSliderSidebar';
import MainSliderBody from './MainSliderBody';

const Edit = ({ data, onChangeTile, tile, selected, properties }) => {
  return (
    <>
      <MainSliderBody
        data={data}
        properties={properties}
        id={tile}
        isEditMode
      />
      <SidebarPortal selected={selected}>
        <MainSliderSidebar
          data={data}
          tile={tile}
          onChangeTile={onChangeTile}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
