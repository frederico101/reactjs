// eslint-disable-next-line import/no-anonymous-default-export
//export default function Item({ tarefa, tempo }: { tarefa: string, tempo: string}) { 

export default function Item(props: { tarefa: string, tempo: string}) { 
    const { tarefa, tempo } = props;
    return (
        <li>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}