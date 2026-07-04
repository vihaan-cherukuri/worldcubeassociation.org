import { useQuery } from '@tanstack/react-query';

import { fetchJsonOrError } from '../../lib/requests/fetchWithAuthenticityToken';
import { apiV0Urls } from '../../lib/requests/routes.js.erb';

const useDelegatesData = () => {
  const {
    data,
    isPending,
  } = useQuery({
    queryKey: ['delegates-index'],
    queryFn: () => fetchJsonOrError(apiV0Urls.delegates.searchIndex),
  });

  return { delegatesLoading: isPending, delegatesData: data?.data };
};

export default useDelegatesData;
