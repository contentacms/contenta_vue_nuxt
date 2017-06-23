import Vue from 'vue'
import Hello from '../../../components/Hello'

/**
 * An example unit test
 */
describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello').textContent)
      .toEqual('Hello world')
  })
})
