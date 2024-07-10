import { Outlet } from 'react-router-dom'
import Footer from './models/Footer'
import Header from './models/Header'
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
