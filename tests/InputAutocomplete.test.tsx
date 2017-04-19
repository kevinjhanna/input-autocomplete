import * as React from 'react'
import { shallow } from 'enzyme'
import sinon = require('sinon')
import InputAutocomplete from '../src/InputAutocomplete'

describe('Uncontrolled InputAutocomplete', () => {
  it('changes value', () => {
    const wrapper = shallow(<InputAutocomplete 
      autocompleteValues={['foo', 'bar']}
    />)

    const event = {
      currentTarget: {
        focus: sinon.stub(),
        setSelectionRange: sinon.stub(),
        value: 'other',
      }
    }

    wrapper.find('input').simulate('change', event)
    expect(wrapper.find('input').props().value).toBe('other')
  })

  it('autocompletes value', () => {
    const wrapper = shallow(<InputAutocomplete 
      autocompleteValues={['foo', 'bar']}
    />)

    const event = {
      currentTarget: {
        focus: sinon.stub(),
        setSelectionRange: sinon.stub(),
        value: 'f',
      }
    }

    wrapper.find('input').simulate('change', event)
    expect(wrapper.find('input').props().value).toBe('foo')
  })

  it('works with defaultValue', () => {
    const wrapper = shallow(<InputAutocomplete 
      autocompleteValues={['foo', 'bar']}
      defaultValue='f'
    />)

    expect(wrapper.find('input').props().value).toBe('f')
  })
})

describe('Controlled InputAutocomplete', () => {
  it('sets value', () => {
    const wrapper = shallow(<InputAutocomplete 
      autocompleteValues={['foo', 'bar']}
      value='a value'
    />)

    expect(wrapper.find('input').props().value).toBe('a value')
  })

  it('does not change value when user tries to change it', () => {
    const wrapper = shallow(<InputAutocomplete 
      autocompleteValues={['foo', 'bar']}
      value='original'
    />)

    const event = {
      currentTarget: {
        focus: sinon.stub(),
        setSelectionRange: sinon.stub(),
        value: 'other',
      }
    }

    wrapper.simulate('change', event)
    expect(wrapper.find('input').props().value).toBe('original')
  })

  it('does change value via props', () => {
    const wrapper = shallow(<InputAutocomplete 
      autocompleteValues={['foo', 'bar']}
      value='original'
    />)

    wrapper.setProps({
      value: 'other'
    })

    expect(wrapper.find('input').props().value).toBe('other')
  })

  it('fires onChange prop', () => {
    const handleOnChange = sinon.spy()

    const wrapper = shallow(<InputAutocomplete 
      autocompleteValues={['foo', 'bar']}
      onChange={handleOnChange}
    />)

    const event = {
      currentTarget: {
        focus: sinon.stub(),
        setSelectionRange: sinon.stub(),
        value: 'other',
      }
    }

    wrapper.simulate('change', event)
    expect(handleOnChange.withArgs('other').calledOnce)
  })

  it('fires onChange prop with autocompleted value', () => {
    const handleOnChange = sinon.spy()

    const wrapper = shallow(<InputAutocomplete 
      autocompleteValues={['foo', 'bar']}
      onChange={handleOnChange}
    />)

    const event = {
      currentTarget: {
        focus: sinon.stub(),
        setSelectionRange: sinon.stub(),
        value: 'f',
      }
    }

    wrapper.simulate('change', event)
    expect(handleOnChange.withArgs('foo').calledOnce)
  })
})

