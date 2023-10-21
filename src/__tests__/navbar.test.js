import { render } from '@testing-library/react'
import Navbar from '../components/Navbar'

test("Check if navbar is working properly", function () {
    const nav = render(<Navbar/>)
    console.log(nav)

})