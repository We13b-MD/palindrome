const { palindromeChecker } = require('./palindrome')
const {jest,test,describe, beforeEach} = require('jest')
const { JSDOM } = require('jsdom')
const { document, window } = new JSDOM('<!DOCTYPE html>').window
global.document = document
global.window = window
global.alert = jest.fn() // Mock window.alert

// Mock the dependencies
jest.mock('./palindrome', () => ({
  palindromeChecker: jest.fn((input) => `Result for ${input}`)
}))

// Mock necessary DOM elements and methods

describe('palindromeChecker function', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks()
    document.getElementById = jest.fn().mockImplementation((id) => {
      if (id === 'text-input') {
        return { value: '' } // Mock an empty input initially
      } else if (id === 'result') {
        return { innerHTML: '' } // Mock an empty result initially
      } else if (id === 'check-btn') {
        return { addEventListener: jest.fn() }
      } else {
        return {}
      }
    })
  })

  test('should display alert message for empty input', () => {
    // Call the function
    palindromeChecker('')
  })

  test('should display correct result for palindrome input', () => {
    // Mock palindrome input
    document.getElementById.mockReturnValueOnce({ value: 'racecar' })

    // Call the function
    palindromeChecker('racecar')

    // Expect result to be displayed correctly
  })

  test('should display correct result for non-palindrome input', () => {
    // Mock non-palindrome input
    document.getElementById.mockReturnValueOnce({ value: 'hello' })

    // Call the function
    palindromeChecker('hello')

    // Expect result to be displayed correctly
  })
})
