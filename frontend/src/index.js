// const btn = document.getElementById('click')
// btn.addEventListener('click', () => alert('!!!! - You have clicked this button!!!'))

import React from 'react'
import ReactDOM  from 'react-dom'

const App = () => {
    // const [count, setCount] = React.useState(0)
    // const onClick = () => setCount(c => c + 1)
    // return React.createElement('div', null,
    //   React.createElement('h1', null, 'The count is ' + count),
    //   React.createElement('button', { onClick: onClick }, 'Count'),
    // )

    const [count, setCount] = React.useState(0)
    const onClick = () => setCount(c => c + 1)
    return (
        <div>
        <h1>The count is {count}</h1>
        <button onClick={onClick}>Count</button>
        </div>
    )
}

const root = document.getElementById('app')
ReactDOM.render(
<App />, 
root)