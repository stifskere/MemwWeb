window.addEventListener('DOMContentLoaded', () => {

    const bottomText = document.getElementsByClassName('bottomText');

    const pc1 = document.getElementById('pc1');
    const pcone = document.getElementById('pcone');

    const pc2 = document.getElementById('pc2');
    const pctwo = document.getElementById('pctwo');

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

        bottomText[0].innerHTML = '<p>View list on PCPartPicker</p>';
        bottomText[1].innerHTML = '<p>View list on PCPartPicker</p>';
        pcone.href = "https://pcpartpicker.com/list/yWgntn";
        pctwo.href = "https://pcpartpicker.com/list/Cw9C6r";
    }else{
        pcone.addEventListener('click', () => {
            pc1.hidden = !pc1.hidden;
        });

        pctwo.addEventListener('click', () => {
            pc2.hidden = !pc2.hidden;
        });
    }
})