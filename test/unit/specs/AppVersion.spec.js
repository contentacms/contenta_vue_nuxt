import Vue from 'vue'
import AppVersion from '~/components/AppVersion'
import packageJson from '~/package.json'

/**
 * An example unit test
 */
describe('AppVersion.vue', () => {

  it('must display package JSON version number', () => {
    const Constructor = Vue.extend(AppVersion)
    let vm = new Constructor().$mount()
    const displayedVersion = vm.$el.querySelector('.app-version').textContent.trim()
    expect(displayedVersion).toBe(packageJson.version.trim())
  })

})
