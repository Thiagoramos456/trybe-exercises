import { Component } from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends Component {
    render() {
        return (
        <div className="content">
            {conteudos.map((content) => {
                return <div key={content.conteudo}>
                    <h2>{`O conteúdo é: ${content.conteudo}`}</h2>
                    <p>{`Status: ${content.status}`}</p>
                    <p>{`Bloco: ${content.bloco}`}</p>
                </div>
            })}
        </div>
        )
    }
}

export default Content;