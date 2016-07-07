//
// 
//
var display = function(data,name,seed,passelement,qno,answer){
    var episodiv  = $('#episopass');
    episodiv.children().remove();

    var qtext = data['qas'][qno]['question'];

    var center = $('<center>');
    episodiv.append(center);

    var div;
    if(qtext.match(/\/([^\/]+\.(gif|png|jpg|jpeg))$/i)){
        div = $('<img>');
        div.css('width',120);
        div.attr('src',qtext);
    }
    else {
        div = $('<div>');
        div.text(qtext);
        div.css('background-color','#ccc');
        div.css('width','100%');
        div.css('margin','4px');
        div.css('padding','4px');
        div.css('margin','0 auto');
    }
    center.append(div);
    center.append($('<p>'));
    div = $('<div>');
    center.append(div);
    
    var answers = data['qas'][qno]['answers'];
    for(var i=0;i<answers.length;i++){
        var input = $('<input>');
        input.attr('type','button');
        input.attr('value',answers[i]);
        input.attr('anumber',i);
        input.css('margin','2pt');
	input.css('padding','1pt');
        input.click(function(event){
            event.preventDefault();
            answer[qno] = Number($(this).attr('anumber'));
            if(qno < data['qas'].length - 1){
		display(data,name,seed,passelement,qno+1,answer);
            }
            else { // 終了
                var newpass = exports.crypt(seed,secretstr(data,answer));
                passelement.val(newpass);
                episodiv.remove(); // 質問ウィンドウを消す
	    }
	});
        div.append(input);
    }
};

function secretstr(data,answer){
    var secret = "";
    var qas = data['qas'];
    for(var i=0;i<qas.length;i++){
        secret += qas[i]['question'];
        secret += qas[i]['answers'][answer[i]];
    }
    return secret;
}

exports.init = function(data,name,seed,passelement){
    display(data,name,seed,passelement,0,[]);
};
