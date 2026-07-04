import React from 'react';
import {
  Button, Form, Header, HeaderSubheader,
} from 'semantic-ui-react';
import useInputState from '../../../../lib/hooks/useInputState';
import useQueryParams from '../../../../lib/hooks/useQueryParams';
import { viewUrls } from '../../../../lib/requests/routes.js.erb';
import SEARCH_MODELS from '../../../SearchWidget/SearchModel';
import { IdWcaSearch } from '../../../SearchWidget/WcaSearch';

export default function CompetitionsInput() {
  const [queryParams] = useQueryParams();
  const competitionIdsFromQuery = queryParams?.competition_ids?.split(',')?.filter(Boolean);
  const [competitionIds, setCompetitionIds] = useInputState(competitionIdsFromQuery || []);

  return (
    <Form>
      <IdWcaSearch
        model={SEARCH_MODELS.competition}
        multiple
        value={competitionIds}
        onChange={setCompetitionIds}
        label="Competition(s)"
      />
      <Header as="h4">
        <HeaderSubheader>
          Leave blank to check for all competitions
        </HeaderSubheader>
      </Header>
      <Button
        primary
        size="big"
        href={viewUrls.admin.completePersons(competitionIds)}
      >
        Check newcomers
      </Button>
    </Form>
  );
}
