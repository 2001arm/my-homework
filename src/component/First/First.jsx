import { createContext, useEffect, useState } from "react";
import { Second } from "../Second/Second";
import style from './First.module.css'

export const butContext = createContext()


export function First() {
    
    return (
        <div>
            <div className={style.bigDiv}>
                <p className={style.first}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Rerum laboriosam in, sint impedit sed tenetur libero repellat.<br />
                    Modi illo, dicta voluptatibus itaque tenetur repellat adipisci,<br />
                    explicabo voluptas ipsa reprehenderit maiores.
                </p>
            </div>
            <Second />
        </div>
        
        )
    }
    
    export const ButProvider = ({ children }) => {
        const [turn, setTurn] = useState(false)
        return (
        <butContext.Provider value={[turn, setTurn]}>{children}</butContext.Provider>
    )
}
