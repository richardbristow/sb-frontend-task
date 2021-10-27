import React from 'react'
import LikeButton from '../like_button'
import { StyledPostFooter, StyledMoment } from './styles'

const PostFooter = ({ data }) => (
  <StyledPostFooter>
    <div>
      <p>
        <strong>{`${data.edge_media_preview_like.count.toLocaleString()} likes`}</strong>
      </p>
      <StyledMoment filter={(time) => time.toUpperCase()} fromNow unix>
        {data.taken_at_timestamp}
      </StyledMoment>
    </div>
    <LikeButton liked={data.viewer_has_liked} />
  </StyledPostFooter>
)

export default PostFooter
