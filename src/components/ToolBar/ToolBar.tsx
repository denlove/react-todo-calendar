import Button from '../../ui/Button/Button'
import styles from './ToolBar.module.scss'

interface IToolBar {
    toggle: React.Dispatch<React.SetStateAction<number>>
}

const ToolBar = ({ toggle }: IToolBar) => {
    return (
        <menu className={styles.menu}>
            <li className={styles.menu__item}>
                <Button
                    onClick={() => {
                        toggle(pre => --pre)
                    }}
                    className={styles.menu__tool}
                >{`< Prev`}</Button>
            </li>
            <li className={styles.menu__item}>
                <Button
                    onClick={() => toggle(pre => ++pre)}
                    className={styles.menu__tool}
                >{`Next >`}</Button>
            </li>
        </menu>
    )
}

export default ToolBar
