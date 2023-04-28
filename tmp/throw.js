async function call(name, fn) {
  console.log(`calling ${name}`)
  try {
    const p = new Promise(
      (resolve, reject) => {
        fn(resolve, reject)
        /*
          .then(
            result => {
              console.log('inner .then: ', result)
              resolve(result)
            }
          )
          .catch(
            error => {
              console.log('inner .catch: ', error)
              reject(error)
            }
          )
          */
      }
    )
    await p
      .then( result => console.log('.then: ', result) )
      .catch( error => console.log('.catch: ', error) )
  }
  catch (error) {
    console.log('catch ', error)
  }
}

await call(
  'one',
  (resolve, reject) => {
    console.log('resolving one result')
    return resolve('one result')
  }
)
await call(
  'two',
  (resolve, reject) => {
    console.log('rejecting two result')
    return reject('two error')
  }
)
await call(
  'three',
  (resolve, reject) => {
    console.log('throwing three error')
    throw 'three error'
  }
)
await call(
  'four',
  (resolve, reject) => {
    console.log('resolving four result')
    Promise.resolve('four result')
  }
)
await call(
  'five',
  (resolve, reject) => {
    console.log('rejecting five result')
    Promise.reject('five error')
  }
)
