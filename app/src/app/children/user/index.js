import React from 'react'
import { StyledUser } from './styles'

const User = ({ data }) => (
  <StyledUser>
    <img
      src={data.owner.profile_pic_url}
      alt={`${data.owner.username} profile`}
    />
    <div>
      <p>
        <strong>{data.owner.username}</strong>
      </p>
      <p>{data.location.name}</p>
    </div>
  </StyledUser>
)

export default User
