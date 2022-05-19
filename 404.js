function goBack(){
    if(history.length > 1){
        history.back();
    }else{
        window.location = 'index.html'
    }
}