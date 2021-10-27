import styled from 'styled-components/macro'
import Moment from 'react-moment'

const StyledPostFooter = styled.div`
  display: flex;

  div {
    flex-grow: 1;

    p {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`

const StyledMoment = styled(Moment)`
  color: grey;
  font-size: 11px;
`

export { StyledPostFooter, StyledMoment }
