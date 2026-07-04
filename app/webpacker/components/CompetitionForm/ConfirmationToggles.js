import { useMutation, useQueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import React, { useCallback } from 'react';
import {
  Form,
  Header,
} from 'semantic-ui-react';
import I18n from '../../lib/i18n';
import { useStore } from '../../lib/providers/StoreProvider';
import { fetchJsonOrError } from '../../lib/requests/fetchWithAuthenticityToken';
import { updateCompetitionConfirmationDataUrl } from '../../lib/requests/routes.js.erb';
import Loading from '../Requests/Loading';
import { useFormErrorHandler } from '../wca/FormBuilder/provider/FormObjectProvider';
import { confirmationDataQueryKey, useConfirmationData } from './api';

function ConfirmationControlCheckbox({
  competitionId,
  confirmationData,
  toggleKey,
}) {
  const { [toggleKey]: isChecked } = confirmationData;

  const onError = useFormErrorHandler();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({
      compId,
      toggleValue,
    }) => fetchJsonOrError(updateCompetitionConfirmationDataUrl(compId), {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({
        [toggleKey]: toggleValue,
      }),
    }).then((raw) => raw.data),
    onSuccess: (respData, variables) => queryClient.setQueryData(
      confirmationDataQueryKey(variables.compId),
      respData.data,
    ),
    onError,
  });

  const saveNotificationPreference = useCallback((_e, { checked }) => {
    mutation.mutate({ compId: competitionId, toggleValue: checked });
  }, [competitionId, mutation]);

  return (
    <Form.Checkbox
      checked={isChecked}
      onChange={saveNotificationPreference}
      disabled={mutation.isPending}
      label={I18n.t(`competitions.competition_form.labels.admin.${_.snakeCase(toggleKey)}`)}
    />
  );
}

export default function ConfirmationToggles({ competitionId }) {
  const { isAdminView } = useStore();

  const {
    data: confirmationData,
    isLoading,
  } = useConfirmationData(competitionId);

  if (!isAdminView) return null;
  if (isLoading) return <Loading />;

  return (
    <>
      <Header style={{ marginTop: 0 }}>{I18n.t('competitions.announcements')}</Header>
      <Form.Group widths="equal">
        <ConfirmationControlCheckbox
          competitionId={competitionId}
          confirmationData={confirmationData}
          toggleKey="isConfirmed"
        />
        <ConfirmationControlCheckbox
          competitionId={competitionId}
          confirmationData={confirmationData}
          toggleKey="isVisible"
        />
      </Form.Group>
    </>
  );
}
