import { Third } from "../Third/Third";
import style from './Second.module.css'


export function Second() {
    return (
        <div>
            <div className={style.bigDiv}>
                <p className={style.second}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                    Rerum laboriosam in, sint impedit sed tenetur libero repellat.<br />
                    Modi illo, dicta voluptatibus itaque tenetur repellat adipisci,<br />
                    explicabo voluptas ipsa reprehenderit maiores.
                </p>
            </div>
            <Third />
        </div>
    )
}