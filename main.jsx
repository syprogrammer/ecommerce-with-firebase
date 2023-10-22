import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./src/App"
// console.log(import.meta.)
import { ThemeContextProvider } from "./src/context/themeContext";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { register } from 'swiper/element/bundle';
// register Swiper custom elements


const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(app())
register();
root.render(
    <Provider store={store} >
        <App />
    </Provider>

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
