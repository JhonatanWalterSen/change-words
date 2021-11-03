function encriptar(){
    let modeOne = document.querySelector('.mode');
    modeOne.addEventListener('click', function(){
        let data = document.querySelector('.dataIn').value;
        dataEncryp = btoa(data)
        document.getElementById("resultado").innerHTML = dataEncryp;
    })
}
function desencriptar(){
    let modeTwo = document.querySelector('.modeDes');
    modeTwo.addEventListener('click', function(){
        let data = document.querySelector('.dataOut').value;
        dataDesencryp = atob(data)
        document.getElementById("resultado").innerHTML = dataDesencryp;
    })
}
encriptar();
desencriptar();

/* nextMode */
function nextLetter(){
    let modeThree = document.querySelector('.nextMode');
    modeThree.addEventListener('click', function(){
        let data = document.querySelector('.dataIn').value;
        data = data.split('');
        /* console.log(data) */
        for(let i = 0; i <data.length; i++){
            switch (data[i]) {
                case 'z':
                    data[i] = 'a';
                    break;
                case 'Z':
                    data[i] = 'A';
                    break;
                default:
                    data[i] = String.fromCharCode(data[i].charCodeAt(0) + 1);
            }
        }
        /* console.log(data.join('')) */
        return document.getElementById("resultado").innerHTML = data.join('');
    })
}

function backLetter(){
    let modeFour = document.querySelector('.backMode');
    modeFour.addEventListener('click', function(){
        let data = document.querySelector('.dataOut').value;
        data = data.split('')
        for(let i = 0; i < data.length; i++){
            switch (data[i]) {
                case 'a':
                    data[i] = 'z'
                    break;
                case 'A':
                    data[i] = 'Z'
                    break;
                default:
                    data[i] = String.fromCharCode(data[i].charCodeAt(0) - 1);
            }
        /* console.log(i) */
        }
        return document.getElementById("resultado").innerHTML = data.join('');
    })
}
backLetter()
nextLetter()