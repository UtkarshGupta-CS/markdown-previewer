import React from 'react';

export default class InputArea extends React.Component {

   render() {
      const inputStyle = {
         position: 'absolute',
         padding: '50px',
      }
      return (
         <form style={inputStyle} onChange={this.handleInput.bind(this)}>
            <textarea cols="75" rows="50" placeholder="Enter the markdown" autoFocus ref="createInput"
               defaultValue={this.props.defaultText}></textarea>
         </form>
      )
   }
   handleInput() {
      event.preventDefault()

      const { createInput } = this.refs;
      const input = createInput.value;
      this.props.handleChange(input);
   }
}