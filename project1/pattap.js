window.onload = function(){
  $(document).ready(function(){
    var anm = document.getElementById('pattap');
      var ctx = anm.getContext("2d");
      var randomcolor = ["#FF0000","#FF4500","#BDB76B","#006400","#008080"];
      var dy = 20;
      var ac = 0.5;
      var bY = anm.height/2;
      var bX = anm.width/2;
      var p = [0,50,100,-50,-100];
      function draw(){
        ctx.beginPath();
        ctx.fillStyle = randomcolor[Math.floor(Math.random()*5)];
        ctx.fillRect(0,0,anm.width,anm.height);
        ctx.arc(bX+p[0],bY,10,0,2*Math.PI,true);
        ctx.fillStyle = "blue";
        ctx.fill();
        
      }
      var x = document.createElement("audio");
      document.onkeydown = function(event){
        if(event.which==38){
          x.src = "Censor-sound.mp3";
          x.play();
          var d = setInterval(function(){
            bY-=dy;
            dy-=ac;
            if(bY>=anm.height/2){
            bY = anm.height/2;
            clearInterval(d);
            }
            draw();
          },500);
        }
        if(event.which==39){
          x.src = "Sci-fi-scanner.mp3";
          x.play();
          ac = 2;
          var d = setInterval(function(){
            bY-=dy;
            dy-=ac;
            if(bY>=anm.height/2){
            bY = anm.height/2;
            clearInterval(d);
            }
            ctx.arc(bX+p[1],bY,8,0,2*Math.PI,true);
            ctx.fillStyle = randomcolor[Math.floor(Math.random()*5)];
            ctx.fill;
          },500);
        }
        if(event.which==40){
          x.src = "Shutter-sound.mp3";
          x.play();
          
        }
        if(event.which==32){
          x.src = "Switch-click-sound.mp3";
          x.play();
          
        }
        if(event.which==16){
          x.src = "Usb-connection-sound-effect.mp3";
          x.play();
          
        }
      }
  });
};