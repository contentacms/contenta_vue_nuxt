import Vue from 'vue'
import BulmaCard from '~/components/BulmaCard'

/**
 * An example unit test
 */
describe('BulmaCard.vue', () => {

  let vm = null

  beforeEach(() => {
    const Constructor = Vue.extend(BulmaCard)
    vm = new Constructor()
    vm.$mount()
  })

  it('root element must have a "card" class', () => {
    expect(vm.$el.className === 'card')
  })

  it('component must have "card-content" class', () => {
    expect(vm.$el.querySelector('.card > .card-content')).not.toBeNull()
  })

  it('component must have "card-image" class', () => {
    expect(vm.$el.querySelector('.card > .card-image')).not.toBeNull()
  })

})
