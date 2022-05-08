function goTop() {
    window.scrollTo(0, 0);
}

document.addEventListener('scroll', () => {
    const gototop = document.getElementById("goToTop")
    const lastBr = document.getElementById("lastBr")

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        gototop.classList.remove("hiddenWithAnimation");
        lastBr.hidden = true;
    } else {
        gototop.classList.add("hiddenWithAnimation");
        lastBr.hidden = false;
    }
})