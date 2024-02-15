import './App.css'
import MarlerTable from './components/MarlerTable'
import Header from './components/Header'

import data from './sample_table_data.json';

function App() {
  return (
    <>
      <Header />
      <MarlerTable data={data} />
    </>
  )
}

export default App
