	
	
		var Body = {
			setBackGroundColor:function (color){
			//	document.querySelector('body').style.backgroundColor =color;
			$('body').css('backgroundColor',color);
			},
			setColor:function (color){
			//	document.querySelector('body').style.color=color;
			$('body').css('color',color);
			}
		}
		var Links ={
			setColor:function (color){
			$('a').css('color',color);
			
			//var alist = document.querySelectorAll('a');
			//	var i =0;
			//	while(i<alist.length){
			//		alist[i].style.color = color;
			//		i = i+1;
			//	}
			
			}
		}
								
		function nightDayHandler(self){
			if(self.value==='night'){
				Body.setColor('white');
				Body.setBackGroundColor('black');
				Links.setColor('yellow');
				self.value='day';
			}
			else{
				Body.setColor('black');
				Body.setBackGroundColor('powderblue');
				Links.setColor('blue');
				self.value='night';
			}
		}
