import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import classes from './Blog.module.css';
import './Blog.css';

class Blog extends Component {

  state = {
    auth: false
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/posts/" exact>Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }} exact>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
        {/*<Route path="/" exact render={() => <h1>Home 2</h1>}/>*/}
        <Switch>
          {this.state.auth ? <Route path={"/new-post"} component={NewPost}/> : null}
          <Route path={"/posts"} component={Posts}/>
          <Redirect from="/" to="/posts"/>
        </Switch>
      </div>
    );
  }
}

export default Blog;