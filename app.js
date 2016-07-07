//
// 
//

var display = function(data,name,qno,answer){
    var element  = $('#episopass');

    element.children().remove();

    var seed = data['seed'];
    var qtext = data['qas'][qno]['question'];

    var center = $('<center>');
    element.append(center);

    if(a = qtext.match(/\/([^\/]+\.(gif|png|jpg|jpeg))$/i)){
        var imagediv = $('<img>');
        imagediv.css('width',100);
        imagediv.attr('src',qtext);
        center.append(imagediv);
    }
    else {
        var questiondiv = $('<div>');
        questiondiv.text(qtext);
        questiondiv.css('background-color','#ccc');
        questiondiv.css('width','100%');
        questiondiv.css('margin','4px');
        questiondiv.css('padding','4px');
        questiondiv.css('margin','0 auto');
        center.append(questiondiv);
    }
    center.append($('<p>'));
    var answersdiv = $('<div>');
    center.append(answersdiv);
    
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
            var a = Number($(this).attr('anumber'));
            answer[qno] = a;
            if(qno < data['qas'].length - 1){
		display(data,name,qno+1,answer);
            }
            else { // 終了
                var newpass = exports.crypt(seed,secretstr(data,answer));
                $('#pass').val(newpass);
                element.remove(); // 質問ウィンドウを消す
	    }
	});
        answersdiv.append(input);
    }
}

function secretstr(data,answer){
    var secret = "";
    var qas = data['qas'];
    for(var i=0;i<qas.length;i++){
        secret += qas[i]['question'];
        secret += qas[i]['answers'][answer[i]];
    }
    return secret;
}

exports.init = function(data,name){
    display(data,name,0,[]);
};
