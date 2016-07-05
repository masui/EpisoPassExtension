//
// ChromeでもFirefoxでも使える拡張機能
//
$(function(){
    //
    // <input type="password" class="inputtext" name="pass" id="pass" tabindex="2" />
    //

    // $('body').css('border',"30px solid yellow");

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

    //        //window.showModalDialog("http://episopass.com/masui2015/Facebook123456","xxx","width=800,height=600,menubar=no,toolbar=no,location=no,scrollbars=yes");
    //        //var xxx = window.showModalDialog("http://episopass.com/masui2015/Facebook123456",window,"dialogWidth=600;dialogHeight=500;");
    //        // alert(xxx);
    //        //alert(window.returnValue);
    //
    //        //spawn(function*() {
    //        //  var ret = yield window.showModalDialog("http://episopass.com/masui2015/Facebook123456.html", "some argument", "dialogWidth:600px;dialogHeight:500px");
    //        //  alert("Returned from modal: " + ret);
    //        //});
    //        
    //        window.open("http://episopass.com/masui2015/Facebook123456");
    //    }
    // }
});
