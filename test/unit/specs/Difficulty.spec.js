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
    expect(element.textContent.trim()).toBe('easy')
  })

  it('Should have class "tag is-warning" when receiving "middle" difficulty', () => {
    const Ctor = Vue.extend(Difficulty)
    let props = { difficulty: 'middle' }
    let vm = new Ctor({ propsData: props }).$mount()
    let element = vm.$el.querySelector('span')
    expect(element.className.trim()).toBe('tag is-warning')
    expect(element.textContent.trim()).toBe('middle')
  })

  it('Should have class "tag is-danger" when receiving "hard" difficulty', () => {
    const Ctor = Vue.extend(Difficulty)
    let props = { difficulty: 'hard' }
    let vm = new Ctor({ propsData: props }).$mount()
    let element = vm.$el.querySelector('span')
    expect(element.className.trim()).toBe('tag is-danger')
    expect(element.textContent.trim()).toBe('hard')
  })

})
