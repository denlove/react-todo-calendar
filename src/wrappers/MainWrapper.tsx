import { IChildParams } from '../types/interfaces'
import styles from './styles.module.scss'

const MainWrapper = ({ children }: IChildParams) => {
    return <div className={styles['main-wrapper']}>{children}</div>
}

export default MainWrapper
