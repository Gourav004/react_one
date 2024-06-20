// const heading = document.createElement("h1");
// const root = document.querySelector("#container");

// heading.innerHTML = "HEllo WOrld in jS";
// root.appendChild(heading);

// <!-- React Code  --!>
// const heading = React.createElement("h1",
//     {
//     id: "heading",
//     className:"he1"
// },"Hello boiii");

//creating a nested html tags/elements

// let parent = React.createElement("div" , {
//     id: "parent"
// } , React.createElement("div" , {
//     id:"child"
// }, React.createElement("h1" , {} , "I am a good boy")));
// =>
    // <div id="parent">
    //         <div id="child">
    //             <h1>I am a good boy</h1>
    //         </div>
    // </div>

    let parent = React.createElement("div" , {
        id: "parent"
    }, [React.createElement("h1",{},"H1 tag"), 
        React.createElement("h2",{},"H2 tag")]
    ); //creating more than 1 children.

// console.log(heading); //object

const root = ReactDOM.createRoot(document.querySelector("#cont"));
// console.log(root);
// root.render(heading);
root.render(parent);