import Calendar from '../../components/Calendar/Calendar'
import Title from '../../components/Title/Title'
import styles from './CalendarBlock.module.scss'

const CalendarBlock = () => {
    return (
        <main className={styles.main}>
            <Title />
            <Calendar />
        </main>
    )
}

export default CalendarBlock
