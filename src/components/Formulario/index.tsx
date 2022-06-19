import React from 'react';
import Botao from '../Botao';
import style from './formulario.module.scss';
class Formulario extends React.Component{
  
    render() { 
        return (
            <form className={style.novaTarefa}>
                <div className={style["inputContainer"]}>
                    <label htmlFor="tarefa">Adicione a tarefa</label>
                    <input type="text" name='tarefa' id='tarefa' placeholder='oque estudar'/>
                </div>
                <div className={style.inputContainer}>
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