import React from 'react';
import InputArea from './input-area';
import OutputArea from './output-area';
import defaultText from '../assets/default.txt'

export default class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         text: defaultText
      }
   }

   render() {
      const headingStyle = {
         'textAlign': 'center'
      }

      return (
         <div>
            <h1 style={headingStyle}>Markdown Previewer</h1>
            <InputArea defaultText={this.state.text} handleChange={this.handleChange.bind(this)} />
            <OutputArea output={this.state.text} />
         </div>
      )
   }

   handleChange(input) {
      this.setState({ text: input })
   }
}