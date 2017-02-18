/*
 * @ Name:   站点主JS
 * @ Time:   2015/8/12
 * @ Author: 繁花落尽|cici
 * @ Company: 国信安达
*/
/*动态获取地址*/
var loc = location.href.split('max_demo/')[0];
	loc = loc+'max_demo/';

//basejs	初始化调用
var h5 = new Cici({
	host: loc,
	musicMsg: {
		autoPlay: false
	},
	loadMsg: {
		datas: ['images/ewm.jpg'],
		progress: {
			flag: false
		},
		callback: function(){
			allLoad();
		}
	}
});

//图片资源加载完毕
function allLoad(){

	//p3();
	//p3-p4
	var t = new TimelineMax({
        repeat: 0,   //重复次数
        yoyo: false 
    });

		t.add('state0')
		t.from($('.p3-1'), .4, { y: 300})
		 	.from($('.p3-2'), .4, { y: 326}, '-=0.4')
		 	.from($('.p3-3'), .4, { x: -300}, '-=0.4')
		 	.from($('.p3-5'), .4, { x: 326}, '-=0.4')
		 	.from($('.p3-4'), .4, { x: 326}, '-=0.3')
		 	
			.to($('.p3-2,.p3-3'), .4, { onComplete:function(){
				$('.p3-2').addClass('pulse');
		        $('.p3-3').addClass('flash');
		    }})

		t.add('state1')

			.from($('.p4-1'), .4, { y: 600},'+=0.4')
			.from($('.p4-2'), .4, { x: 300})

			.to($('.p4-1,.p4-2'), .4, { onComplete:function(){
				$('.p4-1').addClass('fadeOutDown');
		        $('.p4-2').addClass('fadeOutRight');
		    }}, '+=0.6')

			.from($('.p4-box2'), .4, { opacity: 0})
			.to($('.p4-box2'), .4, { opacity: 1})
		    .from($('.p4-3'), .4, { x: -600})
			.from($('.p4-4'), .4, { y: 400})
			.from($('.p4-flash,.p4-t,.p4-btn'), .4, { y: 200, onComplete:function(){
				$('.p4-flash,.p4-t,.p4-btn').addClass('vanishIn');
		    }}, '-=0.2')

			.to($('.p4-flash,.p4-t'), .4, { onComplete:function(){
				$('.p4-t').removeClass('vanishIn').addClass('pulse');
				$('.p4-flash').removeClass('vanishIn').addClass('flash');
		    }}, '+=0.4')

		t.add('state2')
		t.stop();

		t.tweenTo('state1', false);
	$('.p3-2').on('tap', function(){
		h5.slide($('.p3'),$('.p4'));
		t.tweenTo('state2', false);
		//p4();
	});
	//p4-p5
	$('.p4-t').on('tap', function(){
		h5.slide($('.p4'),$('.p5'));
		//p5('.p5-t','.p5-flash');
	});
	//p5-p6
	$('.p5-t').on('tap', function(){
		h5.slide($('.p5'),$('.p6'));
		//p5('.p6-t','.p6-flash');
	});
	//p6-p7
	$('.p6-t').on('tap', function(){
		h5.slide($('.p6'),$('.p7'));
		//p5('.p7-t','.p7-flash');
	});
	//p7-p8
	$('.p7-t').on('tap', function(){
		h5.slide($('.p7'),$('.p8'));
		//p8();
	});
	//分享弹框
	$('.p8-btn2').on('tap', function(){
		$('#tk1').show();
	});
	//分享弹框 关闭
	$('#tk1 *').on('tap', function(){
		$('#tk1').hide();
	});


	function p3(){
		setTimeout(function(){
			$('.p3-2').removeClass('fadeInUp delay400').addClass('pulse');
			$('.p3-3').removeClass('fadeInRight delay800').addClass('flash');
		}, 800);
	}

	function p4(){
		setTimeout(function(){
			$('.p4-box02').show();
			$('.p4-1').removeClass('fadeInUp delay400').addClass('fadeOutDown delay800');
			$('.p4-2').removeClass('fadeInUp delay800').addClass('fadeOutRight delay1200');
			setTimeout(function(){
				$('.p4-t').removeClass('vanishIn delay2400').addClass('pulse');
				$('.p4-flash').removeClass('vanishIn delay2400').addClass('flash');
			}, 2800);
		}, 1400);
	}

	function p5(obj1,obj2){
		setTimeout(function(){
			$(obj1).removeClass('vanishIn delay800').addClass('pulse');
			$(obj2).removeClass('vanishIn delay800').addClass('flash');
		}, 1200);
	}
	function p8(){
		setTimeout(function(){
			$('.p8-4,.p8-btn2').removeClass('fadeInRight delay1400').addClass('pulse');
		}, 2000);
	}

}

