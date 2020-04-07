import React, { Component } from 'react'
import Child from './Child'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      count: 0,
      items: []
    }

    console.log("I'm a constructor")

  }

  componentWillMount(){
    console.log("Component Will Mount")
  }

  componentDidMount(){
    console.log("component did mount")

    // fetch("https://corona.lmao.ninja/states")
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       isLoaded: true,
    //       items: json
    //     });
    //   });

      setTimeout(() => {
        this.setState({
          isLoaded: true
        })
      }, 0)
    }

    handleClick



    render() {
      console.log("rendered component");
      if (!this.state.isLoaded) {
        return <div>Loading...</div>
      } else {
        return (
          <>
            {/* Lifecycle Methods <br />
          <Child test={4} /> */}
          Loaded Data
            <button onClick={this.handleClick}>Click Me</button>

            <Child val={this.state.count} />

            <ul>
              {
                this.state.items.map((item, index) => {
                  return <li key={index}>{item.state} | {item.cases}</li>
                })
              }
            </ul>
          </>
        )
      }
    }


    


  
    

}

export default App



