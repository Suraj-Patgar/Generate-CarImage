let btn = document.querySelector('button')
let body = document.querySelector('body')

btn.addEventListener('click', function(){

    let sound = new Audio('https://v1.cdnpk.net/videvo_files/audio/premium/audio0262/watermarked/Vehicles A - C Audio Files_CarV8StartOff_preview.mp3')
    sound.play()

    let images = ['bmw.png', 'porsch.png', 'shelbygt.png', 'urus.png']
    let random = Math.floor(Math.random()*images.length)
    let selectimg = images[random]

    let img = document.createElement('img')
    img.setAttribute('src', selectimg)
    img.style.position = 'absolute'

    img.style.visibility = 'hidden'
    body.appendChild(img)

    img.onload = function(){
        let imgwidth = img.offsetWidth
        let imgheight = img.offsetHeight

        let bodywidth = window.innerWidth
        let bodyheight = window.innerHeight

        let maxX = bodywidth - imgwidth
        let maxY = bodyheight - imgheight

        let x = Math.random()*maxX
        let y = Math.random()*maxY

        img.style.left = `${x}px`
        img.style.top = `${y}px`
        img.style.visibility = 'visible'
    }
})