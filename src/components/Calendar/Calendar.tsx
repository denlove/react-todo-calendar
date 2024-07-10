import { useState } from 'react'
import ToolBar from '../ToolBar/ToolBar'
import Days from './components/Days/Days'
import Month from './components/Month/Month'
import Weekdays from './components/Weekdays/Weekdays'
import { useGetDate } from './useGetDate'
import styles from './Calendar.module.scss'

const Calendar = () => {
    const { day, currentDate, paddingDayCount, daysInMonth, setToggleMonth } =
        useGetDate()

    return (
        <article className={styles.calendar}>
            <div className={styles.calendar__content}>
                <Month month={currentDate} />
                <Weekdays />
                <Days
                    paddingDayCount={paddingDayCount}
                    daysInMonth={daysInMonth}
                    today={day}
                />
            </div>
            <ToolBar toggle={setToggleMonth} />
        </article>
    )
}

export default Calendar
