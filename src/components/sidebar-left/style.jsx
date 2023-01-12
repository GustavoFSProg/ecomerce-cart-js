import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #f2f2f2;
  width: 15.2rem;
  height: 99vh;
  border: solid 1px #d9d9d9;
  margin-left: 4rem;
  margin-top: 21px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`
export const Button = styled.button`
  border-radius: 8px;
  margin-bottom: 5px;
  border: 1px solid #0052cc;
  height: 2.6rem;
  width: 100%;
  color: #0052cc;
  font-family: Roboto;
  margin-top: 21px;
  transition: ease 0.6s;
  cursor: pointer;

  &:hover {
    background: #0052cc;
    color: white;
  }
`
export const ButtonDois = styled.button`
  border-radius: 8px;
  margin-bottom: 10px;
  border: none;
  height: 2.6rem;
  width: 100%;
  color: gray;
  font-family: Roboto;
  font-size: 17px;
  margin-top: 1px;
  transition: ease 0.6s;
  cursor: pointer;

  &:hover {
    background: gray;
    color: white;
  }
`

export const DivLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  /* background: green; */
  padding-left: 13px;
  margin-top: 20px;
`
