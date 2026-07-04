import React from 'react';
import { Header } from 'semantic-ui-react';
import useLoadedData from '../../lib/hooks/useLoadedData';
import { apiV0Urls } from '../../lib/requests/routes.js.erb';
import Errored from '../Requests/Errored';
import Loading from '../Requests/Loading';
import DelegatesTable from './DelegatesTable';

export default function DelegatesOfSubregion({ subregion, isAdminMode }) {
  const { data: delegates, loading, error } = useLoadedData(
    apiV0Urls.userRoles.list({
      isActive: true,
      groupId: subregion.id,
    }, 'location,name'),
  );

  if (loading) return <Loading />;
  if (error) return <Errored />;

  return (
    <>
      <Header as="h4" key={subregion.id}>
        {subregion.name}
      </Header>
      <DelegatesTable
        delegates={delegates}
        isAdminMode={isAdminMode}
      />
    </>
  );
}
