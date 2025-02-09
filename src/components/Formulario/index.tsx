import React, { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import { ITarefa } from "../../types/tarefas";
import { v4 as uuidV4 } from 'uuid';

interface IProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: IProps) {
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00")

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidV4()
                }
            ]
        );

        setTarefa("")
        setTempo("00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa} >
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao type="submit" >Adicionar</Botao>
        </form>
    )
}

// class Formulario extends React.Component<{
//     setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
// }> {
//     state = {
//         tarefa: "",
//         tempo: "00:00"
//     };

//     adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
//         evento.preventDefault();
//         this.props.setTarefas(tarefasAntigas =>
//             [
//                 ...tarefasAntigas,
//                 {
//                     ...this.state,
//                     selecionado: false,
//                     completado: false,
//                     id: uuidV4()
//                 }
//             ]
//         );

//         this.setState({
//             tarefa: "",
//             tempo: "00:00"
//         });
//     }

//     render() {
//         return (
//             <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)} >
//                 <div className={style.inputContainer}>
//                     <label htmlFor="tarefa">
//                         Adicione um novo estudo
//                     </label>
//                     <input
//                         type="text"
//                         name="tarefa"
//                         id="tarefa"
//                         value={this.state.tarefa}
//                         onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
//                         placeholder="O que você quer estudar?"
//                         required
//                     />
//                 </div>
//                 <div className={style.inputContainer}>
//                     <label htmlFor="tempo">
//                         Tempo
//                     </label>
//                     <input
//                         type="time"
//                         step="1"
//                         name="tempo"
//                         value={this.state.tempo}
//                         onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
//                         id="tempo"
//                         min="00:00:00"
//                         max="01:30:00"
//                         required
//                     />
//                 </div>
//                 <Botao type="submit" >Adicionar</Botao>
//             </form>
//         )
//     }
// }

export default Formulario;