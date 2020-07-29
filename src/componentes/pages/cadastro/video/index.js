import React from 'react';
import PageDefault from '../../../pageDefault';
import { Link } from 'react-router-dom';

const CadastroVideo = () => {
    return(
        <PageDefault>
           <h1>Cadastre o Seu vídeo</h1>

           <Link to="/cadastro/categoria">
                Cadastrar Categoria
           </Link>
        </PageDefault>
    )
  }

export default CadastroVideo;  
