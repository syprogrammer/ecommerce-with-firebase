import {render} from "@testing-library/react"
import Home from '../pages/Home'
import { Provider } from "react-redux"
import store from "../redux/store"
import { StaticRouter } from "react-router-dom/server"

global.fetch = jest.in(()=>{
   return Promise.resolve({
        json:()=>{Promise.resolve([{title:"product"}])}
    })
})

test("Test if shimmer is loading",()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Home/>
            </Provider>
        </StaticRouter>
    )
    console.log(body)
})