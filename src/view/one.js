let showNav = function() {
  const HD_BTN_1 = document.getElementsByClassName('hd-btn')[1]
  HD_BTN_1.id = 'add'
  HD_BTN_1.innerText = 'add'
  HD_BTN_1.classList.remove('hide')
  document.getElementById('cancle')
    .classList
    .add('hide')
}

let init = function() {
  document.getElementById('one').classList.add('choosed')
  document.getElementById('all').classList.remove('choosed')
  const MAIN = document.getElementsByClassName('main')[0]
  let str = '' +
        '<div class="mn-title">' +
        'Now! The One Thing is' +
        '</div>' +
        '<ul class="todo-list">' +
        '</ul>'
  MAIN.innerHTML = str
}

let showToDo = function(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i]['status-lev'] === 0 && data[i]['warnning-lev'] === 0) {
      document.getElementsByClassName('todo-list')[0]
        .innerHTML =
          `               <li class="todo" data-index=${i}>
                            <i class="fa fa-play fa-2x important"></i>
                            <p>${data[i].content}</p>
                      <div class="operate-one" style="display:none">
                              <div class="operate-item edit-todo">
                                  Edit
                              </div>
                              <div class="operate-item delete-todo">
                                Delete
                              </div>
                            </div>
                            <div class="operate-two" style="display:none">
                              <div class="operate-item complete-todo">
                                Completed
                              </div>
                              <div class="operate-item need-todo">
                                Pending
                              </div>
                              <div class="operate-item doing-todo">
                                Ongoing
                              </div>
                            </div>
                      </li>`
      break
    }
  }
}

export default {
  showNav,
  init,
  showToDo
}
