import React from 'react'
import { StyledComment } from './styles'
import { tagHighlight } from './helpers'
import LikeButton from '../../../like_button'

const Comment = ({ userName, comment, caption, liked }) => {
  const { firstPart, tagArray } = tagHighlight(comment)

  return (
    <StyledComment>
      <div className='commentText'>
        <span>
          <strong>{userName}</strong>{' '}
        </span>
        {tagArray.length > 0
          ? (
            <span>
              {firstPart}
              {tagArray.map((tag) => (
                <React.Fragment key={tag}>
                  <a href='#'>{tag}</a>
                  &nbsp;
                </React.Fragment>
              ))}
            </span>
            )
          : (
            <span>{comment}</span>
            )}
      </div>
      {!caption && (
        <div className='likeButton'>
          <LikeButton size='15' liked={liked} />
        </div>
      )}
    </StyledComment>
  )
}

export default Comment
