//
// Facebookなどのログイン画面でEpisoPassを呼び出すブラウザ拡張機能
// ChromeでもFirefoxでも使えるはず
//

$(function(){
    var passelement = [];
    var idelement = null;
    var seed  = '';
    if(location.href.match(/facebook.com/)){ // OK
	passelement = $('#pass');
	idelement = $('#email');
	seed = "Facebook123456";
    }
    if(location.href.match(/amazon/)){ // OK
	passelement = $('#ap_password');
	idelement = $('#ap_email');
	seed = "Amazon123456";
    }
    if(location.href.match(/twitter.com/)){ // Not OK
	passelement = $('.text-input')[1];
	idelement = $('.js-signin-email');
	passelement = idelement;
	seed = "Twitter123456";
    }

    if(idelement && passelement && passelement[0] != undefined && passelement.val() == ''){
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
