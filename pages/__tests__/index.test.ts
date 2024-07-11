import { mount } from '@vue/test-utils'
import IndexPage from '../index.vue'

describe('IndexPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IndexPage)
    expect(wrapper.vm).toBeTruthy()
  })

  // Add more tests specific to your index page here
})
