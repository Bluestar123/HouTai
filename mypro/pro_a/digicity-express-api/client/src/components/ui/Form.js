import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import Radium from 'radium';


class Form extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let category = this.refs.category.value;
    let content = this.refs.content.value;
    if(title.length == 0 && ){
      alert('请正确输入')
      return;
    }
    this.props.newposts({title,category,content})
  }
  render () {
    let styles={
      form: {
         padding: '20px 40px',
         maxWidth:'800px',
         margin:'0 auto'
       },
       div: {
         marginBottom: '10px'
       },
       label: {
         display: 'block',
         fontSize: '.9em',
         color: 'rgba(0,0,0,.6)',
         paddingBottom: '10px'
       },
       input: {
         width: '100%',
         height: '58px',
         border: '1px solid #ddd',
         borderRadius: '5px',
         fontSize: '2em',
         padding: '10px',
         boxSizing: 'border-box',
         border: '1px solid #00bcd4',
         outline: 'none'
       },
       actions: {
         textAlign: 'center'
       },
       button: {
         width: '120px',
         height: '36px',
         border: 'none',
         backgroundColor: '#ff4081',
         fontSize: '1em',
         color: '#fff',
         display: 'inline-block',
         margin: '20px auto 0',
         borderRadius: '20px',
         ':hover': {
           cursor: 'pointer'
         },
         ':focus': {
           outline: 'none'
         }
       },
       link: {
         display: 'inline-block',
         marginLeft: '15px',
         fontSize: '1em',
         color: '#00bcd4',
         opacity: '.8',
         textDecoration: 'none'
       }
    }
    return(

      <form style={styles.form}　onSubmit={this.handleSubmit.bind(this)}>
         <div style={styles.div}>
           <label style={styles.label}>标题</label>
           <input style={styles.input} key='1' ref='title' />
         </div>
         <div style={styles.div}>
           <label style={styles.label}>类别</label>
           <input style={styles.input} key='2' ref='category' />
         </div>
         <div style={styles.div}>
           <label style={styles.label}>内容</label>
           <textarea style={styles.input} key='3' ref='content' />
         </div>
         <div style={styles.actions}>
           <button type='submit' style={styles.button}>Submit</button>
           <Link to='/' style={styles.link}>取消</Link>
         </div>
       </form>
    )
  }
}


export default Form;
