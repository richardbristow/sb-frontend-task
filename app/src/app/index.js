import React from 'react'
import Image from './children/image'
import CommentList from './children/comment_list'
import User from './children/user'
import PostFooter from './children/post_footer'
import { StyledMain } from './styles'

const App = ({ data }) => (
  <StyledMain>
    <div className='image'>
      <Image data={data} />
    </div>
    <div className='text'>
      <User data={data} />
      <hr />
      <CommentList data={data} />
      <PostFooter data={data} />
    </div>
  </StyledMain>
)

export default App
