#
# Facebookなどのログイン画面でEpisoPassを呼び出すブラウザ拡張機能
# ChromeでもFirefoxでも使えるはず
#

$ ->
  passelement = []
  idelement = null
  seed  = ''
  
  if location.href.match /facebook.com/ # OK
    passelement = $('#pass')
    idelement = $('#email')
    seed = "Facebook123456"
  if location.href.match /amazon/ # OK
    passelement = $('#ap_password')
    idelement = $('#ap_email')
    seed = "Amazon123456"
  if location.href.match /twitter.com/
    passelement = $('.text-input')[1]
    idelement = $('.js-signin-email')
    passelement = idelement
    seed = "Twitter123456"

  if idelement && passelement && passelement[0] != undefined && passelement.val() == ''
    passelement.on 'click', ->
	    if !window.clicked
        id = idelement.val()
        id = 'masui' if !id || id == ''

    		div = $('<div>')
    		  .css 'position','absolute'
    		  .css 'left','200px'
    		  .css 'top','100px'
    		  .css 'width','400px'
    		  .css 'height','250px'
          .css 'background-color','#ddd'
          .css 'border-radius','5px'
          .attr 'id','episopass'
    		$('body').append div

    		$.getJSON "http://episopass.com/#{id}.json", (data) ->
          exports.run data,id,seed,passelement

      window.clicked = true
