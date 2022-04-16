window.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading');
   window.addEventListener('load', () => {
        loading.hidden = true
        console.log('loaded')
    });
})