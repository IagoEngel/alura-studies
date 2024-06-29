import React from 'react';
import style from './Lista.module.scss';
import Item from './Item';

function Lista() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00',
        },
        {
            tarefa: 'Javascript',
            tempo: '01:00:00',
        },
        {
            tarefa: 'Typescript',
            tempo: '03:00:00',
        }
    ];

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