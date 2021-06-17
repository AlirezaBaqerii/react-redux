import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing}/>
          <Route exact path='/product/:productId' component={ProductDetail}/>
          <Route path="#">404</Route>
        </Switch>
      </Router>
    </>
   );
}

export default App;
