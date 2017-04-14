import * as React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import InputAutocomplete from '../src/InputAutocomplete'

const onChange = (ev: React.FormEvent<HTMLInputElement>) => {
  return action('input onChange')(ev.currentTarget.value)
}

const autocompleteValues = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
]

storiesOf('AutocompleteInput', module)
  .addDecorator(story => (
    <div>
      <p>Try writing utm_source, utm_medium, utm_campaign, utm_term or utm_content</p>
      {story()}
    </div>
  ))
  .add('Uncontrolled input', () => (
    <InputAutocomplete
      onChange={onChange}
      autocompleteValues={autocompleteValues}
      type='text'
    />
  ))
  .add('Controlled input', () => {
    let state = ''
    const handleOnChange = (ev: React.FormEvent<HTMLInputElement>) => {
      onChange(ev)
      state = ev.currentTarget.value
    }

    return <InputAutocomplete
      onChange={handleOnChange}
      value={state}
      autocompleteValues={autocompleteValues}
      type='text'
    />
  })
