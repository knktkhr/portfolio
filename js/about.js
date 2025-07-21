// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

    // ふわっ
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  
  
  
  
  
  // 'js-cherry'クラスがついた要素を全て取得
  const bodyEls = document.querySelectorAll("body");
  
  // 取得した要素をArrayに変換
  const bodyElsArr = Array.prototype.slice.call(bodyEls);
  
  // 取得した要素ひとつひとつに処理を行う
  bodyElsArr.forEach((bodyEl) => {
    let interval;
  
    // マウスホバー時に桜を降らせる
    bodyEl.addEventListener("mouseenter", () => {
      interval = setInterval(createPetal.bind(undefined, bodyEl), 100);
    });
  
    // マウスを離すと停止
    bodyEl.addEventListener("mouseleave", () => {
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
    }, 5800);
  };
  
  
  
  
  
  $image-width / (2 * tan($PI/$n))