import _ from 'lodash';
import React, { Fragment, useMemo } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import useLoadedData from '../../lib/hooks/useLoadedData';
import I18n from '../../lib/i18n';
import { apiV0Urls } from '../../lib/requests/routes.js.erb';
import { groupTypes } from '../../lib/wca-data.js.erb';
import Errored from '../Requests/Errored';
import Loading from '../Requests/Loading';
import UserBadge from '../UserBadge';

export default function Translators() {
  const {
    data: translators, loading, error,
  } = useLoadedData(apiV0Urls.userRoles.list({ groupType: groupTypes.translators }));
  const groupedTranslators = useMemo(
    () => _.groupBy((translators || []), (role) => role.group.id),
    [translators],
  );

  if (loading) return <Loading />;
  if (error) return <Errored />;

  return (
    <Container fluid>
      <Header as="h2">{I18n.t('page.translators.title')}</Header>
      {Object.entries(groupedTranslators).map(([groupId, translatorsList]) => (
        <Fragment key={groupId}>
          <Header as="h3">{translatorsList[0].group.name}</Header>
          <Grid padded>
            {translatorsList.map((role) => (
              <UserBadge key={role.id} user={role.user} />
            ))}
          </Grid>
        </Fragment>
      ))}
    </Container>
  );
}
