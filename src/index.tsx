import ReactDOM from 'react-dom/client'
import RootProvider from './lib/RootProvider'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RootProvider />)
