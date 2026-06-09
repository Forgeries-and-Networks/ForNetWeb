const delay = (f, ms) => {
  let timeout = null

  const future = (resolve, ...args) => {
    const result = f(...args)
    resolve(result)
  }

  const cancel = (event) => {
    if (timeout) {
      window.clearTimeout(timeout)
    }
  }

  const handler = (...args) => {
    cancel()

    return new Promise((resolve, reject) => {
      timeout = window.setTimeout(future, ms, resolve, ...args)
    })
  }

  handler.cancel = cancel

  return handler
}

export {
  delay
}
