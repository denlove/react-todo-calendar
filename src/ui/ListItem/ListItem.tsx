import { IChildParams } from '../../types/interfaces'

interface IListItem extends IChildParams {
    className: string
}

const ListItem = ({ className, children }: IListItem) => {
    return <li className={className}>{children}</li>
}

export default ListItem
