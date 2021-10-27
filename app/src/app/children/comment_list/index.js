import React from 'react'
import { StyledCommentList } from './styles'
import Comment from './children/comment'

const CommentList = ({ data }) => (
  <StyledCommentList>
    <Comment
      userName={data.owner.username}
      comment={data.edge_media_to_caption.edges[0].node.text}
      caption
    />
    {data.edge_media_to_comment.edges.map((comment) => (
      <Comment
        key={comment.node.id}
        userName={comment.node.owner.username}
        comment={comment.node.text}
        liked={comment.node.viewer_has_liked}
      />
    ))}
  </StyledCommentList>
)

export default CommentList
