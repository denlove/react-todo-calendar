import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../utils/routes'
import MainWrapper from '../../wrappers/MainWrapper'
import styles from './styles.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <MainWrapper>
                <nav className={styles['nav-bar']}>
                    <ul className={styles['nav-bar__list']}>
                        <li className={styles['nav-bar__item']}>
                            <Link to={HOME_ROUTE}>Home</Link>
                        </li>
                    </ul>
                </nav>
            </MainWrapper>
        </header>
    )
}

export default Header
