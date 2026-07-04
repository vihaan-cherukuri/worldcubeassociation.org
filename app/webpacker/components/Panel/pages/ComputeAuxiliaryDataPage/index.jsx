import React from 'react';

import { cronjobs } from '../../../../lib/wca-data.js.erb';
import CronjobStatus from '../../views/CronJobStatus';

export default function ComputeAuxiliaryDataPage() {
  return <CronjobStatus cronjobName={cronjobs.ComputeAuxiliaryData} />;
}
