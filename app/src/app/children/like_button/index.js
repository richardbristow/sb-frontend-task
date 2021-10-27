import React, { useState } from 'react'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'
import { StyledLikeButton } from './styles'

const LikeButton = ({ liked, size = 24 }) => {
  const [isLiked, setIsLiked] = useState(liked)

  return (
    <StyledLikeButton onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? <LikedIcon size={size} /> : <UnlikedIcon size={size} />}
    </StyledLikeButton>
  )
}

export default LikeButton
