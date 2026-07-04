import classnames from 'classnames';
import React from 'react';
import { Popup, Menu } from 'semantic-ui-react';
import { events } from '../../lib/wca-data.js.erb';
import EventIcon from '../wca/EventIcon';
import '../../stylesheets/event_navigation.scss';

function EventNavigation({ selected, eventIds, onSelect }) {
  return (
    <Menu text className="event-menu-bar">
      {eventIds.map((eventId, index) => (
        <Popup
          key={eventId}
          content={events.byId[eventId].name}
          trigger={(
            <Menu.Item>
              <EventIcon
                key={eventId}
                id={eventId}
                onClick={() => onSelect(eventId, index)}
                className={classnames(selected === eventId && 'selected')}
              />
            </Menu.Item>
            )}
          inverted
          size="tiny"
        />
      ))}
    </Menu>
  );
}

export default EventNavigation;
