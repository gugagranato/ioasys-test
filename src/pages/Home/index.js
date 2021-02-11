import React, { useEffect } from 'react';
// import { Container } from './styles';
import { useSearchStarwarsHero } from '../../hooks/genericDebounce';


function Home() {


  const { inputText, setInputText, search } = useSearchStarwarsHero();

  useEffect(() => {
    console.log(search.result)
  })

  return (
    <div>
      <input value={inputText} onChange={e => setInputText(e.target.value)} />

    </div>
  )
}

export default Home;