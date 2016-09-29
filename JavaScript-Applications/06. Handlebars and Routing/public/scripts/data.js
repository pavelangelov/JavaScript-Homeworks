var data = (function () {
  const USERNAME_STORAGE_KEY = 'username-key';

  // start users
  function userLogin(user) {
    localStorage.setItem(USERNAME_STORAGE_KEY, user);
    return Promise.resolve(user);
  }

  function userLogout() {
    localStorage.removeItem(USERNAME_STORAGE_KEY)
    return Promise.resolve();
  }

  function userGetCurrent() {
    return Promise.resolve(localStorage.getItem(USERNAME_STORAGE_KEY));
  }
  // end users

  // start threads
  function threadsGet() {
    return new Promise((resolve, reject) => {
      $.getJSON('api/threads')
        .done(resolve)
        .fail(reject);
    })
  }

  function threadsAdd(title) {
    return new Promise((resolve, reject) => {
      let errMsg = "You must be logged to can create thread!",
        errObj = {
          responseText: JSON.stringify({ err: errMsg })
        };

      // if (!localStorage.getItem(USERNAME_STORAGE_KEY)) {
      //   reject(errObj);
      // } else {
        let username = localStorage.getItem(USERNAME_STORAGE_KEY);
        $.ajax({
          url: 'api/threads',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            title, username
          }),
          success: function (responce) {
            resolve(responce);
          }
        });
      //}
    });
  }

  function threadById(id) {
    return new Promise((resolve, reject) => {
      let thread = $.getJSON('api/threads/' + id)
        .done(resolve)
        .fail(reject);
    });
  }

  function threadsAddMessage(threadId, content) {
    return new Promise((resolve, reject) => {
      let username = localStorage.getItem(USERNAME_STORAGE_KEY),
        body = {
          content,
          username
        };

      $.ajax({
        url: `api/threads/${threadId}/messages`,
        method: 'POST',
        data: JSON.stringify(body),
        contentType: 'application/json',
        success: function (response) {
          resolve(response);
        }
      });
    });

  }
  // end threads

  // start gallery
  function galleryGet() {
    const REDDIT_URL = `https://www.reddit.com/r/aww.json?jsonp=?`;
    return new Promise((resolve, reject) => {
      $.getJSON(REDDIT_URL, function(json){
        resolve(json);
      });
    });
    
  }
  // end gallery

  return {
    users: {
      login: userLogin,
      logout: userLogout,
      current: userGetCurrent
    },
    threads: {
      get: threadsGet,
      add: threadsAdd,
      getById: threadById,
      addMessage: threadsAddMessage
    },
    gallery: {
      get: galleryGet,
    }
  }
})();

export { data }