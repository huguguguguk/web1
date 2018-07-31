var Body = {
			setBackGroundColor:function (color){
				document.querySelector('body').style.backgroundColor =color;
			},
			setColor:function (color){
				document.querySelector('body').style.color=color;
			}
		}
		var Links ={
			setColor:function (color){
				var alist = document.querySelectorAll('a');
				var i =0;
				while(i<alist.length){
					alist[i].style.color = color;
					i = i+1;
				}
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