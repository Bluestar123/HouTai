import React, { Component } from 'react';
import axios from 'axios';


export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  componentWillMount() {
    console.log('hello will axios');
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      console.log(this.state.posts);
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
      }
    }
    let posts = this.state.posts.map( (item,i) => <p style={styles.content} key={i}>{i+10}{item.title}</p>)//数组的时候转换ｍａｐ

    return(
      <div>
        <h1 style={styles.h1}>Welcome To My Space</h1>
        {posts}
      </div>
    );
  }
}
