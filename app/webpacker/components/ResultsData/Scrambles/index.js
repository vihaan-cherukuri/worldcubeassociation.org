import React from 'react';
import { competitionEventScramblesApiUrl, newScrambleUrl } from '../../../lib/requests/routes.js.erb';
import ViewData from '../ViewData';
import ScrambleRowBody from './ScrambleRowBody';
import ScrambleRowHeader from './ScrambleRowHeader';

function CompetitionScrambles({ competitionId, canAdminResults }) {
  return (
    <ViewData
      competitionId={competitionId}
      canAdminResults={canAdminResults}
      dataUrlFn={competitionEventScramblesApiUrl}
      newEntryUrlFn={newScrambleUrl}
      DataRowHeader={ScrambleRowHeader}
      DataRowBody={ScrambleRowBody}
    />
  );
}

export default CompetitionScrambles;
