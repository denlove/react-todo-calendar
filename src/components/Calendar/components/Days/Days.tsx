import ListItem from '../../../../ui/ListItem/ListItem'
import styles from './Days.module.scss'

interface IDays {
    paddingDayCount: number
    daysInMonth: number
    today: number
}

const Days = ({ paddingDayCount, daysInMonth, today }: IDays) => {
    const padDays = Array(paddingDayCount).fill(0)
    const ordDays = Array(daysInMonth).fill(0)

    return (
        <div className={styles.days}>
            <ol className={styles.days__list}>
                {padDays.map((_, ind) => (
                    <ListItem key={ind} className={styles.days__days}>
                        {''}
                    </ListItem>
                ))}
                {ordDays.map((_, ind) => (
                    <ListItem
                        key={ind}
                        className={`${styles.days__days} ${ind + 1 === today && styles.days__days_today}`}
                    >
                        {ind + 1}
                    </ListItem>
                ))}
            </ol>
        </div>
    )
}

export default Days
