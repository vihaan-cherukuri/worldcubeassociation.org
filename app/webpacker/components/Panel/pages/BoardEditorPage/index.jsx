import React from 'react';
import useLoadedData from '../../../../lib/hooks/useLoadedData';
import { apiV0Urls } from '../../../../lib/requests/routes.js.erb';
import { groupTypes } from '../../../../lib/wca-data.js.erb';
import Errored from '../../../Requests/Errored';
import Loading from '../../../Requests/Loading';
import BoardEditor from './BoardEditor';

export default function BoardEditorPage() {
  const {
    data: boardRoles, loading, error, sync,
  } = useLoadedData(
    apiV0Urls.userRoles.list({
      groupType: groupTypes.board,
      isActive: true,
    }, 'name'),
  );

  if (loading) return <Loading />;
  if (error) return <Errored />;

  return <BoardEditor boardRoles={boardRoles} sync={sync} />;
}
