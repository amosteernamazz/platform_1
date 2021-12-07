//显示led类型的数字的js代码工具类
class LedStyle {
	/*
	 width:led容器的宽度，默认为50px
	 height：led容器的高度，默认为100px（实际高度要大于100px,实际高度为height+lineWidth）
	 lineWidth:led灯的宽度，默认为5px
	 selector:需要展示led灯的选择器名称
	 color:led灯的颜色，默认为红色
	 italics:倾斜角度，默认为0（不倾斜）
	 
	 */
	constructor(width, height, lineWidth,selector, color, italics) {
		this.width = width;
		this.height = height;
		this.lineWidth = lineWidth;
		this.color = color;
		this.italics = italics;
		//创建对象的时候生成一个随机的class编码
		this.selector = selector;
		//如果在初始化的时候没有指定参数，都使用以下默认值进行初始化
		this.setLedStyle(width?width:50, height?height:100, lineWidth?lineWidth:5, color?color:'red', italics?italics:'0')
	}

	setLedStyle(width = 50, height = 100, lineWidth = 5, color = 'red', italics = '0') {
		let style = `
			<style>
				${this.selector} .led-segment{
					width: ${width + 'px'};
					height: ${height + 'px'};
					position: relative;
					transform: skewX(${italics + 'deg'});
					margin:${lineWidth/2 + 'px'};
					border:none;
				}
				${this.selector} .led-segment1{
					width: calc(100% - ${lineWidth*2 + 'px'});
					height: ${lineWidth + 'px'};
					border-radius: ${lineWidth + 'px'};
					margin: 0 auto;
					border:none;
				}
				${this.selector} .led-segment2{
					width: ${lineWidth + 'px'};
					height: calc(50% - ${lineWidth + 'px'});
					border-radius: ${lineWidth + 'px'};
					border:none;
					position: absolute;
					top: ${lineWidth + 'px'};
					right:0;
				}
				${this.selector} .led-segment3{
					width: calc(100% - ${lineWidth*2 + 'px'});
					height: ${lineWidth + 'px'};
					border-radius: ${lineWidth + 'px'};
					margin: 0 auto;
					border:none;
					position: absolute;
					top: 50%;
					left: ${lineWidth + 'px'};
				}
				${this.selector} .led-segment4{
					width: ${lineWidth + 'px'};
					height: calc(50% - ${lineWidth + 'px'});
					border-radius: ${lineWidth + 'px'};
					margin: 0 0 0 calc(100% - ${lineWidth + 'px'});
					border:none;
					position: absolute;
					bottom: 0px;
				}
				${this.selector} .led-segment5{
					width: calc(100% - ${lineWidth*2 + 'px'});;
					height: ${lineWidth + 'px'};
					border-radius: ${lineWidth + 'px'};
					margin: 0 auto;
					border:none;
					position: absolute;
					top: 100%;
					left: ${lineWidth + 'px'};
				}
				${this.selector} .led-segment6{
					width: ${lineWidth + 'px'};
					height: calc(50% - ${lineWidth + 'px'});
					border-radius: ${lineWidth + 'px'};
					position: absolute;
					top: ${lineWidth + 'px'};
					border:none;
				}
				${this.selector} .led-segment7{
					width: ${lineWidth + 'px'};
					height: calc(50% - ${lineWidth + 'px'});
					border-radius: ${lineWidth + 'px'};
					position: absolute;
					bottom: 0px;
					border:none;
				}
				
				${this.selector} .led-color{
					background: ${color};
					opacity:0.05;
				}
				
				${this.selector} .float-v{
					position: absolute;
					bottom: 0;
					width: ${lineWidth + 'px'};
					left: 50%;
					height: ${lineWidth + 'px'};
					border: none;
					background: ${color};
				}
				${this.selector} .led-segment-float{
					width: ${width/2 + 'px'};
					height: ${height + 'px'};
					position: relative;
					transform: skewX(${italics + 'deg'});
					margin:1px;
					float:left;
					border:none;
				}
			</style>
			`;

		$("body").append(style);
	}
	//对单个led灯的样式进行样式设置
	setValue(v, random) {
		let styleLed = '';
		switch(v.toString()) {
			case '0':
				styleLed = ".led-segment1,.led-segment2,.led-segment4,.led-segment5,.led-segment6,.led-segment7";
				break;
			case '1':
				styleLed = ".led-segment2,.led-segment4";
				break;
			case '2':
				styleLed = ".led-segment1,.led-segment2,.led-segment3,.led-segment5,.led-segment7";
				break;
			case '3':
				styleLed = ".led-segment1,.led-segment2,.led-segment3,.led-segment4,.led-segment5";
				break;
			case '4':
				styleLed = ".led-segment2,.led-segment3,.led-segment4,.led-segment6";
				break;
			case '5':
				styleLed = ".led-segment1,.led-segment3,.led-segment4,.led-segment5,.led-segment6";
				break;
			case '6':
				styleLed = ".led-segment1,.led-segment3,.led-segment4,.led-segment5,.led-segment6,.led-segment7";
				break;
			case '7':
				styleLed = ".led-segment1,.led-segment2,.led-segment4";
				break;
			case '8':
				styleLed = ".led-segment1,.led-segment2,.led-segment3,.led-segment4,.led-segment5,.led-segment6,.led-segment7";
				break;
			case '9':
				styleLed = ".led-segment1,.led-segment2,.led-segment3,.led-segment4,.led-segment5,.led-segment6";
				break;
			case '-':
				styleLed = ".led-segment3";
				break;
			default:
				styleLed = "";
				break;
		}
		//对当前的单个led样式进行记录，每个led灯的样式都应该是唯一的，所以这里使用了日期加随机数生成class选择器
		var styleLedArr = styleLed.split(',').map((item, index) => {
			return '.' + random + ' ' + item;
		})
		return styleLedArr.join(',') + '{opacity:1 !important}   ';
	}
	//设置数值的方法
	setValues(values) {
		let selector = this.selector;
		//清空原值
		$(selector).html("");
		/*此处代码通过自己选择开启，就是一个只允许输入数字，小数点，负数符的正则判断，可以不打开，不打开的时候，输入非数字、小数点、负数符的时候显示空
		if(!/^[\d.-]+$/.test(values.toString())){
			alert("请传入数字类型的值!");
			return;		
		}*/
		
		let vArr = values.toString().split('');
		var style = '<style>';
		let ledHtml = ``;
		if(vArr) {
			vArr.forEach((item, index) => {
				//通过时间戳加生成随机的class类名，防止页面出现重复的类名
				let random = 'child' + new Date().getTime().toString() + (Math.random() * 10000000).toString().substring(0, 6).replace(/\./g, '');
				if(item == '.'){
					ledHtml += `
						<div class=${random} style="display:inline-block">
							<div class="led-segment-float">
								<div class="float-v"></div>
							</div>
						</div>
						
					`;
				}else{
					ledHtml += `
						<div class=${random} style="display:inline-block">
							<div class="led-segment">
								<div class="led-segment1 led-color"></div>
								<div class="led-segment2 led-color"></div>
								<div class="led-segment3 led-color"></div>
								<div class="led-segment4 led-color"></div>
								<div class="led-segment5 led-color"></div>
								<div class="led-segment6 led-color"></div>
								<div class="led-segment7 led-color"></div>
							</div>
						</div>
					`;

					style += this.setValue(item, random);
				}
				
			})
		}
		/*清除inline-block后的间隙问题*/
		style += (selector + '{font-size:0 !important}');
		style += '</style>';
		$("body").append(style);
		$(selector).append(ledHtml);
	}

}

