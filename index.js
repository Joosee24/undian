$(document).ready(function () {
  const nama_mobil = ["jose", "salsa", "alenny", "rafael", "adit"];
  const nama_motor = ["budi", "tina", "kiki", "deni", "nina"];
  const nama_hp = ["lisa", "john", "mike", "rini", "daniel"];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  //function buat show hide

  function showWinners(prizeType) {
    $(".nama_pemenang").hide();
    $(`#nama_pemenang_${prizeType}`).show();
  }

  function updateWinners(prizeType, names) {
    var container = $(`#nama_pemenang_${prizeType}`);
    container.empty();
    for (let i = 0; i < names.length; i++) {
      container.append(`Pemenang Ke-${i + 1}: ${names[i]}<br>`);
    }
  }

  $("#ganti .dropdown-item").click(function () {
    var value = $(this).attr("value");
    var img_src;
    var winners;

    if (value == "mobil") {
      img_src = "/asset/banner-SK-_1_-removebg-preview.png";
      winners = shuffle(nama_mobil.slice());
      updateWinners("mobil", winners);
    } else if (value == "motor") {
      img_src =
        "/asset/yamaha-rilis-motor-hybrid-bergaya-retro-harga-jauh-di-bawah-pcx-ehev_169-removebg-preview.png";
      winners = shuffle(nama_motor.slice());
      updateWinners("motor", winners);
    } else if (value == "hp") {
      img_src =
        "/asset/iphone_14_pro_deep_purple_2_9-1000x1000-removebg-preview.png";
      winners = shuffle(nama_hp.slice());
      updateWinners("hp", winners);
    }

    var img_ctl = '<img src="' + img_src + '" alt="image">';
    $(".rendering_img").html(img_ctl);

    showWinners(value);
  });

  $("#clear-button").click(function () {
    $(".nama_pemenang").empty();
  });

  // Initially hide all winner lists
  $(".nama_pemenang").hide();
});

// fungsi clear button
$("#clear-button").click(function () {
  $(".nama_pemenang").empty();
});

$(".nama_pemenang").hide();
