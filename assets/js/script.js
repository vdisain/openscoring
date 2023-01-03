(function () {
  const menu = document.querySelectorAll('#menu--main a')
  const checkbox = document.querySelector('#nav__toggle--main')

  if (!menu || !menu.length || !checkbox) {
    return
  }
  
  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function (event) {
      console.log('%cClicked: ', 'color: orange;', event)
      checkbox.checked = false
    })
  }

  if (window.addEventListener) {
    console.log('%cMessage event added', 'color: darkgray;')
    window.addEventListener('message', onMessageReceived, false)
  } else if (window.attachEvent) {
    window.attachEvent('message', onMessageReceived)
  }

  function onMessageReceived(event) 
  {
    const iframe = document.querySelector('iframe[data-rescale]')
    const height = parseInt(event.data)
    if (isNaN(height)) {
      return
    }
    iframe.height = height
  }
})()
