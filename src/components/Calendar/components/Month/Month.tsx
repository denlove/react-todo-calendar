import { MonthType } from '../../../../types/types'
import style from './Month.module.scss'

interface IMonth {
    month: string
}

const Month = ({ month }: IMonth) => {
    return (
        <div className={style.month}>
            <span className={style.month__name}>{month}</span>
        </div>
    )
}

export default Month
