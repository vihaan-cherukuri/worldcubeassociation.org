import React from 'react';
import SingleEntryTable from '../Panel/SingleEntryTable';
import ResultRow from './ResultRow';
import { ResultRowHeader } from './ResultRowHeader';

function SingleResultRow({
  dataItem,
  dataItems,
  index,
}) {
  return (
    <ResultRow result={dataItem} results={dataItems} index={index} adminMode={false} />
  );
}

function ShowSingleResult({ dataItem }) {
  return (
    <SingleEntryTable
      dataItem={dataItem}
      HeaderComponent={ResultRowHeader}
      RowComponent={SingleResultRow}
      moreClassNames="event-results"
    />
  );
}

export default ShowSingleResult;
