import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../types/tarefas';

function Lista({ tarefas }: { tarefas: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => ( // Colocar () quer dizer que voce já vai retornar (retorna um código JSX). E {} quer dizer que vc vai ter um escopo (sendo necessário abrir '()' novamente para declarar o código JSX)
                    <Item
                        key={index}
                        {...item}
                    // tarefa={item.tarefa}
                    // tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;