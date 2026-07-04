import React from 'react';
import TicketComments from './TicketComments';
import TicketHeader from './TicketHeader';
import TicketLogs from './TicketLogs';
import TicketWorkbenches from './TicketWorkbenches';

export default function TicketContent({ ticketDetails, currentStakeholder }) {
  const { ticket: { metadata_type: ticketType } } = ticketDetails;
  const stakeholderRole = currentStakeholder.stakeholder_role;
  const TicketWorkbench = TicketWorkbenches[ticketType]?.[stakeholderRole];

  return (
    <>
      <TicketHeader ticketDetails={ticketDetails} />
      {TicketWorkbench && (
        <TicketWorkbench
          ticketDetails={ticketDetails}
          currentStakeholder={currentStakeholder}
        />
      )}
      <TicketComments
        ticketId={ticketDetails.ticket.id}
        currentStakeholder={currentStakeholder}
      />
      <TicketLogs
        ticketId={ticketDetails.ticket.id}
      />
    </>
  );
}
