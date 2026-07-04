import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import RegistrationList from './RegistrationList';

export default function Index({ competitionInfo, userId }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RegistrationList
        competitionInfo={competitionInfo}
        userId={userId}
      />
    </QueryClientProvider>
  );
}
