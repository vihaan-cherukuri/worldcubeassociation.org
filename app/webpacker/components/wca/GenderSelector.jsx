import _ from 'lodash';
import React from 'react';
import { Form } from 'semantic-ui-react';

import I18n from '../../lib/i18n';
import { genders } from '../../lib/wca-data.js.erb';

const genderOptions = _.map(genders.byId, (gender) => ({
  key: gender.id,
  text: gender.name,
  value: gender.id,
}));

function GenderSelector({
  name,
  gender,
  onChange,
  disabled = false,
}) {
  return (
    <Form.Select
      name={name}
      label={I18n.t('activerecord.attributes.user.gender')}
      value={gender}
      options={genderOptions}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default GenderSelector;
