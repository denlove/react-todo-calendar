import { useEffect, useState } from 'react'
import { WEEK_DAYS } from '../../utils/mock'

export const useGetDate = () => {
    const [toggleMonth, setToggleMonth] = useState(0)

    const dt = new Date()
    dt.setMonth(new Date().getMonth() + toggleMonth)
    const day = !toggleMonth ? dt.getDate() : 0
    const month = dt.getMonth()
    const year = dt.getFullYear()

    const currentDate = dt.toLocaleDateString('en-ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const firstMonthWeekday = new Date(year, month, 1).toLocaleDateString(
        'en-ru',
        {
            weekday: 'long',
        },
    )

    const paddingDayCount = WEEK_DAYS.find(el => el.name === firstMonthWeekday)
        ?.id as number

    const daysInMonth = new Date(year, month + 1, 0).getDate() as number

    return { day, currentDate, paddingDayCount, daysInMonth, setToggleMonth }
}
