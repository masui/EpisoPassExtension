#
# Facebookなどのログイン画面でEpisoPassを呼び出すブラウザ拡張機能
# ChromeでもFirefoxでも使えるはず
#

$ ->
  passelement = []
  idelement = null
  service = ''
  
  if location.href.match /facebook.com/ # OK
    passelement = $('#pass')
    idelement = $('#email')
    service = 'Facebook'
  if location.href.match /amazon/ # OK
    passelement = $('#ap_password')
    idelement = $('#ap_email')
    service = 'Amazon'
  if location.href.match /linkedin.com/
    passelement = $('#login-password')
    idelement = $('#login-email')
    service = 'LinkedIn'
  if location.href.match /twitter.com/
    passelement = $('.js-password-field')
    idelement = $('.email-input')
    service = 'Twitter'
  if location.href.match /github.com/
    idelement = $('#login_field')
    passelement = $('#password')
    service = 'GitHub'
  if location.href.match /value-domain.com/
    idelement = $('#username')
    passelement = $('#password')
    service = 'ValueDomain'

  if idelement && passelement && passelement[0] != undefined && passelement.val() == ''
    passelement.on 'click', ->
      if !window.clicked
        id = idelement.val()
        id = 'masui' if !id || id == ''
        name = "#{service}_#{id}"

        div = $('<div>')
          .css 'position','absolute'
          .css 'left','200px'
          .css 'top','200px'
          .css 'width','400px'
          .css 'height','300px'
          .css 'background-color','#ddd'
          .css 'border-radius','5px'
          .css 'z-index',100
          .attr 'id','episopass'
        $('body').append div

        browser = window.navigator.userAgent.toLowerCase()
        
        # Chromeだと何故かgetJSONがXMLHttpRequestエラーになる
        # Firefoxだとこれで大丈夫
        if browser.indexOf "firefox" > -1
          $.getJSON "http://episopass.com/#{name}.json", (data) ->
            exports.run data,id,data.seed,passelement
            # exports.run data,id,seed,passelement

        # Chromeの場合こちらなら大丈夫 httpsでなきゃ駄目!
        if browser.indexOf "chrome" > -1
          xhr = new XMLHttpRequest();
          xhr.open("GET", "https://episopass.com/#{name}.json", true);
          xhr.onreadystatechange = ->
            if xhr.readyState == 4
              data = JSON.parse xhr.responseText
              exports.run data,id,data.seed,passelement
          xhr.send()

      window.clicked = true
