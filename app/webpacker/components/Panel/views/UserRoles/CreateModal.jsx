import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Form, Modal } from 'semantic-ui-react';
import useInputState from '../../../../lib/hooks/useInputState';
import Errored from '../../../Requests/Errored';
import SEARCH_MODELS from '../../../SearchWidget/SearchModel';
import { IdWcaSearch } from '../../../SearchWidget/WcaSearch';
import createUserRole from './api/createUserRole';

export default function CreateModal({
  open, onClose, title, groupId, status, location,
}) {
  const {
    mutate: createUserRoleMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: createUserRole,
    onSuccess: onClose,
  });

  const [userId, setUserId] = useInputState();

  if (isError) {
    return (
      <Modal
        open={open}
        onClose={onClose}
      >
        <Modal.Content>
          <Errored error={error} />
        </Modal.Content>
      </Modal>
    );
  }

  return (
    <Modal
      open={open}
      onClose={isPending ? null : onClose}
    >
      <Modal.Header>
        {title || 'Create User Role'}
      </Modal.Header>
      <Modal.Content>
        <Form loading={isPending}>
          <Form.Field
            label="Select User"
            control={IdWcaSearch}
            value={userId}
            onChange={setUserId}
            model={SEARCH_MODELS.user}
            multiple={false}
          />

          <Form.Button
            onClick={onClose}
          >
            Cancel
          </Form.Button>
          <Form.Button
            disabled={!userId}
            onClick={() => {
              createUserRoleMutation({
                userId,
                groupId,
                status,
                location,
              });
            }}
          >
            Save
          </Form.Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
