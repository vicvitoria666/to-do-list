import React, { Component } from "react";

class App extends Component {
  state = {
    tarefa: "",
    tarefaList: []
  };

  add = (event) => {
    if(this.state.tarefa != "")
    this.setState({
      tarefa: '',
      tarefaList: this.state.tarefaList.concat({
        tarefa: this.state.tarefa,
        id: Date.now()
      })
  }) 
  event.preventDefault()
  };

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

remove = (id) => {
  this.setState({
   tarefaList: this.state.tarefaList.filter( item => { return item.id != id} )
  })
}


  render() {
    return (
      <form onSubmit={this.add}>
        <input onChange={this.handleChange} value={this.state.tarefa} />
        <button onClick={this.add}>add</button>
        <ul>
          {this.state.tarefaList.map((item) => (
            <li>{item.tarefa} <button onClick={()=>{this.remove(item.id)}}>❌</button> </li>
          ))}
        </ul>
      </form>
    );
  }
}

export default App;

