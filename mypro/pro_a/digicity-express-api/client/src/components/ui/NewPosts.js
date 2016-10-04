import React, { Component } from 'react';
import Form from './Form';

class NewPost extends Component {
   render() {

     let styles={
       content: {
         width: '100%',
         maxWidth: '600px',
         margin: '30px auto',
         backgroundColor: '#fff',
         borderRadius: '10px',
         boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
       },
       title: {
         fontSize: '1.2em',
         textAlign: 'center',
         paddingTop: '20px'
       }
     }
     return (
       <div>
         <div style={styles.content}>
           <div style={styles.title}>写文章</div>
         </div>
         <Form />
      </div>
     );
   }
 }

 export default NewPost;
