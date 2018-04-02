var i = window.devicePixelRatio>1?1/window.devicePixelRatio:1;//查看像素比，用于页面缩放；
var meta =document.createElement("meta");
meta.name="viewport";
meta.content='width=device-width,user-scalable=no,initial-scale='+i+',minimum-scale='+i+',maximum-scale='+i;
document.getElementsByTagName("head")[0].appendChild(meta);//动态添加meta-viewport标签，设置好适配；
var resizeEV = 'orientationchange' in window ? 'orientationchange' : 'resize';

rem();
window.addEventListener(resizeEV,rem,false);
function rem(){
	var html = document.getElementsByTagName("html")[0];
	var iW =document.body.offsetWidth;
	var scale=iW/750*100;
	if(i==1){
		scale=Math.min(iW/750,.56)*100;//浏览器没有切换到手机模式的时候font-size最大56px
	}
	if(i==.5){
		scale=Math.min(iW/750,1.56)*100;//浏览器使用ipad时最大156px
	}
	html.style.fontSize=scale+"px";//动态设置html根节点的font-size，用于rem布局；
}

