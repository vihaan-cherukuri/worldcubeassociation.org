import React from 'react';
import ConfirmProvider from '../../lib/providers/ConfirmProvider';
import WCAQueryClientProvider from '../../lib/providers/WCAQueryClientProvider';
import PostForm from './PostForm';

export default function Wrapper({
  allTags, post,
}) {
  return (
    <WCAQueryClientProvider>
      <ConfirmProvider>
        <PostForm post={post} allTags={allTags} header="Edit Post" />
      </ConfirmProvider>
    </WCAQueryClientProvider>
  );
}
