import React from 'react';
import { InputBoolean, InputString } from '../../wca/FormBuilder/input/FormInputs';
import { useFormObject } from '../../wca/FormBuilder/provider/FormObjectProvider';
import SubSection from '../../wca/FormBuilder/SubSection';
import ConditionalSection from './ConditionalSection';

export default function Website() {
  const { website: websiteData } = useFormObject();

  const usingExternalWebsite = websiteData && !websiteData.generateWebsite;
  const usingExternalRegistration = websiteData && !websiteData.usesWcaRegistration;

  return (
    <SubSection section="website">
      <InputBoolean id="generateWebsite" />
      <ConditionalSection showIf={usingExternalWebsite}>
        <InputString id="externalWebsite" required={usingExternalWebsite} ignoreDisabled />
      </ConditionalSection>
      <InputBoolean id="usesWcaRegistration" />
      <ConditionalSection showIf={usingExternalRegistration}>
        <InputString id="externalRegistrationPage" />
      </ConditionalSection>
      <InputBoolean id="usesWcaLive" ignoreDisabled />
    </SubSection>
  );
}
