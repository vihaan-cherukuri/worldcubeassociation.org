import React from 'react';
import { panelPageUrl } from '../../../../lib/requests/routes.js.erb';
import { ticketStatuses, PANEL_PAGES } from '../../../../lib/wca-data.js.erb';
import ApproveView from './ApproveView';
import EditPersonRequestedChanges from './EditPersonRequestedChanges';
import EditPersonValidations from './EditPersonValidations';
import OldDataSyncInfo from './OldDataSyncInfo';
import RejectView from './RejectView';

export default function EditPersonActionerView({ ticketDetails, currentStakeholder }) {
  const { ticket: { id, metadata } } = ticketDetails;

  if (ticketDetails.ticket.metadata.status === ticketStatuses.edit_person.closed) {
    return (
      <>
        You cannot edit this person through ticket anymore as the ticket is closed.
        But you can do it through
        {' '}
        <a href={panelPageUrl(PANEL_PAGES.editPerson, { wcaId: metadata.wca_id })}>
          Edit Person form
        </a>
        .
      </>
    );
  }

  return (
    <>
      <EditPersonValidations
        ticketDetails={ticketDetails}
      />
      <OldDataSyncInfo
        ticketDetails={ticketDetails}
        currentStakeholder={currentStakeholder}
      />
      <EditPersonRequestedChanges
        ticketId={id}
        currentStakeholder={currentStakeholder}
        requestedChanges={metadata.tickets_edit_person_fields}
        person={metadata.person}
      />
      <ApproveView ticketId={id} currentStakeholder={currentStakeholder} />
      <RejectView ticketId={id} currentStakeholder={currentStakeholder} />
    </>
  );
}
