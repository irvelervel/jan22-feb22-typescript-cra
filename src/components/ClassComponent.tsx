import { Component } from 'react'

// if you want to pass a prop into a component, you need to specify how the props object is going to look like,
// because by default the props object is {}

// so, let's define the props object in ClassComponent!
// let's write an interface!

// the interface looks good! how can we tell ClassComponent to use it for its props?

interface ClassComponentProps {
  title: string
  subTitle?: string
}

interface ClassComponentState {
  counter: number
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    counter: 0,
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h4>{this.props.subTitle?.toUpperCase()}</h4>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <p>{this.state.counter}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </div>
    )
  }
}

export default ClassComponent

// Array<string>
// interface MyInterface<T> {
//     area: T
// }
