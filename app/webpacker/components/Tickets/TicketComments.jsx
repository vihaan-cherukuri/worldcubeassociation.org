import { useQuery } from '@tanstack/react-query';
import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { Button, Comment, Header } from 'semantic-ui-react';
import Errored from '../Requests/Errored';
import Loading from '../Requests/Loading';
import getComments from './api/getComments';
import TicketCommentCreate from './TicketCommentCreate';
import '../../stylesheets/semantic/components/comment.min.css';

export default function TicketComments({ ticketId, currentStakeholder }) {
  const [createComment, setCreateComment] = useState(false);

  const {
    data: comments, isFetching, isError, refetch,
  } = useQuery({
    queryKey: ['ticket-comments', ticketId],
    queryFn: () => getComments({ ticketId }),
  });

  if (isFetching) return <Loading />;
  if (isError) return <Errored />;

  return (
    <>
      <Header as="h2">Comments</Header>
      <Button onClick={() => setCreateComment(true)}>Add new comment</Button>

      <Comment.Group>
        {comments.map((comment) => (
          <Comment>
            <Comment.Avatar src={comment.acting_user.avatar.thumb_url} />
            <Comment.Content>
              <Comment.Author as="a">{comment.acting_user.name}</Comment.Author>
              <Comment.Metadata>
                <div>{DateTime.fromISO(comment.created_at).toLocal().toRelative()}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.comment}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>

      <TicketCommentCreate
        open={createComment}
        onClose={() => setCreateComment(false)}
        ticketId={ticketId}
        currentStakeholder={currentStakeholder}
        refetchComments={refetch}
      />
    </>
  );
}
