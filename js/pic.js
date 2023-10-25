resize_image = () =>{
    if(document.getElementById('wpx').value){
        document.getElementById('picture').style.width = document.getElementById('wpx').value+'px';
    }
    else if(document.getElementById('w%').value) {
        document.getElementById('picture').style.width = document.getElementById('w%').value+'%';
    }
    else{
        document.getElementById('picture').style.width='auto';
    }
}
    resize1_image = () =>{
        if(document.getElementById('hpx').value){
            document.getElementById('picture').style.height = document.getElementById('hpx').value+'px';
        }
        else if(document.getElementById('h%').value){
            document.getElementById('picture').style.height = document.getElementById('h%').value+'vh';}
            else {  document.getElementById('picture').style.height= 'auto';
        }

    }
   
    paste_link=()=> {

        if (document.getElementById('checkbox').checked) {
        window.open(document.getElementById('Link').value, "_blank");
        } else {
        location.href = document.getElementById('Link').value;
        }}