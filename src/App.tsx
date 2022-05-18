import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormComponent from './components/FormComponent'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <ClassComponent title="HELLO TYPESCRIPT" subTitle="subtitle element" />
        <ClassComponent title="HELLO TYPESCRIPT" /> */}
          {/* title initially gives an error, because ClassComponent is not expecting to receive any prop! */}
          <Routes>
            <Route
              path="/"
              element={
                <FunctionalComponent
                  title="HELLO TYPESCRIPT"
                  subTitle="Subtitle!"
                />
              }
            />
            <Route path="/form" element={<FormComponent />} />
            <Route path="/fetch" element={<FetchComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
