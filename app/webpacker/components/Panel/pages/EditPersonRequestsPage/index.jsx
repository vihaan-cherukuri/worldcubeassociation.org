import _ from 'lodash';
import React from 'react';
import { Header } from 'semantic-ui-react';
import { ticketTypes, ticketStatuses } from '../../../../lib/wca-data.js.erb';
import TicketsList from '../../../TicketsList';

export default function EditPersonRequestsPage() {
  return (
    <>
      {[ticketStatuses.edit_person.open, ticketStatuses.edit_person.closed].map((status) => (
        <>
          <Header>{`${_.upperFirst(status)} Tickets`}</Header>
          <TicketsList
            type={ticketTypes.edit_person}
            status={status}
            sort="createdAt:desc"
          />
        </>
      ))}
    </>
  );
}
