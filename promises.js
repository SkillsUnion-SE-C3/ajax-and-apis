const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I have rejected")
  }, 4000)
})

promise.then((data) => {
  console.log(data)
}).catch(() => {
  console.log("didn't work out")
})

