document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('incrementar')

    function incre (){
        let count = document.getElementById('count')
        let counter = parseInt(count.textContent, 10)
        count.textContent = counter + 1
    }

    btn.addEventListener('click', incre)
})