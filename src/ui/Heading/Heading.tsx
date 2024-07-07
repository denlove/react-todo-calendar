import React from 'react'
import { HeadingsType } from '../../types/types'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    role: HeadingsType
}

const Heading = ({ id, className, children, role = 'p' }: HeadingProps) => {
    const Head = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
        React.createElement(role, props, children)

    return (
        <Head id={id} className={className}>
            {children}
        </Head>
    )
}

export default Heading
