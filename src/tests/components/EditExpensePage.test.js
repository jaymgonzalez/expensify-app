import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

test('should render EditExpensePage', () => {
  const wrapper = shallow(<EditExpensePage />)
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  const editExpense = jest.fn()
  const removeExpense = jest.fn()
  const history = { push: jest.fn()}
  const wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    />)
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle removeExpense', () => {
  const editExpense = jest.fn()
  const removeExpense = jest.fn()
  const history = { push: jest.fn()}
  const wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    />)
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id })
})