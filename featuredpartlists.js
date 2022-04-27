window.addEventListener('DOMContentLoaded', () => {

    const bottomText = document.getElementsByClassName('bottomText');
    const bottomText1 = document.getElementById('bottomText1');
    const bottomText2 = document.getElementById('bottomText2');

    const pc1 = document.getElementById('pc1');
    const pcone = document.getElementById('pcone');

    const pc2 = document.getElementById('pc2');
    const pctwo = document.getElementById('pctwo');

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

        bottomText[0].innerHTML = '<p>View list on PCPartPicker</p>';
        bottomText[1].innerHTML = '<p>View list on PCPartPicker</p>';
        pcone.href = "https://pcpartpicker.com/list/yWgntn";
        pctwo.href = "https://pcpartpicker.com/list/B4NrDq";
    }else{
        pcone.addEventListener('click', () => {
            pc1.hidden = !pc1.hidden;
            if (bottomText[0].innerHTML === "Click to show") bottomText[0].innerHTML = "Click to hide";
            else bottomText[0].innerHTML = "Click to show";
        });
        pctwo.addEventListener('click', () => {
            pc2.hidden = !pc2.hidden;
            if (bottomText[1].innerHTML === "Click to show") bottomText[1].innerHTML = "Click to hide";
            else bottomText[1].innerHTML = "Click to show";
        });
    }
})