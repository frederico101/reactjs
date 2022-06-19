import Item  from "./Item";

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
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        // tarefa={{ item.tarefa }}
                        // tempo={{item.tempo}}
                        {...item} // o uso do spred é bom, mas em caso de um objeto muito grande não é bom
                    />
                ) )}
            </ul>
        </aside>
    )
}

export default Lista;