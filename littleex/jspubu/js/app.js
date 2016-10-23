window.onload=function(){
	imgLocation("container","box");	
	//模拟实现加载的数据。
	var imgData = {"data":[{"src":"02.jpg"},{"src":"001.jpg"},{"src":"05.jpg"},{"src":"13.jpg"},{"src":"11.jpg"},{"src":"15.jpg"},{"src":"03.jpg"}]}
	//监听滚动条
	window.onscroll = function(){
		if(checkFlag()){
			var cparent = document.getElementById("container");//多次使用，再修改可考虑封装。
			//加载数据
			for(var i = 0;i<imgData.data.length;i++){
				var ccontent = document.createElement("div");
				ccontent.className = "box";
				cparent.appendChild(ccontent);
				var boximg = document.createElement("div");
				boximg.className = "box_img";
				ccontent.appendChild(boximg);
				var img = document.createElement("img");
				img.src = "img/"+imgData.data[i].src;
				boximg.appendChild(img);
			}
			imgLocation("container","box");	
		}
	}
}
//判断什么时候加载
function checkFlag(){
	var cparent = document.getElementById("container");
	var ccontent = getChildElement(cparent,"box");
	var lastContentHeight = ccontent[ccontent.length-1].offsetTop;
	//console.log(lastContentHeight);
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
	if(lastContentHeight<scrollTop+pageHeight){
		return true;
	}
}
//图片位置，第二排图片接着第一排最低的图片下面
function imgLocation(parent,content){
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	//console.log(ccontent);
	//图片宽度
	var imgWidth = ccontent[0].offsetWidth;
	//一排放多少图片
	var num = Math.floor(document.documentElement.clientWidth / imgWidth);
	cparent.style.cssText = "width:"+imgWidth*num+"px;margin:0 auto;";
	
	var BoxHeightArr = [];
	for(var i=0;i<ccontent.length;i++){
		
		if(i<num){
			BoxHeightArr[i] = ccontent[i].offsetHeight;
			
		}else{
			var minHeight = Math.min.apply(null,BoxHeightArr);
			//console.log(minHeight);
			var minindex = getminHeightLocation(BoxHeightArr,minHeight);
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minHeight+"px";
			ccontent[i].style.left = ccontent[minindex].offsetLeft + "px";
			BoxHeightArr[minindex] = BoxHeightArr[minindex] + ccontent[i].offsetHeight;
		}
	}
}
//最小高度图片的位置
function getminHeightLocation(BoxHeightArr,minHeight){
	for(var i in BoxHeightArr){
		if(BoxHeightArr[i] == minHeight){
			return i;
		}
	}
}

function getChildElement(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	for(var i=0;i<allcontent.length;i++){
		if(allcontent[i].className == content){
			contentArr.push(allcontent[i]);
		}
	}
	return contentArr;
}