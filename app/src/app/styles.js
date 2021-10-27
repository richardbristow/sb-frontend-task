import styled from 'styled-components/macro'

const StyledMain = styled.main`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  max-width: 935px;
  margin: 16px auto;
  width: calc(100% - 40px);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  font-size: 13px;
  max-height: 500px;

  @media screen and (max-width: 764px) {
    flex-flow: column nowrap;
    max-height: 100%;
  }

  .image {
    display: flex;
    order: 1;
    flex: 1 0 60%;
    max-height: inherit;
    align-self: center;
    justify-self: center;
  }

  .text {
    order: 2;
    flex: 1 0 40%;
    align-self: flex-start;
    padding: 10px;
    display: flex;
    flex-direction: column;
    max-height: inherit;
  }

  hr {
    border-top: 1px solid #f0f0f0;
    width: 100%;
  }
`

export { StyledMain }
