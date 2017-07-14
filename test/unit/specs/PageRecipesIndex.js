import Vue from 'vue'
import PageRecipesIndex from '../../../components/PageRecipesIndex'

/**
 * An example unit test
 */
describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PageRecipesIndex)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello').textContent)
      .toEqual('Hello world')
  })
})
