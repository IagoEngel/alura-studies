import React from "react";
import style from './Botao.module.scss'

interface IProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Botao({ onClick, type, children }: IProps) {
    return (
        <button className={style.botao} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

// class Botao extends React.Component<any, { type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {

//     render() {
//         const { type = "button", onClick } = this.props

//         return (
//             <button className={style.botao} type={type} onClick={onClick}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }

export default Botao;