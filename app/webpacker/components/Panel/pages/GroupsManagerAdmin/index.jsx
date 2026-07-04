import React from 'react';
import useLoadedData from '../../../../lib/hooks/useLoadedData';
import { apiV0Urls } from '../../../../lib/requests/routes.js.erb';
import { groupTypes } from '../../../../lib/wca-data.js.erb';
import Errored from '../../../Requests/Errored';
import Loading from '../../../Requests/Loading';
import { GroupsManagerForGroups } from '../GroupsManager';

export default function GroupsManagerAdmin() {
  const {
    data: teamsCommitteesGroups,
    loading: teamsCommitteesGroupsLoading,
    error: teamsCommitteesGroupsError,
  } = useLoadedData(apiV0Urls.userGroups.list(groupTypes.teams_committees));
  const {
    data: councilsGroups,
    loading: councilsGroupsLoading,
    error: councilsGroupsError,
  } = useLoadedData(apiV0Urls.userGroups.list(groupTypes.councils));
  const groups = [...(teamsCommitteesGroups || []), ...(councilsGroups || [])];

  if (teamsCommitteesGroupsLoading || councilsGroupsLoading) {
    return <Loading />;
  }
  if (teamsCommitteesGroupsError || councilsGroupsError) {
    return <Errored />;
  }
  return <GroupsManagerForGroups groups={groups} />;
}
