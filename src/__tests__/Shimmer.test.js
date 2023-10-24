import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from "@testing-library/react"
import Home from '../pages/Home'
import { Provider } from "react-redux"
import store from "../redux/store"
import { StaticRouter } from "react-router-dom/server"

global.fetch = jest.in(() => {
    return Promise.resolve({
        json: () => { Promise.resolve([{ title: "product" }]) }
    })
})

test("Test if shimmer is loading", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(
        body.getByTestId("search-btn")
    ))

    const input = body.getByTestId('search-input')
    fireEvent.change(input, {
        target: {
            value: "food",
        },
    })
    const searchBtn = body.getByTestId("search-btn")
    fireEvent.click(searchBtn)
    
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer).toBeInTheDocument()

    //fireEvent.click("add-item")
    const items = body.getByTestId('cartitems')
    expect(items.length).toBe("1")

    console.log(body)
})