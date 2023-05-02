const container = document.querySelector('.container')
let n = 598
const on = document.querySelector('.on')
const off = document.querySelector('.off')

for (let i = 0; i < n; i++) {
    const square = document.createElement('div')
    container.append(square)
    square.setAttribute('class', 'square')
    square.classList.add("square")
    square.addEventListener('mouseover', () =>
        itemStyle(square)
    )
    square.addEventListener('mouseleave', () =>
        removeStyle(square)
    )
    // button
    on.addEventListener('click', () =>
        onStyle(square)
    )

    off.addEventListener('click', () =>
        offStyle(square)
    )

}

/// btn
function onStyle(btn) {
    btn.style.background = randomColor()
}

function offStyle(btn) {
    btn.style.background = ''
}

// container
function itemStyle(item) {
    item.style.background = randomColor()
    item.style.transform = 'rotateY(360deg)'
    // item.style.boxShadow = '20px 20px 20px #3d34d5'
    item.style.boxShadow = `10px 5px 5px ${randomColor()}`
}
function removeStyle(item) {
    item.style.background = ''
    item.style.transform = ''
    item.style.boxShadow = ''
    // item.style.boxShadow = ``
}
function randomColor() {
    let color = '#'
    // let arr = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9,]
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)
        // let idx = Math.floor(Math.random() * arr.length)
        // color += arr[idx]
    }
    // console.log(color)
    return color
}
