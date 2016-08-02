function solve() {
  return function (selector) {
    var $select = $(selector).css('display', 'none'),
      options = $(selector).find('option'),
      $options = $('<div />').addClass('options-container')
        .css('possition', 'absolute')
        .css('display', 'none'),
      $selectContainer = $('<div />').addClass('dropdown-list')
        .append($select);

    var defaultOpt;
    for (var i = 0, len = options.length; i < len; i += 1) {
      var $currentOption = $(options[i]),
        dataValue = $currentOption.val(),
        html = $currentOption.html();
      if (i === 0) {
        defaultOpt = $currentOption;
      }

      $('<div />').addClass('dropdown-item')
        .attr('data-value', dataValue)
        .attr('data-index', i)
        .html(html)
        .appendTo($options);
    }
    if (defaultOpt) {
      $('<div />').addClass('current')
        .attr('data-value', '')
        .html(defaultOpt.html())
        .appendTo($selectContainer);
    }


    $options.appendTo($selectContainer);
    $selectContainer.appendTo(document.body);


    $('.current').on('click', function () {
      $options.css('display', 'block');
      $(this).html('Select a value');
    });

    $options.on('click', '.dropdown-item', function () {
      var html = $(this).html();
      $('.current').html(html);
      $(selector).val($(this).attr('data-value'));
      $options.css('display', 'none');
      console.log($(selector).val());
    });
  };
}

module.exports = solve;