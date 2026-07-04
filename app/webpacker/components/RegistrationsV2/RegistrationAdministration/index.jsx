import React, { useRef } from 'react';
import { Sticky } from 'semantic-ui-react';
import ConfirmProvider from '../../../lib/providers/ConfirmProvider';
import StoreProvider from '../../../lib/providers/StoreProvider';
import WCAQueryClientProvider from '../../../lib/providers/WCAQueryClientProvider';
import messageReducer from '../reducers/messageReducer';
import RegistrationMessage from '../Register/RegistrationMessage';
import RegistrationAdministrationList from './RegistrationAdministrationList';

export default function RegistrationEdit({ competitionInfo }) {
  const ref = useRef();
  return (
    <div ref={ref}>
      <WCAQueryClientProvider>
        <StoreProvider reducer={messageReducer} initialState={{ messages: [] }}>
          <ConfirmProvider>
            <Sticky context={ref} offset={60}>
              <RegistrationMessage />
            </Sticky>
            <RegistrationAdministrationList competitionInfo={competitionInfo} />
          </ConfirmProvider>
        </StoreProvider>
      </WCAQueryClientProvider>
    </div>
  );
}
