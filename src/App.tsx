import { Outlet } from 'react-router-dom'
import Footer from './modules/Footer'
import Header from './modules/Header'
import MainWrapper from './wrappers/MainWrapper'

const App = () => {
    return (
        <>
            <Header />
            <MainWrapper>
                <Outlet />
            </MainWrapper>
            <Footer />
        </>
    )
}

export default App
