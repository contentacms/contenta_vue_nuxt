import Vue from 'vue'
import Difficulty from '~/components/Difficulty'

/**
 * An example unit test
 */
describe('Hello.vue', () => {
  it('Page recipe index', () => {
    const vm = new Vue(Difficulty).$mount()
    expect(typeof Difficulty.methods).toBe('object')
  })
})
