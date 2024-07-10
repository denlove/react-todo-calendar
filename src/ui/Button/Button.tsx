import { HTMLProps } from 'react'

interface IButton extends HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'reset' | 'submit'
}

const Button = ({ children, ...props }: IButton) => {
    return <button {...props}>{children}</button>
}

export default Button
