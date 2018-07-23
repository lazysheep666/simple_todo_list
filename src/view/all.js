let showNav = function() {
  const HD_BTN_1 = document.getElementsByClassName('hd-btn')[1]
  HD_BTN_1.id = 'add'
  HD_BTN_1.innerText = 'add'
  HD_BTN_1.classList.remove('hide')
  document.getElementById('cancle')
    .classList
    .add('hide')
}

let init = function(data) {
  document.getElementById('one').classList.remove('choosed')
  document.getElementById('all').classList.add('choosed')
  const MAIN = document.getElementsByClassName('main')[0]
  let str = '<div class="warnning">'
  for (let i = 0; i < data.warnning.length; i++) {
    str += `<div class="warn-item">
              <i class="fa fa-star fa-2x ${data.icon.color[i]}">
              </i>
              ${data.warnning[i]}
            </div>`
  }
  str += '</div><div class="status">'
  for (let i = 0; i < data.status.length; i++) {
    str += `<div class="status-item">
              <i class="fa ${data.icon.name[i]} fa-2x default">
              </i>
              ${data.status[i]}
          </div>`
  }
  str += '</div><ul class="todo-list"></ul>'
  MAIN.innerHTML = str
}

let showToDos = function(data) {
  let str = ''
  for (let i = 0; i < data.todos.length; i++) {
    str += `<li class="todo" data-index=${i}>
              <i class="fa ${data.icon.name[data.todos[i]['status-lev']]} fa-2x ${data.icon.color[data.todos[i]['warnning-lev']]}">
              </i>
              <p>
                ${data.todos[i].content}
              </p>
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
  }
  document.getElementsByClassName('todo-list')[0].innerHTML = str
}

export default {
  showNav,
  init,
  showToDos
}
