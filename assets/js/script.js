/* created array to store images */
var imgs = [];
imgs[0] = new Image();
imgs[0].src= ".../../assets/images/st2.jpg";
imgs[1] = new Image();
imgs[1].src= ".../../assets/images/st3.png";
imgs[2] = new Image();
imgs[2].src= ".../../assets/images/st4.jpg";
imgs[3] = new Image();
imgs[3].src=".../../assets/images/st1.jfif";
var i =0;
function changeimg(){
    document.getElementById("im1").src = imgs[i].src;
    i++;
    setTimeout(function(){
        changeimg();
    },1000);
}