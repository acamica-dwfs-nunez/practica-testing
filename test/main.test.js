const { assert, should, expect } = require('chai')
const Utilidades = require('../main')

should()

describe('Testing para Concatenar', () => {
  it('deberia devolver el string correcto', () => {
    const prueba = Utilidades.Concatenar('a', 'b')
    prueba.should.be.a('string')
  })

  it('deberia devolver el string correcto', () => {
    const palabras = ['Hola', 'a', 'to2']
    assert(Utilidades.Concatenar(...palabras), 'Hola a to2')
  })

  //escribir test para manejo de errores
})

describe('Testing para Matematicas', () => {
  //escribir test para Matematicas
})

describe('Testing para chequeo de tipos', () => {
  //escribir test para manejo de chequeo de tipos
})
