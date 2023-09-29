import React from 'react'
import ReactDOM from 'react-dom/client'

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


const heading1 = React.createElement(
    "h1",
    {
        className: "h1heading",
        key: "h1heading"
    },
    "Namaste Everyone"
);
const heading2 = React.createElement(
    "h2",
    {
        className: "h2heading",
        key: "h2heading"
    },
    "hello Everyone"
);

const div = React.createElement(
    "div",
    {
        className: "container",
    },
    [heading1, heading2]
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);