

$(function () {
    axios.get('http://localhost:3000/private/Recipes/',

                                {
                                    headers: { Authorization: "Bearer " + sessionStorage.getItem('jwt') }


                                }).then((response) => {
                                    for(var i=response.data.result.length-1;i>=0;i--){
                                        if(response.data.result[i]!=="modal"){
                                           
                                        axios.get('http://localhost:3000/private/Recipes/' + response.data.result[i] + '/modal',

                                {
                                    headers: { Authorization: "Bearer " + sessionStorage.getItem('jwt') }


                                }).then((response) => {
                                    let p = document.createElement("p");
                                    
                                    p.innerHTML = response.data.result
                                    //alert(p.classList.contains("Content"))
                                    if(p.getElementsByClassName("content").length>=1){
                                        document.getElementById('boxFeed').append(p);
                                    }
                                    //document.getElementById('boxFeed').append(p);
                                    
                                    //console.log(response.data.result)


                                }).catch((error) => { console.log(error); bool = false; })
                                    }
                                }
                                    


                                }).catch((error) => { console.log(error); bool = false; });
                                

});

window.onload=function(){
    document.querySelector("a#logout").addEventListener('click', function(event) {
        event.preventDefault();
        sessionStorage.clear();
        location.href = '/index.html';
    });
}