function slideAnime(){
    //====左に動くアニメーションここから===
      $('.leftAnime').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
          //左から右へ表示するクラスを付与
          //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
          $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
          $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        }else{
          //左から右へ表示するクラスを取り除く
          $(this).removeClass("slideAnimeLeftRight");
          $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
          
        }
      });
      
    }
    
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      slideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      slideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  
  
  
  
  // 'js-cherry'クラスがついた要素を全て取得
  const cherryEls = document.querySelectorAll(".js-cherry");
  
  // 取得した要素をArrayに変換
  const cherryElsArr = Array.prototype.slice.call(cherryEls);
  
  // 取得した要素ひとつひとつに処理を行う
  cherryElsArr.forEach((cherryEl) => {
    let interval;
  
    // マウスホバー時に桜を降らせる
    cherryEl.addEventListener("mouseenter", () => {
      interval = setInterval(createPetal.bind(undefined, cherryEl), 100);
    });
  
    // マウスを離すと停止
    cherryEl.addEventListener("mouseleave", () => {
      clearInterval(interval);
    });
  });
  
  // 花びらを生成する関数
  const createPetal = (el) => {
    const petalEl = document.createElement("span");
    petalEl.className = "petal";
    // 花びらの大きさ
    const minSize = 10;
    const maxSize = 30;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    petalEl.style.width = `${size}px`;
    petalEl.style.height = `${size}px`;
    petalEl.style.left = Math.random() * el.clientWidth + "px";
    el.appendChild(petalEl);
  
    // 一定時間が経てば花びらを消す
    setTimeout(() => {
      petalEl.remove();
    }, 2999);
  };
  
  
  $image-width / (2 * tan($PI/$n))
  
  
  
  
  
  
  