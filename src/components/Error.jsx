import { useRouteError } from "react-router-dom"

export default function Error( ){
    const err = useRouteError()
    console.log(err)
    return(
      <div>
        <h1>Oops!!</h1>
        <h2>Something went wrong</h2>
        <h2>{err.status + " : " + err.statusText}</h2>
      </div>
    )
}