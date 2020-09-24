import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'



const Formulario = ({guardarCategoria}) => {


    

    const opciones = [

        {value : 'general' , label : 'General'},
        {value : 'business' , label : 'Negocios'},
        {value : 'entertainment' , label : 'Entretenimiento'},
        {value : 'health' , label : 'Salud'},
        {value : 'science' , label : 'Ciencia'},
        {value : 'sports' , label : 'Deporte'},
        {value : 'technology' , label : 'Tecnologia'}
    ]

    //utilizo el custom hook 
    const [categorias , SelectNoticias] = useSelect('general' , opciones)

   
    
  
    

    // onSubmit paso la categoria a App.js 

    const buscarNoticia = e => {

        e.preventDefault();

        guardarCategoria(categorias)
    }


    return (

        
        <div className={`${styles.buscador} row`}>

            <div className="col s12 m8 offset-2  l12 ">


                    <form
                        onSubmit={buscarNoticia}
                    >

                     <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

                       <SelectNoticias/>


                    <div className="input-field col s12">
                        

                        <input 
                                type="submit"
                                className={`${styles.btn_block}  amber darken-1  btn-large `}
                                value="Buscar"

                        />

                    </div>

                    </form>

            </div>
            
        </div>
    )
}

export default Formulario
