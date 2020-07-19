$(document).ready(function () {
  if ($('#disabled').val() == '-1') {
    $('.disabledtrigger').hide();
  }

  $('#disabled').change(function () {
    if ($(this).val() == '-1') {
      $('.disabledtrigger')
        .find('input.form-control')
        .each(function () {
          $(this).removeClass('validate');
          $(this).removeClass('error');
          $(this).parent().hide();
        });
    }
    if ($(this).val() == 'No') {
      $('.disabledtrigger')
        .find('input.form-control')
        .each(function () {
          $(this).removeClass('validate');
          $(this).removeClass('error');
          $(this).parent().hide();
        });
    } else if ($(this).val() == 'Yes') {
      $('.disabledtrigger')
        .find('input.form-control')
        .each(function () {
          $(this).addClass('validate');
          $(this).removeClass('error');
          $(this).parent().show();
        });
    }
  });

  // remove error class on change

  $('.form')
    .find('input.form-control')
    .each(function () {
      $(this).change(function () {
        if ($(this).val() > 0) {
          $(this).removeClass('error');
        } else {
          $(this).addClass('error');
        }
      });
    });
  $('.form')
    .find('select.form-control')
    .each(function () {
      $(this).change(function () {
        if (!$(this).val() == '-1') {
          $(this).removeClass('error');
        } else {
          $(this).removeClass('error');
        }
      });
    });
  $('.form')
    .find('textarea.form-control')
    .each(function () {
      $(this).change(function () {
        if ($(this).val() > 0) {
          $(this).removeClass('error');
        } else {
          $(this).removeClass('error');
        }
      });
    });

  $('#submit').click(function (event) {
    next = true;
    event.preventDefault();
    $('.form')
      .find('input.form-control.validate')
      .each(function () {
        if ($(this).val() == '') {
          console.log($(this));
          next = false;
          $(this).addClass('error');
        } else {
          $(this).removeClass('error');
        }
      });
    $('.form')
      .find('select.form-control.validate')
      .each(function () {
        if ($(this).val() == '-1') {
          console.log($(this));
          next = false;
          $(this).addClass('error');
        } else {
          $(this).removeClass('error');
        }
      });
    $('.form')
      .find('textarea.form-control.validate')
      .each(function () {
        if ($(this).val() == '') {
          console.log($(this));
          next = false;
          $(this).addClass('error');
        } else {
          $(this).removeClass('error');
        }
      });
    console.log(next);
  });
});
