self.addEventListener('install', (event) => {
  console.log("in service worker top level")
  event.waitUntil(() => {
    Promise.resolve(() => {
      console.log("in service worker top level")
    })
  })
})