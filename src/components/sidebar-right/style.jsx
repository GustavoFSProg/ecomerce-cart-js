import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background: #f2f2f2;
  width: 15.2rem;
  height: 99vh;
  margin-right: 4rem;
  border: solid 1px #d9d9d9;
  margin-top: 20px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`
