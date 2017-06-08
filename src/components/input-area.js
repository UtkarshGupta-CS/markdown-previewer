import React from 'react';

export default class InputArea extends React.Component {

   constructor(props) {
      super(props)
   }

   render() {
      return (
         <textarea cols="80" rows="50" >{this.props.defaultText}</textarea>
      )
   }
}