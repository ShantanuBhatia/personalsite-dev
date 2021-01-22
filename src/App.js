import { HashRouter, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import FAQ from './components/FAQ';

function App() {
  return (
    <HashRouter basename='/'>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/faq" component={FAQ} />
    </HashRouter>
  );
}

export default App;
