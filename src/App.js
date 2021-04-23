import './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'

import { 
  BrowserRouter as Router,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Banner />
  
    </Router>
  );
}

export default App;
