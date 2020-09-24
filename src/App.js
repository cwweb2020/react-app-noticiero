import React ,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoDeNoticias from './components/ListadoDeNoticias';



// Api :    f01c276c30a44fb0914e1fa5e3ad6878



function App() {


//States

// * del App.js
const [categoria , guardarCategoria] = useState('')
// State de Respuesta de Api
const [noticias , guardarNoticias] = useState([])

//Utilizo el use effect para hacer consulta Api Rest

useEffect(()=>{

  const consultarApi = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=f01c276c30a44fb0914e1fa5e3ad6878`
    const respuesta = await fetch(url)
    const noticias = await respuesta.json()


    guardarNoticias(noticias.articles)

    

  }

  consultarApi();



},[categoria])




  return (
    <Fragment>
        <Header
          titulo="Buscador de Noticias"
        />
        <div style={{margin:"0 auto"}} className="container white">
          <Formulario
          guardarCategoria={guardarCategoria}
          />

          <ListadoDeNoticias
              noticias={noticias}
          />
        </div>
    </Fragment>
  );
}

export default App;
