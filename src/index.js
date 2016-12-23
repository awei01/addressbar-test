import React from 'react'
import ReactDOM from 'react-dom'
import addressbar from 'addressbar'

const Test = () => {
  return  (
    <div>
      <a href='/#/foo'>foo link fires twice</a>
      {' | '}
      <a href='/#/bar'>bar link fires twice</a>
      {' | '}
      <a onClick={() => {
        window.location.hash = '/onClick'
      }}>this works</a>
      {' | '}
      <a href='#' onClick={(e) => {
        e.preventDefault()
        window.location.hash = '/onClick/withHref'
      }}>this also works</a>
      <ol>
        <li>Open up console in browser.</li>
        <li>Click on the links above.</li>
        <li>Note that there are 2 events fired for {'<a href>'} clicks.</li>
      </ol>
    </div>
  )
}

let counter = 0
addressbar.on('change', (event) => {
  counter ++
  console.log('change', counter, event.target.value)
})

ReactDOM.render(
  <Test />,
  document.getElementById('root')
)
