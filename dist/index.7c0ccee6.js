const h1 = React.createElement("h1", {
    key: "1"
}, "This is Heading Tag H1");
const h2 = React.createElement("h2", {
    key: "2"
}, "This is Heading Tag H2");
const div = React.createElement("div", {}, [
    h1,
    h2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

//# sourceMappingURL=index.7c0ccee6.js.map
