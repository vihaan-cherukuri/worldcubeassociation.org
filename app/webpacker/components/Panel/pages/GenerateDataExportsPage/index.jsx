import React from 'react';
import { cronjobs } from '../../../../lib/wca-data.js.erb';
import CronjobStatus from '../../views/CronJobStatus';

export default function GenerateDataExportsPage() {
  return (
    <>
      <CronjobStatus cronjobName={cronjobs.DumpDeveloperDatabase} />
      <CronjobStatus cronjobName={cronjobs.DumpPublicResultsDatabase} />
    </>
  );
}
