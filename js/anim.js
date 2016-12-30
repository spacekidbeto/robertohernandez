var timer,bai,canvas,ctx;
canvas = document.getElementsByTagName('canvas')[0];
ctx = canvas.getContext('2d');
window.addEventListener('resize', function(){
    clearTimeout(timer);timer=setTimeout(init,200);}, false);
init();
aaa();

function init(){
    clearTimeout(timer);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    bai=(canvas.width>canvas.height)?canvas.height:canvas.width;
    bai=bai/200;
}

function aaa(){
    var a,b,tim,max,tx,ty,x,y,s,pen,h,r,rr,t,sou,sbai,han,o,ra;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle="rgb(0,0,0)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.globalCompositeOperation = "lighter";
    tim=new Date().getTime()/31;
    rr=1+Math.sin(tim/17)*0.8;
    sou=4+Math.sin(tim/29)*3;
    sbai=2+Math.sin(tim/31)*1.5;
    ra=Math.sin(tim/37);
    max=200;
    pen=bai*100;
    h=Math.pow(3,0.5)/3*pen;
    x=canvas.width/2;
    y=canvas.height/2;
    for(a=0;a<max;a++){
        s=0.0+(a+1)/max*1.0;
        s*=s;
        r=tim/87+(Math.sin(a/max*5+tim/49)/5+Math.sin(a/max*7-tim/53)/7)*rr;
        for(b=0;b<3;b++){
            ctx.save();
            ctx.translate(x,y);
            ctx.rotate((r+Math.PI*2/3*b)%(Math.PI*2));
            ctx.translate(-x,-y);
            t=Math.sin(tim/73-s*sou+b*ra)*sbai+0.5;
            o=0;
            if(t<0){t=0;o=1;}
            if(t>1){t=1;o=1;}
            ctx.fillStyle=ctx.strokeStyle="hsla("+(((244+t*140)|0)%360)+",60%,60%,0.5)";
            if(!o){
                han=0.5-Math.cos(t*Math.PI*2)/2;
                han*=s*20*bai;
            }
            t*=Math.PI*2/6*5;
            ctx.translate(x+pen*s,y-h*s);
            ctx.rotate(t);
            ctx.translate(-x-pen*s,-(y-h*s));
            ctx.beginPath();
            ctx.lineTo(x-pen*s,y-h*s);
            ctx.lineTo(x+pen*s,y-h*s);
            ctx.stroke();
            if(!o){
                ctx.beginPath();
                ctx.arc(x-pen*s,y-h*s,han,0,Math.PI*2,0);
                ctx.fill();
            }
            ctx.restore();
        }
    }
    requestAnimationFrame(aaa);
}