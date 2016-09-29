import { data } from './data.js';

let sammyApp = Sammy('#content', function () {
    this.get('#/', function () {
        $('#content').html('');
    });

    this.get('/threads', function () {
        data.threads.get()
            .then((data) => {
                let threads = data.result;
                $.get('../templates/thread.handlebars', function (source) {
                    let temp = Handlebars.compile(source);
                    let html = temp(threads);

                    $('#content').html(html);
                });
            });
    });

    this.get('threads/:id', function(data) {
        let threadId = data.params.id;
        console.log(data);
        if (data.messages) {

        }
        Promise.all([$.get(`api/threads/${threadId}`),$.get('../templates/thread-messages.handlebars')])
                .then(([data, template]) => {
                    let thread = data.result;
                        console.log(thread);
                    let temp = Handlebars.compile(template),
                        html = temp(thread);

                    document.getElementsByClassName('container-messages')[0].innerHTML = html;
                });
    });

    this.get('gallery', function() {
        data.gallery.get()
            .then(function(result) {
                let imgs = result.data.children;
                $.get('../templates/gallery.handlebars', function(template) {
                    let temp = Handlebars.compile(template),
                        html = temp(imgs);
                    
                    $('#content').html(html);
                });
            });
    });
});

(function () {
    sammyApp.run('#/');

    let GLYPH_UP = 'glyphicon-chevron-up',
        GLYPH_DOWN = 'glyphicon-chevron-down',
        root = $('#root'),
        navbar = root.find('nav.navbar'),
        contentContainer = $('#root #content'),
        usernameInput = $('#login input'),
        loginForm = $('#login'),
        logoutForm = $('#logout'),
        usernameSpan = $('#span-username'),
        alertTemplate = $($('#alert-template').text());
    
    $('.navbar').on('click', '#btn-login', (ev) => {
        let username = usernameInput.val() || 'anonymous';

        data.users.login(username)
        .then((user) => {
            usernameInput.val('');
            usernameSpan.text(user);
            loginForm.addClass('hidden');
            logoutForm.removeClass('hidden');
            window.location = '#/';
        });
    });

    $('.navbar').on('click', '#btn-logout', (ev) => {
        data.users.logout()
        .then(() => {
            usernameSpan.text('');
            loginForm.removeClass('hidden');
            logoutForm.addClass('hidden');
            window.location = '#/';
        });
    });

    $('#content').on('click', '#btn-add-thread', function (e) {
        let title = $(this).parents('.input-group')
                            .find('input#input-add-thread').val() || null;

        data.threads.add(title)
            .then(function() {
                window.location = '#/threads';
            });
    });

    $('#content').on('click', '.btn-add-message', function(ev) {
        let $target = $(ev.target),
        $container = $target.parents('.container-messages div.panel-default'),
        thId = $container.attr('data-thread-id'),
        msg = $container.find('.input-add-message').val();

        data.threads.addMessage(thId, msg)
            .then(function(thread) {
                window.location = `#/threads/${thread.id}`;
            });
    });

    function showMsg(msg, type, cssClass, delay) {
    let container = alertTemplate.clone(true)
        .addClass(cssClass).text(`${type}: ${msg}`)
        .appendTo(root);

    setTimeout(() => {
      container.remove();
    }, delay || 2000)
  }

  navbar.on('click', 'li', (ev) => {
    let $target = $(ev.target);
    $target.parents('nav').find('li').removeClass('active');
    $target.parents('li').addClass('active');
  });

  contentContainer.on('click', '.btn-close-msg', (ev) => {
    let msgContainer = $(ev.target).parents('.container-messages').remove();
  });

  contentContainer.on('click', '.btn-collapse-msg', (ev) => {
    let $target = $(ev.target);
    if ($target.hasClass(GLYPH_UP)) {
      $target.removeClass(GLYPH_UP).addClass(GLYPH_DOWN);
    } else {
      $target.removeClass(GLYPH_DOWN).addClass(GLYPH_UP);
    }

    $target.parents('.container-messages').find('.messages').toggle();
  });

} ());
