import React from 'react';
import marked from 'marked';

export default class OutputArea extends React.Component {

   render() {

      const outputStyle = {
         position: 'relative',
         marginLeft: '750px',
         padding: '50px'
      }

      let output = marked(this.props.output);
      return (
         <div style={outputStyle} dangerouslySetInnerHTML={{ __html: output }} />
      );
   }
}