import React from 'react';

import useInputState from '../../lib/hooks/useInputState';
import { omnisearchApiUrl } from '../../lib/requests/routes.js.erb';
import MultiSearchInput from './MultiSearchInput';

function SearchWidget() {
  // purely a dummy for now...
  const [selectedValue, setSelectedValue] = useInputState();

  return (
    <MultiSearchInput
      selectedValue={selectedValue}
      onChange={setSelectedValue}
      removeNoResultsMessage
      showOptionToGoToSearchPage
      goToItemUrlOnClick
      url={omnisearchApiUrl}
      multiple={false}
    />
  );
}

export default SearchWidget;
