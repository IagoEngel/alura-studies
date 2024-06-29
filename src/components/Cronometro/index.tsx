import Botao from "../Botao";
import { Relogio } from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface IProps {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: IProps) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]) // segundo parâmetro são as dependencias q vão ser 'vigiadas'. Sempre que elas mudarem, useEffect vai executar o primeiro parametro

    function regressiva(contador: number = 0) {

        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronônometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => { regressiva(tempo) }}>
                Começar
            </Botao>
        </div>
    )
}