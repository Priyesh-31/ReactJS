import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function Myapp() {
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement = {
//     types: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google</a>
)

const anotherUser = "| Priyesh Raj |"
const reactElement = React.createElement(
  'a', // type of element
  {href: 'https://google.com', target: '_blank'}, // props attributes
  'Click me to visit google', // children to be displayed
  anotherUser 
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
