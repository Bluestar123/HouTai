import React, { PropTypes } from 'react';
import { Route,browserHistory,Router,IndexRoute} from 'react-router';
import App from './components/ui/App';
import PostList from './components/ui/PostList';
import NewPosts from './components/ui/NewPosts';
import ShowPost from './components/ui/ShowPost';


class Routeq extends React.Component {
  render () {
    return(

        <Router history={browserHistory}>
          <Route path = '/' component={App}>
            <IndexRoute component={PostList}/>
            <Route path='/write' component = {NewPosts}/>
            <Route path='/post/:id' component = {ShowPost}/>
          </Route>
        </Router>

    )
  }
}

export default Routeq;
