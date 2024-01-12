

// Custom Components 2

// import React from "react"
// import ReactDOM from "react-dom"
// import Header from "./Header.js";

function PageFunction() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<PageFunction />)

// Custom Components

// function PageFunction() {
//     return (
//         <div>
//             <img src="./react-logo.png"></img>
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>was first released in 2013</li>
//                 <li>was originally created by Jordan Walke</li>
//                 <li>has well over 100k stars on GitHub</li>
//                 <li>is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//          </div>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<PageFunction />)

// Pop Quiz on a Google Doc

// const page = (
//     <div>
//         <img src="./react-logo.png"></img>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>was first released in 2013</li>
//             <li>was originally created by Jordan Walke</li>
//             <li>has well over 100k stars on GitHub</li>
//             <li>is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(page)


// ReactDOM.render(page, document.getElementById('root'))

// const page = (
//     <div>
//         <h1>Awesome webpage in react</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>compose</li>
//             <li>declare</li>
//             <li>hireable skill</li>
//             <li>actively maintained</li>
//         </ol>
//     </div>
// )
// ReactDOM.render(page, document.getElementById('root'))
// object
// document.getElementById('root').append(JSON.stringify(page))

// Why React? Declarative
// 
// JSX
// const navbar = (
//     <nav>
//         <h1>website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// method for React 18
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(navbar)

// ReactDOM.render(navbar, document.getElementById('root'))
//ReactDOM.createRoot(document.getElementById('root')).render(navbar)


// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )
// console.log(page);

// ReactDOM.render(
//     page
//     ,
//     document.getElementById('root')
// )



// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// console.log(h1)

// // <h1 class="header">

// document.getElementById('root').append(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element);

// 1st what do i want to render to the screen
// 2nd, where do i want to render it

// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Maincontent />
//     </div>,
//     document.getElementById('root')
// )

// rendering dom and typing in an h1 tag then grabbing a root id to insert
// ReactDOM.render(<h1>Hello, Everyone!</h1>, document.getElementById('root'))