import React, { useRef } from 'react';
import { Sticky } from 'semantic-ui-react';
import ConfirmProvider from '../../../lib/providers/ConfirmProvider';
import StoreProvider from '../../../lib/providers/StoreProvider';
import WCAQueryClientProvider from '../../../lib/providers/WCAQueryClientProvider';
import Loading from '../../Requests/Loading';
import FormObjectProvider from '../../wca/FormBuilder/provider/FormObjectProvider';
import RegistrationProvider, { useRegistration } from '../lib/RegistrationProvider';
import messageReducer from '../reducers/messageReducer';
import RegistrationMessage from '../Register/RegistrationMessage';
import RegistrationEditor from './RegistrationEditor';

export default function RegistrationEdit({ registrationId, competitionInfo, user }) {
  const ref = useRef();
  return (
    <div ref={ref}>
      <WCAQueryClientProvider>
        <StoreProvider reducer={messageReducer} initialState={{ messages: [] }}>
          <ConfirmProvider>
            <RegistrationProvider
              competitionInfo={competitionInfo}
              userInfo={user}
            >
              <Sticky context={ref}>
                <RegistrationMessage />
              </Sticky>
              <RegEditWrapper
                registrationId={registrationId}
                competitionInfo={competitionInfo}
                user={user}
              />
            </RegistrationProvider>
          </ConfirmProvider>
        </StoreProvider>
      </WCAQueryClientProvider>
    </div>
  );
}

function RegEditWrapper({ registrationId, competitionInfo, user }) {
  const { registration, isFetching } = useRegistration();

  if (isFetching) {
    return (<Loading />);
  }

  return (
    <FormObjectProvider initialObject={registration}>
      <RegistrationEditor
        registrationId={registrationId}
        competitionInfo={competitionInfo}
        competitor={user}
      />
    </FormObjectProvider>
  );
}
