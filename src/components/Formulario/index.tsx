import React from 'react';
import Botao from '../Botao';
class Formulario extends React.Component{
  
    render() { 
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">Adicione a tarefa</label>
                    <input type="text" name='tarefa' id='tarefa' placeholder='oque estudar'/>
                </div>
                <div>
                    <label htmlFor="tempo">Tempo</label>
                     <input type="time" step="1" id='tempo' name='tempo' min="00:00:00" max="01:30:00" />
                  </div>
                <Botao>
                    Adicionar
                </Botao>
                </form>
        )
    }
}
export default Formulario;