import Heading from '../../ui/Heading/Heading'
import styles from './Title.module.scss'

const Title = () => {
    return (
        <Heading role='h1' className={styles['calendar-title']}>
            Calendar
        </Heading>
    )
}

export default Title
