import { Component } from 'react'

// if you want to pass a prop into a component, you need to specify how the props object is going to look like,
// because by default the props object is {}

// so, let's define the props object in ClassComponent!
// let's write an interface!

// the interface looks good! how can we tell ClassComponent to use it for its props?

interface ClassComponentProps {
  title: string
}

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

export default ClassComponent

// Array<string>
// interface MyInterface<T> {
//     area: T
// }
