import './App.css'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent title="HELLO TYPESCRIPT" />
        {/* title initially gives an error, because ClassComponent is not expecting to receive any prop! */}
      </header>
    </div>
  )
}

export default App
