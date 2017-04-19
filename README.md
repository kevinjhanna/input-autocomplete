# Input Autocomplete
Tiny react input component with HTML5-like autocomplete.

![input-autocomplete-demo](https://cloud.githubusercontent.com/assets/387015/25046633/e1eaff8a-2108-11e7-8ba8-f66e290f6ecd.gif)


## Why not HTML5 autocomplete?
Because HTML5 autocomplete only show options based on earlier user typed values.

## Features:
- Autocomplete based only on given values.
- No styling. Style it yourself as a regular text input element.
- Tiny abstraction over input element.
- Typescript types.

## Demo and examples
Live demo: [kevinjhanna.github.io/input-autocomplete](https://kevinjhanna.github.io/input-autocomplete/)

## Installation
```
npm install input-autocomplete --save
```

## Usage

### Uncontrolled input
```jsx
  import { InputAutocomplete } from 'input-autocomplete'

  <InputAutocomplete
    type='text'
    autocompleteValues={['john lennon', 'john travolta']}
  />
```

### Controlled input
```jsx
  import { InputAutocomplete } from 'input-autocomplete'

  let state = { 
    name: ''
  }

  const handleOnChange = (ev) => {
    state = {
      name: ev.currentTarget.value
    }
  }

  <InputAutocomplete
    type='text'
    autocompleteValues={['john lennon', 'john travolta']}
    value={state.name}
    onChange={handleOnChange}
  />
```
