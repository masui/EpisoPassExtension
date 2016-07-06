//
// Facebookなどのログイン画面でEpisoPassを呼び出すブラウザ拡張機能
// ChromeでもFirefoxでも使えるはず
//

//var script = document.createElement('script');
//script.type = 'text/javascript';
//script.src = "http://EpisoPass.com/md5.js";
//document.body.appendChild(script);

$(function(){
    var passinput = [];
    var episourl = null;
    if(location.href.match(/facebook.com/)){
	passinput = $('#pass');
	//episourl = "http://episopass.com/masui2015/Facebook123456";
	episourl = "http://episopass.com/masui2015.html";
    }
    if(passinput[0] != undefined && passinput.val() == '' && episourl){
	passinput.on('click',function(){
	    if(!window.clicked){
		//window.open(episourl,'xxxx',"width=600,height=500,menubar=no,toolbar=no,location=no,scrollbars=yes");
		// EpisoPassから値を戻す方法がわからない...

		$.getJSON( "http://episopass.com/masui.json", function(data){
		    name = $('#email').val();
		    if(!name || name == ''){
			name = 'masui';
		    }
		    exports.init(data);
		});

		// alert(exports.MD5_hexhash('abc')); // これは出るのだが
		//alert("episoinit = " + exports.episoinit);

		div = $('<div></div>');
		div.css('position','absolute');
		div.css('left','200px');
		div.css('top','100px');
		div.css('width','400px');
		div.css('height','400px');
		div.css('background-color','#ddd');
		div.attr('id','episopass');

		$('body').append(div);
	    }
	    window.clicked = true;
	});
    }
});
