import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//new imports
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

//redux imports here
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { setUser,clearUser, clearSpinner } from "./actions";
import Spinner from "./Spinner";

const store=createStore(rootReducer,composeWithDevTools());

class Root extends React.Component{

  state={
  }

  componentDidMount(){
    console.log(this.props.isLoading);
    console.log("fuckkk");

    this.props.clearSpinner();
    console.log("??? user not logged in ");
    this.props.history.push('/');

  }//end of componentDidMount

  render(){
    return this.props.isLoading ? <Spinner/> : (
          <Switch>
              <Route exact path="/" component={App} />
          </Switch>
    );
  }
}

const mapStateFromProps = state => ({
  isLoading: state.user.isLoading
});

const RootWithAuth=withRouter(connect(mapStateFromProps,{ setUser,clearUser,clearSpinner })(Root));

ReactDOM.render(
  <Provider store={store}>
      <Router>
          <RootWithAuth/>
      </Router>
  </Provider>,

  document.getElementById('root'));

registerServiceWorker();
