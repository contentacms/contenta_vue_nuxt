import Vue from 'vue'
import AppSection from '~/components/AppSection'

/**
 * An example unit test
 */
describe('AppSection.vue', () => {

  it('must be a SECTION html tag', () => {
    const Constructor = Vue.extend(AppSection)
    let vm = new Constructor().$mount()
    expect(vm.$el.tagName).toBe('SECTION')
  })

})
