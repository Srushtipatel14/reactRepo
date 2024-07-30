import React from "react";
import ReactDOM from "react-dom/client"

export const App=()=>{
    return (
       <>
         <div>
            <h1>This is Heading Tag H1</h1>
            <h2>This is Heading Tag H2</h2>
            <h3>This is Heading Tag H3</h3>
            <h4>This is Heading Tag H4</h4>
            <h5>This is Heading Tag H5</h5>
            <h6>This is Heading Tag H6</h6>
        </div>
        <div>
            <h1>This is Heading Tag H1</h1>
            <h2>This is Heading Tag H2</h2>
            <h3>This is Heading Tag H3</h3>
            <h4>This is Heading Tag H4</h4>
            <h5>This is Heading Tag H5</h5>
            <h6>This is Heading Tag H6</h6>
        </div>
        <div>
            <h1>This is Heading Tag H1</h1>
            <h2>This is Heading Tag H2</h2>
            <h3>This is Heading Tag H3</h3>
            <h4>This is Heading Tag H4</h4>
            <h5>This is Heading Tag H5</h5>
            <h6>This is Heading Tag H6</h6>
        </div>
        <div>
            <h1>This is Heading Tag H1</h1>
            <h2>This is Heading Tag H2</h2>
            <h3>This is Heading Tag H3</h3>
            <h4>This is Heading Tag H4</h4>
            <h5>This is Heading Tag H5</h5>
            <h6>This is Heading Tag H6</h6>
        </div>
       </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);