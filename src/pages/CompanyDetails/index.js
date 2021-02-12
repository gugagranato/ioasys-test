import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouteMatch } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { Container, SearchContainer, ContainerCard, CompanyDescription, ResumeCardContainer, TitleCompany } from './styles';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

function CompanyDetails() {
  const { params } = useRouteMatch();
  const { data } = useAuth();
  const [detailCompany, setDetailCompany] = useState();
  const { goBack } = useHistory()

  useEffect(() => {
    api.get(`enterprises/${params.companyDetail}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'access-token': data.token,
        'uid': data.uid,
        'client': data.client
      }
    }).then(res => {
      setDetailCompany(res.data)
      console.log(res.data)
    })
  }, [data, params])


  return (
    <Container>
      {
        detailCompany?.enterprise ? (
          <>
            <SearchContainer>
              <AiOutlineArrowLeft color="white" size={28} onClick={goBack} style={{ cursor: 'pointer' }} />
              <TitleCompany>{detailCompany.enterprise.enterprise_name}</TitleCompany>
            </SearchContainer>
            <ContainerCard >
              <img src={`https://empresas.ioasys.com.br` + detailCompany.enterprise.photo} alt={detailCompany.enterprise.enterprise_name} />
              <ResumeCardContainer>
                <CompanyDescription>{detailCompany.enterprise.description}</CompanyDescription>
              </ResumeCardContainer>
            </ContainerCard>
          </>
        ) : <Loader
            type="TailSpin"
            color="#57bbbc"
            height='8.25rem'
            width='8.25rem'
            timeout={5000} //3 secs
          />
      }
    </Container >
  )
}

export default CompanyDetails;
