import React, { useEffect } from 'react';
import { useSearchCompany } from '../../hooks/genericDebounce';
import searchIcon from '../../assets/images/ic-search-copy-3.svg'
import closeIcon from '../../assets/images/ic-close.svg'
import { Container, SearchContainer, InputSearch, ContainerCard, CompanyName, ResumeCardContainer, CompanyTypeName, CompanyPlace } from './styles';

function Home() {


  const { inputText, setInputText, search } = useSearchCompany();

  const { result } = search;

  useEffect(() => {

    console.log(result)
  })

  const handleClear = () => {
    console.log('clear')
  }
  return (
    <Container>
      <SearchContainer>
        <img src={searchIcon} alt="search icon" />
        <InputSearch value={inputText} onChange={e => setInputText(e.target.value)} />
        <img src={closeIcon} alt="close icon" onClick={handleClear} style={{ cursor: 'pointer' }} />
      </SearchContainer>
      {result?.enterprises?.map(empresa => (
        <ContainerCard key={empresa.id}>
          {/* <div> */}
          <img src={`https://empresas.ioasys.com.br` + empresa.photo} alt={empresa.enterprise_name} ></img>
          <ResumeCardContainer>
            <CompanyName>{empresa.enterprise_name}</CompanyName>
            <CompanyTypeName>{empresa.enterprise_type.enterprise_type_name}</CompanyTypeName>
            <CompanyPlace>{empresa.country} | {empresa.city}</CompanyPlace>
          </ResumeCardContainer>
        </ContainerCard>
      ))}
    </Container>
  )
}

export default Home;
