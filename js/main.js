$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle-btn").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("header").addClass("open");
    }
  });

  //メニューが表示されている時に画面をクリックした場合
  $(".mask").on("click", function () {

    $("header").removeClass("open");
  });

  $(".header-list").on("click", function () {

    $("header").removeClass("open");
  });

  //メニューが表示されている時に画面をクリックした場合
  $(".blog-jump p").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($(".toppage-blog").hasClass("blog-open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $(".toppage-blog").removeClass("blog-open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $(".toppage-blog").addClass("blog-open");
    }
  });

  $(".mask-detail-blog").on("click", function () {

    $("toppage-blog").removeClass("blog-open");
  });


  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position - 100 }, 600, "swing");
    // $("html, body").animate({scrollTop: target.offset().top - headerHeight}, 600, "swing");
    // urlが変化しないようにfalseを返
    return false;
  });

  // トップに戻る
  let pagetop = $(".to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  $(".to-top").hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(window).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      $(".to-top").fadeIn(800);

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      $(".to-top").fadeOut(800);
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  $(".to-top").click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });

  /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/

  $(".slide-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    variablewidth: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
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
});