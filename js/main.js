// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("nav a").on("click", function () {
    $("header").toggleClass("open");
  });


  /*=================================================
  スライドショー
  ===================================================*/
  jQuery(function ($) {
    $('.main-slider').bgSwitcher({
      images: ['img/mainvisual1.jpg', 'img/mainvisual2.jpg', 'img/mainvisual3.jpg'], // 切り替える背景画像を指定
    });
  });


  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });


  /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $(".room-slider").slick({
    arrows: true,              // 左右の矢印の表示
    // appendArrows: $('.arrow_box'),  //appendArrowsオプションで.arrow-boxにarrowsを入れる
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',  //prevArrowオプションでデフォルトと違うclass名を設定
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    centerMode: true,          // 両端が見切れた状態OFF
    centerPadding: "50px",     // 見切れたコンテンツの幅
    slidesToShow: 3,           // スライドを3枚表示
    autoplay: false,           // 自動再生OFF
    autoplaySpeed: 3000,       // スライドを3秒で切り替え
    responsive: [              // レスポンシブ
      {
        breakpoint: 768,       // 768px以下
        settings: {
          centerPadding: "50px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,       // 768px以下
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],

  });

  /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $(".top-swipe");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });




});






