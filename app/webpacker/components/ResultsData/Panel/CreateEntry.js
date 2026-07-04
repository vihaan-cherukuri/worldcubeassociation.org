import _ from 'lodash';
import React from 'react';

function CreateEntry({
  initDataItem,
  dataType,
  EditForm,
}) {
  return (
    <>
      <h3>
        Creating a new
        {' '}
        {_.upperFirst(dataType)}
      </h3>
      <EditForm dataItem={initDataItem} sync={() => {}} />
    </>
  );
}

export default CreateEntry;
