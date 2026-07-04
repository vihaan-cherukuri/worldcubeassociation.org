import React from 'react';
import { Divider } from 'semantic-ui-react';
import {
  InputBoolean,
  InputChampionships,
  InputMarkdown,
  InputTextArea,
} from '../wca/FormBuilder/input/FormInputs';
import SubSection from '../wca/FormBuilder/SubSection';
import CompDates from './FormSections/CompDates';
import CompetitorLimit from './FormSections/CompetitorLimit';
import EventRestrictions from './FormSections/EventRestrictions';
import NameDetails from './FormSections/NameDetails';
import RegistrationDates from './FormSections/RegistrationDates';
import RegistrationDetails from './FormSections/RegistrationDetails';
import RegistrationFee from './FormSections/RegistrationFees';
import Series from './FormSections/Series';
import Staff from './FormSections/Staff';
import VenueInfo from './FormSections/VenueInfo';
import Website from './FormSections/Website';
import NearbyComps from './Tables/NearbyComps';

export default function MainForm({
  isCloning = false,
  storedEvents = [],
}) {
  return (
    <>
      <NameDetails />
      <VenueInfo />
      <Divider />

      <CompDates />
      <NearbyComps />
      <Series />
      <Divider />

      <RegistrationDates />

      <InputMarkdown id="information" required ignoreDisabled />

      <CompetitorLimit />
      <Staff />
      <Divider />

      <InputChampionships id="championships" noHint="blank" />
      <Divider />

      <Website />
      <Divider />

      <RegistrationDetails />
      <RegistrationFee />
      <Divider />

      <EventRestrictions isCloning={isCloning} storedEvents={storedEvents} />

      <InputTextArea id="remarks" />

      {isCloning && (
        <SubSection section="cloning">
          <InputBoolean id="cloneTabs" />
        </SubSection>
      )}
    </>
  );
}
