import React from 'react';

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
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => ( // Colocar () quer dizer que voce já vai retornar (retorna um código JSX). E {} quer dizer que vc vai ter um escopo (sendo necessário abrir '()' novamente para declarar o código JSX)
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;