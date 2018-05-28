let Requests = (function () {
  return {
    getPosts: function (filter) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        let posts, myfilter
        if (filter) {
          myfilter = JSON.stringify(filter)
        } else {
          myfilter = undefined
        }
        request.open('POST', 'http://localhost:3000/getPosts', true)
        request.setRequestHeader('Content-Type', 'application/json')

        request.onload = function () {
          if (request.status == 200) {
            posts = JSON.parse(request.responseText)
            resolve(posts)
          } else {
            reject()
          }
        }
        request.send(myfilter)
      })
    },

    getPost: function (id) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open('GET', 'http://localhost:3000/getPost?id=' + id, true)

        request.onload = function () {
          if (request.status == 200) {
            resolve(request.responseText)
          } else {
            reject()
          }
        }
        request.send(null)
      })
    },

    addPost: function (photoPost) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        let post = JSON.stringify(photoPost)
        request.open('POST', 'http://localhost:3000/addPost', true)
        request.setRequestHeader('Content-Type', 'application/json')

        request.onload = function () {
          if (request.status == 200) {
            resolve(photoPost)
          } else {
            reject()
          }
        }
        request.send(post)
      })
    },

    editPost: function (id, photoPost) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        let res = JSON.stringify(photoPost)
        request.open('PUT', 'http://localhost:3000/editPost?id=' + id, true)
        request.setRequestHeader('Content-Type', 'application/json')

        request.onload = function () {
          if (request.status == 200) {
            resolve()
          } else {
            reject()
          }
        }
        request.send(res)
      })
    },

    removePost: function (id) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open('DELETE', 'http://localhost:3000/removePost?id=' + id, true)

        request.onload = function () {
          if (request.status == 200) {
            resolve()
          } else {
            reject()
          }
        }
        request.send(null)
      })
    },

    likePost: function (id, user) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open('POST', 'http://localhost:3000/likePost?id=' + id + '&user=' + user, true)

        request.onload = function () {
          if (request.status == 200) {
            resolve(request.responseText)
          } else {
            reject()
          }
        }
        request.send(null)
      })
    },

    // запросы для 12 лабы (авторизация)

    loginUser: function (username, password) {
      return new Promise(function (resolve, reject) {
        let xml = new XMLHttpRequest()
        let message = JSON.stringify({
          username: username,
          password: password
        })
        xml.open('POST', 'http://localhost:3000/login', true)
        xml.setRequestHeader('Content-Type', 'application/json')

        xml.onload = function () {
          if (xml.status == 200) {
            resolve(xml.responseText)
          } else {
            reject()
          }
        }
        xml.send(message)
      })
    },

    getUser: function () {
      return new Promise(function (resolve, reject) {
        let xml = new XMLHttpRequest()
        xml.open('GET', 'http://localhost:3000/login', true)

        xml.onload = function () {
          if (xml.status == 200) {
            resolve(xml.responseText)
          } else {
            reject()
          }
        }
        xml.send(null)
      })
    },

    logoutUser: function () {
      return new Promise(function (resolve, reject) {
        let xml = new XMLHttpRequest()
        xml.open('GET', 'http://localhost:3000/logout', true)

        xml.onload = function () {
          if (xml.status == 200) {
            resolve(xml.responseText)
          } else {
            reject()
          }
        }
        xml.send(null)
      })
    }
  }
}())
