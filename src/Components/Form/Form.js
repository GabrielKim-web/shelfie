import React, {Component} from 'react';

class Form extends Component {
   constructor() {
      super();

      this.state = {
         urlInput: '',
         productInput: '',
         priceInput: ''
      };
   }

   handleUrl(value) {
      this.setState({urlInput: value});
   }
   handleProduct(value) {
      this.setState({productInput: value});
   }
   handlePrice(value) {
      console.log(value);
      if (isNaN(parseInt(value)) === false) {
         this.setState({priceInput: value});
      }
   }
   resetState() {
      this.setState({urlInput: '', productInput: '', priceInput: ''})
   }

   render() {
      return(
         <div id="Form">
            <h1>Form</h1>
            <input value={this.state.urlInput} placeholder="URL" onChange={e => this.handleUrl(e.target.value)}/>
            <input value={this.state.productInput} placeholder="Product Name" onChange={e => this.handleProduct(e.target.value)}/>
            <input value={this.state.priceInput} placeholder="Price" onChange={e => this.handlePrice(e.target.value)}/>
            <button onClick={() => this.resetState()}>Cancel</button>
         </div>
      )
   }
}

export default Form;