import React, { useEffect, useState } from 'react';
import { useSearchCompany } from '../../hooks/genericDebounce';
import searchIcon from '../../assets/images/ic-search-copy-3.svg'
import closeIcon from '../../assets/images/ic-close.svg'
import logo from '../../assets/images/logo-nav.png'

import { Container, SearchContainer, InputSearch, ContainerCard, CompanyName, ResumeCardContainer, ResumeCardContainerInitial, CompanyTypeName, CompanyPlace } from './styles';
import { Link } from 'react-router-dom';

function Home() {
  const [initialState, setInitialState] = useState(true)


  const { inputText, setInputText, search } = useSearchCompany();

  const { result } = search;

  useEffect(() => {

    console.log(result)
  })

  const handleClear = () => {
    setInputText('')
  }

  const handleChangeInitialState = () => {
    setInitialState(false)
  }

  const handleDetails = e => {
    console.log(e)
  }

  const headerSearchInitial = (
    <SearchContainer>
      <img src={searchIcon} alt="search icon" />
      <InputSearch value={inputText} onChange={e => setInputText(e.target.value)} placeholder="Pesquisar" />
      <img src={closeIcon} alt="close icon" onClick={handleClear} style={{ cursor: 'pointer' }} />
    </SearchContainer>
  )

  const headerSearch = (
    <Container>
      <SearchContainer style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p></p>
        <img className="logo" src={logo} alt="Ioasys Challenge" />
        <img src={searchIcon} alt="close icon" onClick={handleChangeInitialState} style={{ cursor: 'pointer' }} />
      </SearchContainer>
      <ResumeCardContainerInitial >
        Clique na busca para iniciar.
      </ResumeCardContainerInitial>
    </Container>
  )
  return (
    <Container>
      {!initialState ? (
        headerSearchInitial
      ) : headerSearch}
      {
        result?.enterprises?.map(empresa => (
          <Link key={empresa.id} to={`/detail/${empresa.id}`}>
            <ContainerCard >
              <img src={`https://empresas.ioasys.com.br` + empresa.photo} alt={empresa.enterprise_name} ></img>
              <ResumeCardContainer>
                <CompanyName>{empresa.enterprise_name}</CompanyName>
                <CompanyTypeName>{empresa.enterprise_type.enterprise_type_name}</CompanyTypeName>
                <CompanyPlace>{empresa.country} | {empresa.city}</CompanyPlace>
              </ResumeCardContainer>
            </ContainerCard>
          </Link>
        ))
      }
    </Container >
  )
}

export default Home;
