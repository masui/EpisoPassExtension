//
// Facebookなどのログイン画面でEpisoPassを呼び出すブラウザ拡張機能
// ChromeでもFirefoxでも使えるはず
//
$(function(){
    var passinput = [];
    var episourl = null;
    if(location.href.match(/facebook.com/)){
	passinput = $('#pass');
	episourl = "http://episopass.com/masui2015/Facebook123456";
    }
    if(passinput[0] != undefined && passinput.val() == '' && episourl){
	passinput.on('click',function(){
	    if(!window.clicked){
		window.open(episourl,'xxxx',"width=600,height=500,menubar=no,toolbar=no,location=no,scrollbars=yes");
	    }
	    window.clicked = true;
	});
    }
});
