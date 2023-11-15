import './App.scss';
import Layout from './components/layout';
import { MOCK_DATA } from './mock';

function App() {
  const { nikitaOsaulenko } = MOCK_DATA;
  
  return (
    <div className="App">
       <Layout mockData={nikitaOsaulenko} />
    </div>
  )
}

export default App
