import MainWrapper from '../../wrappers/MainWrapper'
import styles from './styles.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <MainWrapper>
                <p className={styles.footer__text}>Footer</p>
            </MainWrapper>
        </footer>
    )
}

export default Footer
