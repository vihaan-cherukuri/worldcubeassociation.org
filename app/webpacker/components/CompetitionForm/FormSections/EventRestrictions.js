import React, { useMemo } from 'react';
import { Divider } from 'semantic-ui-react';
import { useStore } from '../../../lib/providers/StoreProvider';
import {
  InputBoolean,
  InputBooleanSelect,
  InputNumber,
  InputSelect,
  InputTextArea,
} from '../../wca/FormBuilder/input/FormInputs';
import { useFormObject } from '../../wca/FormBuilder/provider/FormObjectProvider';
import SubSection from '../../wca/FormBuilder/SubSection';
import ConditionalSection from './ConditionalSection';

export default function EventRestrictions({
  isCloning = false,
  storedEvents = [],
}) {
  const { isPersisted } = useStore();

  const {
    eventRestrictions: {
      forbidNewcomers,
      earlyPuzzleSubmission,
      qualificationResults,
      eventLimitation,
    },
  } = useFormObject();

  const mainEventOptions = useMemo(() => {
    const storedEventOptions = storedEvents?.map((event) => ({
      key: event.id,
      value: event.id,
      text: event.name,
    })) || [];

    return [{
      key: '',
      value: '',
      text: '',
    }, ...storedEventOptions];
  }, [storedEvents]);

  const newcomers = forbidNewcomers.enabled;
  const earlySubmission = earlyPuzzleSubmission.enabled;
  const needQualification = qualificationResults.enabled;
  const restrictEvents = eventLimitation.enabled;

  return (
    <SubSection section="eventRestrictions">
      <SubSection section="forbidNewcomers">
        <InputBoolean id="enabled" />
        <ConditionalSection showIf={newcomers}>
          <InputTextArea id="reason" />
        </ConditionalSection>
      </SubSection>
      <SubSection section="earlyPuzzleSubmission">
        <InputBoolean id="enabled" />
        <ConditionalSection showIf={earlySubmission}>
          <InputTextArea id="reason" />
        </ConditionalSection>
      </SubSection>
      <SubSection section="qualificationResults">
        <InputBoolean id="enabled" />
        <ConditionalSection showIf={needQualification}>
          <InputTextArea id="reason" />
          <InputBooleanSelect id="allowRegistrationWithout" />
        </ConditionalSection>
      </SubSection>
      <SubSection section="eventLimitation">
        <InputBoolean id="enabled" />
        <ConditionalSection showIf={restrictEvents}>
          <InputTextArea id="reason" />
          <InputNumber id="perRegistrationLimit" min={1} nullable />
        </ConditionalSection>
      </SubSection>

      {!isCloning && isPersisted && (
        <>
          <Divider />
          <InputSelect id="mainEventId" options={mainEventOptions} ignoreDisabled />
        </>
      )}
    </SubSection>
  );
}
