import React from 'react';
import InputArea from './input-area';
import OutputArea from './output-area';
import defaultText from '../assets/default.txt'

export default class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         defaultText: defaultText
      }
   }

   render() {
      const headingStyle = {
         'text-align': 'center'
      }

      return (
         <div>
            <h1 style={headingStyle}>Markdown Previewer</h1>
            <InputArea defaultText={this.state.defaultText} />
            <OutputArea />
         </div>
      )
   }
}