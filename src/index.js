import React from "react";
import ReactDOM from "react-dom/client";

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(rootElement)

const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting() {
    return <h1>Hola mundo</h1>
}

root.render(<h1>Hola mundo!</h1>)