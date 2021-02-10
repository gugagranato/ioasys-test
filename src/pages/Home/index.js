import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthProvider';
// import { Container } from './styles';

function Home() {
  const { data } = useAuth();

  const { token, uid, client } = data;
  useEffect(() => {
    fetch('https://empresas.ioasys.com.br/api/v1/enterprises/1', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'access-token': token,
        'uid': uid,
        'client': client
      }
    }).then(e => e.json()
      .then(ev => console.log(ev))
    )
  })


  return (
    <div>
      <h1 style={{
        fontFamily: "Roboto-Bold"
      }}>Home</h1>
    </div>
  )
}

export default Home;