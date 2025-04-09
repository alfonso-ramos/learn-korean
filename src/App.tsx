import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Layout from './components/layout/Layout.tsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout  />}>
            <Route index element={<Home  />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
