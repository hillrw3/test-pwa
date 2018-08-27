self.addEventListener('install', (event) => {
  console.log("in service worker")
  event.waitUntil(() => {
    Promise.resolve(() => {
      console.log("in service worker")
    })

  })
})