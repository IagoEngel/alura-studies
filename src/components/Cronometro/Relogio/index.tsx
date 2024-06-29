import React from "react";
import style from './Relogio.module.scss';

interface IProps {
    tempo: number | undefined
}

export function Relogio({ tempo = 0 }: IProps) {
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')


    return (
        <React.Fragment> {/*mesma coisa que <></>*/}
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </React.Fragment>
    )
}