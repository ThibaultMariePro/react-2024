
const title = 'React n00BZ!'
const style = { color: 'red' }
const showTitle = true
const todos = ['Learn React', 'Learn Redux', 'Learn React Router']

const handleClick = (e) => {
  alert('YO!')
  console.table(e)
}


function App() {
  return <>
    <Title color="blue" id="customID" className="customCLass">MY CUSTOM CHILDREN TITULO</Title>
    <p style={style}>Este é um parágrafo.</p>
    <button onClick={handleClick} >CLICK !</button>
    <ul>
      {todos.map((todo, index) => <li key={index}>{index} - {todo}</li>)}
    </ul>
  </>  
}

function Title({color, children, hidden, ...props}) {
  if(hidden){return null}

  return <>
  {showTitle? <h1 style={{color:color}} {...props} >OLA! {title} {children} </h1> : <h1> -- </h1>}
  </>
}

export default App

