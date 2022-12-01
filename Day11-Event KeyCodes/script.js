const insert= document.getElementById('insert')

window.addEventListener('keydown', (event)=>{
    insert.innerHTML = `
        <div class="key">
            ${event.key===" " ? 'Space' : event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `
})

document.onkeydown = capturekey;
    document.onkeypress = capturekey;
    document.onkeyup = capturekey;

    function capturekey(e) {
        e = e || window.event;
        //debugger
        if (e.code == 'F5' || e.code == 'F7' || e.code == 'F11') {
            insert.innerHTML = `
        <div class="key">
            ${event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `
                //avoid from refresh
                e.preventDefault()
                e.stopPropagation()
            
        }
    }