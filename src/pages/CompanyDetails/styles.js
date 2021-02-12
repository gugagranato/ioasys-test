import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  background: #ee4c77;
  padding: 60px 30px 30px ;
  display: flex;
  align-items: center;
  &.logo{
      @media (max-width: 350px) {
      width: 100px
    }
  }
`
export const TitleCompany = styled.h1`
  font-size: 28px;
  color: white;
  margin-left: 14px;
`

export const InputSearch = styled.input`
border: solid 0;
border-bottom: 1px solid white;
background: transparent;
width: 100%;
margin: 5;
color: white;
font-size: 2rem;
padding: 2px;
`
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  background: #FFF;
  padding: 1.7rem 1.9rem;
  display: flex;
  min-height: 100vh;
  cursor: pointer;
  > img {
    width: 85%;
  }
  @media (max-width: 810px) {
    flex-direction: column;
    margin: 10px;
  }
  @media (max-width: 410px) {
    margin: 10px;
    padding: 5px;
  }@media (max-width: 290px) {
    padding: 5px;
    margin: 10px;
  }

  & img {
      @media (max-width: 810px) {
      margin-bottom: 20px;
    }
      @media (max-width: 580px) {
      width: 375px;
    }
      @media (max-width: 450px) {
      width: 300px;
    }
      @media (max-width: 350px) {
      width: 262px;
    }
    @media (max-width: 290px) {
      width: 220px;
  }
    @media (max-width: 250px) {
      width: 180px;
  }
    @media (max-width: 210px) {
      width: 120px;
  }
  }

`

export const ResumeCardContainer = styled.div`
margin-left: 2.5rem;
  @media (max-width: 810px) {
    margin-left: 0;
    }
  @media (max-width: 580px) {
    margin-left: 0;
    }
      @media (max-width: 450px) {
    margin-left: 0;

    }
    @media (max-width: 290px) {
    margin-left: 0;
  }

`
export const ResumeCardContainerInitial = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1;
height: 100vh;
font-size: 2rem;
text-align: center;
`
export const CompanyDescription = styled.h1`
margin-top: 30px;
font-size: 1.9rem;
font-weight: 400;
text-align: center;
color: #8d8c8c;
margin-bottom: 10px;
  @media (max-width: 580px) {
      font-size: 24px;
      text-align: center;
      }
        @media (max-width: 450px) {
      font-size: 20px;
        width: 250px;
      text-align: center;

      }
      @media (max-width: 290px) {
        font-size: 18px;
      text-align: center;
        width: 200px;
      }

`
export const CompanyTypeName = styled.h2`
  color: #8d8c8c;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 5px;

    @media (max-width: 580px) {
    font-size: 20px;
      text-align: center;
    }
      @media (max-width: 450px) {
    font-size: 18px;
      width: 250px;
      text-align: center;

    }
    @media (max-width: 290px) {
      font-size: 16px;
      text-align: center;
      width: 200px;
  }
`
export const CompanyPlace = styled.h2`
  color: #8d8c8c;
  font-size: 1.125rem;
  font-weight: 300;
  margin-bottom: 5px;
    @media (max-width: 580px) {
      font-size: 18px;
      text-align: center;
      }
        @media (max-width: 450px) {
      font-size: 16px;
        width: 250px;
      text-align: center;
      }
      @media (max-width: 290px) {
        font-size: 14px;
      text-align: center;
        width: 200px;
    }
`


