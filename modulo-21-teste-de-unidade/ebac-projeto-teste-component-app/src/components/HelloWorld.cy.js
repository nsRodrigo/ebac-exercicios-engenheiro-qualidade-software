import { mount } from 'cypress/vue2'
import HelloWorld from './HelloWorld.vue'

describe('Componente HelloWorld', () => {
  it('verificar titulo componente', () => {
    const msg = 'Meu teste de componente'
    mount(HelloWorld, { propsData: { msg } })
    cy.get('h1').should('have.text', msg)
  })
})