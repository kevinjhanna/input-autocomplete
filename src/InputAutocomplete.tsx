import * as React from 'react'

const update = (written: string, completed: string) => {
  return (prevState: State, props: Props) : State => {
    if (props.value) {
      return prevState
    }

    return {
      written: written,
      completed: completed
    }
  }
}

interface State {
  written: string
  completed: string
}

interface Props extends React.HTMLProps<HTMLInputElement> {
  autocompleteValues: string[]
}

class InputAutocomplete extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { 
      written: (props.value && String(props.value)) || (props.defaultValue && String(props.defaultValue)) || '',
      completed: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  fireOnChange(ev: React.FormEvent<HTMLInputElement>, changedValue?: string) {
    if (!this.props.onChange) {
      return
    }

    if (changedValue) {
      ev.currentTarget.value = changedValue
    }

    this.props.onChange(ev)
  }

  handleOnChange(ev: React.FormEvent<HTMLInputElement>) {
    const target = ev.currentTarget
    const value = target.value
    const performMatch = value.length > this.state.written.length

    if (!performMatch) {
      this.fireOnChange(ev)
      this.setState(update(value, ''))
      return
    }

    const match = this.props.autocompleteValues.find(phrase => phrase.indexOf(value) == 0)

    if (match) {
      this.setState(update(value, match.replace(value, '')),
      () => {
        target.focus()
        target.setSelectionRange(value.length, match.length)
      })
    } else {
      this.setState(update(value, ''))
    }

    this.fireOnChange(ev, match)
  }

  render() {
    const { autocompleteValues, ...props } = this.props

    return <input
      {...props}
      value={`${this.state.written}${this.state.completed}`}
      onChange={this.handleOnChange}
    />
  }
}

export default InputAutocomplete
