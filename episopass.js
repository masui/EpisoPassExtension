//
// Facebookなどのログイン画面でEpisoPassを呼び出すブラウザ拡張機能
// ChromeでもFirefoxでも使えるはず
//

//var script = document.createElement('script');
//script.type = 'text/javascript';
//script.src = "http://EpisoPass.com/md5.js";
//document.body.appendChild(script);

$(function(){
    var passelement = [];
    var episourl = null;
    var idelement = null;
    var seed  = '';
    if(location.href.match(/facebook.com/)){
	passelement = $('#pass');
	idelement = $('#email');
	seed = "Facebook123456";
    }
    if(passelement[0] != undefined && passelement.val() == ''){
	passelement.on('click',function(){
	    if(!window.clicked){
		var id = idelement.val();
		if(!id || id == ''){
		    id = 'masui';
		}
		div = $('<div>');
		div.css('position','absolute');
		div.css('left','200px');
		div.css('top','100px');
		div.css('width','400px');
		div.css('height','400px');
		div.css('background-color','#ddd');
		div.attr('id','episopass');
		$('body').append(div);

		$.getJSON( "http://episopass.com/"+id+".json", function(data){
		    exports.init(data,id,seed,passelement);
		});
	    }
	    window.clicked = true;
	});
    }
});
