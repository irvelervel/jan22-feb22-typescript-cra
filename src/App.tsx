import './App.css'
// import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassComponent title="HELLO TYPESCRIPT" subTitle="subtitle element" />
        <ClassComponent title="HELLO TYPESCRIPT" /> */}
        {/* title initially gives an error, because ClassComponent is not expecting to receive any prop! */}
        <FunctionalComponent title="HELLO TYPESCRIPT" subTitle="Subtitle!" />
      </header>
    </div>
  )
}

export default App
