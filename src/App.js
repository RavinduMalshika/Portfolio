import '@popperjs/core/';
import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Home />
  );
}

export default App;
