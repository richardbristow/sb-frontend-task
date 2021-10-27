import styled from 'styled-components/macro'

const StyledComment = styled.div`
  margin-bottom: 5px;
  display: flex;

  .likeButton {
    display: flex;
    align-items: center;
  }

  .commentText {
    flex-grow: 1;
    padding-right: 10px;
  }
`

export { StyledComment }
