/* <div id ="parent">
    
    <div id = "child1">
        <h1> Iam h1</h1>
    </div>


</div> */



const heading = React.createElement("h1",{id :"head"},"Hello world from React");

const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement("div",{id:"parent"},[

React.createElement("div",{id:"child 1"},[
React.createElement("h1",{},"I am nested h1"),
React.createElement("h2",{},"I am nested h2")
])
,

React.createElement("div",{id:"child 2"},
React.createElement("h1",{},"I am nested h1"),
React.createElement("h2",{},"I am nested h2"))
]);

root.render(parent);