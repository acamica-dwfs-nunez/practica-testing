function sumar(...args) {
  return args.reduce((prev, current) => prev + current, 0)
}

function restar(...args) {
  let numeroInicial = args[0]
  for (let i = 1; i < numeroInicial.length; i++) {
    numeroInicial -= args[i]
  }
  return numeroInicial
}
