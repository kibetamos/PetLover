import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
// import { BrowserRouter as Router } from react-router;
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route path="/">
          <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
