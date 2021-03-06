#
# Facebookなどのログイン画面でEpisoPassを呼び出すブラウザ拡張機能
# ChromeでもFirefoxでも使えるはず
#

episodata = []# 

$ ->
  passelement = []
  idelement = null
  service = ''
  
  if location.href.match /facebook.com/
    passelement = $('#pass')
    idelement = $('#email')
    service = 'Facebook'
  if location.href.match /amazon/
    passelement = $('#ap_password')
    idelement = $('#ap_email')
    service = 'Amazon'
  if location.href.match /linkedin.com/
    # passelement = $('#login-password')
    # idelement = $('#login-email')
    passelement = $('#password')
    idelement = $('#username')
    service = 'LinkedIn'
  if location.href.match /twitter.com/
    passelement = $('.js-password-field')
    idelement = $('.text-input')
    # idelement = $('.email-input')
    service = 'Twitter'
  if location.href.match /github.com/
    idelement = $('#login_field')
    passelement = $('#password')
    service = 'GitHub'
  if location.href.match /value-domain.com/
    idelement = $('#username')
    passelement = $('#password')
    service = 'ValueDomain'
  if location.href.match /heroku.com/
    idelement = $('#email')
    passelement = $('#password')
    service = 'Heroku'
  if location.href.match /pinterest\./
    idelement = $('#email')
    passelement = $('#password')
    service = 'Pinterest'
  if location.href.match /tumblr.com/
    idelement = $('#signup_email')
    passelement = $('#signup_password')
    service = 'Tumblr'
  if location.href.match /gyazo.com/
    idelement = $('input[name="email"]')
    passelement = $('input[name="password"]')
    service = 'Gyazo'

  # セーブされてるEpisoPassデータを読む
  #episodata = []
  #chrome.storage.local.get "episodata", (value) ->
  #  if Object.keys(value).length == 0
  #    episodata = []
  #  else
  #    episodata = value.episodata

  #
  # EpisoPass問題ページか判定
  #
  if $('#question') && $('#question').length > 0
    #
    # 新しいデータを追加
    #
    console.log($('body').attr('episodata'))
    data = JSON.parse($('body').attr('episodata'))
    console.log 'data.name ='
    console.log data.name

    episodata = []
    chrome.storage.local.get "episodata", (value) ->
      if Object.keys(value).length == 0
        episodata = []
      else
        episodata = value.episodata

      # 古いのを消す
      newdata = []
      for entry in episodata
        console.log "each - " + entry.name
        if entry.name != data.name
          newdata.push entry
      episodata = newdata

      # 新しいのを足す
      episodata.push data
    
      # データをセーブ
      chrome.storage.local.set
        'episodata': episodata
        , ->
          console.log "saved episodata"
          console.log episodata

  if idelement && passelement && passelement[0] != undefined && passelement.val() == ''
    passelement.on 'click', ->
      if !window.clicked
        id = idelement.val()
        id = 'masui' if !id || id == ''
        name = "#{service}_#{id}"

        # セーブされてるデータを読む
        chrome.storage.local.get "episodata", (value) ->
          episodata = value.episodata
          console.log episodata

          for entry in episodata
            if entry.name == name
              div = $('<div>')
                .css 'position','absolute'
                .css 'left','200px'
                .css 'top','200px'
                .css 'width','400px'
                .css 'height','450px'
                .css 'background-color','#ddd'
                .css 'border-radius','5px'
                .css 'z-index',100
                .attr 'id','episopass'
              $('body').append div

              exports.run entry,id,entry.seed,passelement

      window.clicked = true
