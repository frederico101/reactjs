import Item from "./Item";
import style from './Lista.module.scss';

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
      },
        {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
        },{
        tarefa: 'TypeScript',
        tempo: '01:00:00'
        }] 
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li className={ style.item}>
                       <h3>{item.tarefa}</h3>
                       <span>{item.tempo}</span>
                    </li>
                    // <Item
                        
                    //     // tarefa={{ item.tarefa }}
                    //     // tempo={{item.tempo}}
                    //     {...item} // o uso do spred é bom, mas em caso de um objeto muito grande não é bom
                    // />
                ) )}
            </ul>
        </aside>
    )
}

export default Lista;