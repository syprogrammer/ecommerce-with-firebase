import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./src/App";
import dotenv from "dotenv";
import { ThemeContextProvider } from "./src/context/themeContext";
const result = dotenv.config({ path: "./.env" });
console.log(process.env.PRODUCT_URL)
// export const { PRODUCT_URL } = result.parsed;
console.log(result)

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(app())
root.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>

)



/*
HMR Hot module replacement
File watcher algorithm - written in c++
Bundling
Minify
Cleaning our conosle - babel
Dev and production build
Image optimization
caching while development
compression
compatabile with older version of browser
Https on dev
port Number
Consistent Hashing algorithm uses to cache thing and do all the bundling
Zero config


Transitive dependencies - depenedency of dependency

*/

//component composition using another components inside components
