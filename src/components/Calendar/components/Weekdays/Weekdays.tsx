import { memo } from 'react'
import ListItem from '../../../../ui/ListItem/ListItem'
import { WEEK_DAYS } from '../../../../utils/mock'
import style from './Weekdays.module.scss'

const Weekdays = memo(function Weekdays() {
    return (
        <div className={style.weekdays}>
            <ol className={style.weekdays__list}>
                {WEEK_DAYS.map(el => (
                    <ListItem className={style.weekdays__item} key={el.id}>
                        {el.short}
                    </ListItem>
                ))}
            </ol>
        </div>
    )
})

export default Weekdays
