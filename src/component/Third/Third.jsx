import { useContext, useRef } from 'react'
import { butContext } from '../First/First'
import style from './Third.module.css'


export function Third() {

    const colorRef = useRef(null)

    const [turn, setTurn] = useContext(butContext)


    const handleClick = () => {
        setTurn(!turn)
    }


    return (
        <div>
            <div className={style.bigDiv}>
                <p className={style.third}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                    Rerum laboriosam in, sint impedit sed tenetur libero repellat.<br />
                    Modi illo, dicta voluptatibus itaque tenetur repellat adipisci,<br />
                    explicabo voluptas ipsa reprehenderit maiores.
                </p>

                <div className={style.smolDiv}>

                    {
                        turn ?
                        (
                            <p>Lite is Turn <br /> On</p>
                        )
                        :
                        (

                            <p>Lite is Turn <br />Off</p>
                        )
                    }
                </div>

                <div className={style.btn}>
                    <button onClick={handleClick}>Turn On/Off</button>
                </div>
            </div>


        </div>
    )
}