import { render } from '@testing-library/react'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { StaticRouter } from "react-router-dom/server"

test("Check if navbar is working properly", function () {
    const nav = render(
        <StaticRouter>
            <Provider store={store}>
                <Navbar />
            </Provider>
        </StaticRouter>
    )
    console.log(nav)
    const logo = nav.getByTestId("logo")
    console.log(logo)
    expect(logo.src).toBe("http://localhost/logo.svg")
})