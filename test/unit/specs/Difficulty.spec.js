import Vue from 'vue'
import Difficulty from '~/components/Difficulty'

/**
 * An example unit test
 */
describe('Difficulty.vue', () => {
  
  it('Should have class "tag is-primary" when receiving "easy" difficulty', () => {
    const Ctor = Vue.extend(Difficulty)
    let props = { difficulty: 'easy' }
    let vm = new Ctor({ propsData: props }).$mount()
    let element = vm.$el.querySelector('span')
    expect(element.className.trim()).toBe('tag is-primary')
    expect(vm.$el.querySelector('span').textContent.trim()).toBe('easy')
  })

  it('Should have class "tag is-warning" when receiving "easy" middle', () => {
    const Ctor = Vue.extend(Difficulty)
    let props = { difficulty: 'middle' }
    let vm = new Ctor({ propsData: props }).$mount()
    let element = vm.$el.querySelector('span')
    expect(element.className.trim()).toBe('tag is-warning')
    expect(vm.$el.querySelector('span').textContent.trim()).toBe('middle')
  })

  it('Should have class "tag is-danger" when receiving "hard" middle', () => {
    const Ctor = Vue.extend(Difficulty)
    let props = { difficulty: 'hard' }
    let vm = new Ctor({ propsData: props }).$mount()
    let element = vm.$el.querySelector('span')
    expect(element.className.trim()).toBe('tag is-danger')
    expect(vm.$el.querySelector('span').textContent.trim()).toBe('hard')
  })

})
