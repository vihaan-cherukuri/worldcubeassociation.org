import React from 'react';

import useNestedInputUpdater from '../../../lib/hooks/useNestedInputUpdater';
import AttemptResultField from '../WCALive/AttemptResultField/AttemptResultField';

function AttemptResultFieldWrapper({
  index, setState, attempt, eventId,
}) {
  const setAttempt = useNestedInputUpdater(setState, `attempts[${index}]`);
  return (
    <AttemptResultField
      eventId={eventId}
      label={`Attempt ${index + 1}`}
      initialValue={attempt}
      value={attempt}
      onChange={setAttempt}
    />
  );
}

export default AttemptResultFieldWrapper;
