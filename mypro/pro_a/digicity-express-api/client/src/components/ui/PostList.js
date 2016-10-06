import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  componentDidMount() {
    console.log('hello will axios');
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      // console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      // console.log(this.state.posts);
    });
  }
  render() {
    let styles={
      h1:{
        color:'red',
        textAlign:'center'
      },
      content:{
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '800px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      a:{
        textDecoration:'none',
        color:'#fff',
        padding:'5px',
        backgroundColor:'#FF5252',
        borderRadius:'3px',
      },
      link:{
        position:'absolute',
        right:'1.2em',
        bottom:'5px'
      }
    }
    let posts = this.state.posts.map( (item,i) =>(
      <div key={i}>
        <p style={styles.content}>
          {item.title} <br/>
          {item.category}<br/>
          {item.content}
          <Link to={`post/${item._id}`} style={styles.link}>查看</Link>
        </p>

      </div>
    ))
    return(
      <div>
        <div style={{marginTop:'20px',marginLeft:'10px'}}>
         <Link to='/write' style={styles.a}>添加文章</Link>
        </div>
        <h1 style={styles.h1}>Welcome To My Space</h1>
        {posts}
      </div>
    );
  }
}
