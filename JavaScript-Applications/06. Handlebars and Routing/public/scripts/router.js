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
        Promise.all([$.get(`api/threads/${threadId}`),$.get('../templates/thread-messages.handlebars')])
                .then(([data, template]) => {
                    let thread = data.result;
                        console.log(thread);
                    let temp = Handlebars.compile(template),
                        html = temp(thread);

                    document.getElementById('content').innerHTML += html;
                });
    });
});

(function () {
    sammyApp.run('#/');

    $('#content').on('click', '#btn-add-thread', function (e) {
        let title = $(this).parents('.input-group')
                            .find('input#input-add-thread').val() || null,
            username = localStorage.getItem('username-key');

        if (username) {

            let threadToAdd = {
                title,
                username
            };

            $.ajax({
                url: 'api/threads',
                method: 'POST',
                contentType: 'application/JSON',
                data: JSON.stringify(threadToAdd),
                success: (res) => {
                    $('#btn-threads').click();
                }
            });
        }
    });

} ());



export { sammyApp };