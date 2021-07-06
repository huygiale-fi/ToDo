var dstodo = new DSToDo();
var validator = new Validation();

var getel = function(id) {
    return document.getElementById(id);
}



var renderDSTask = function(ds) {
    var dsTodo = ds.filter(item => item.status === false);
    var dsComplete = ds.filter(item => item.status === true);

    const renderContent = (listItem) => {
        let content = '';
        listItem.forEach(item => {
            content += `
            <li>
            <span>${item.newtask}</span>
            <div class="buttons">
            <button class="remove" onclick="deleteTask('${item.id}')">
                <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" onclick="changeStatus('${item.id}')">
                <i class="far fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
                </button>
                </div>
            </li>
        `
        })
        return content;
    }
    contentTodo = renderContent(dsTodo);
    contentComplete = renderContent(dsComplete);
    getel('todo').innerHTML = contentTodo;
    getel('completed').innerHTML = contentComplete;

}


getLlocalStorage();

function deleteTask(id) {
    dstodo.deleteTask(id);
    console.log(dstodo);
    renderDSTask(dstodo.arr);
    setLocalStorage();
};

function changeStatus(id) {
    var task = dstodo.laythongtintask(id);
    console.log(task.status);
    task.status = !task.status;
    console.log(dstodo);
    renderDSTask(dstodo.arr);
    setLocalStorage();
}

var validatorinput = function(input) {
    var isvalue = true;
    isvalue &= validator.checkempty(input, 'tbtask', 'Không Được Rỗng');
    return isvalue;
}


getel('addItem').addEventListener('click', function() {
    var newtask = getel('newTask').value;
    if (!validatorinput(newtask)) return;
    var status = false;
    var id = Math.floor(Math.random() * 100);

    if (dstodo.arr != '') {
        var trung = dstodo.validatortrung(newtask);
        if (trung == true) {
            getel('tbtask').innerHTML = 'Hoạt động đã tồn tại';
            getel('tbtask').style.display = 'block';
            return;
        } else {
            var task = new Task(id, newtask, status);
            dstodo.addtask(task);
            renderDSTask(dstodo.arr);
            setLocalStorage();
        }
    } else {
        var task = new Task(id, newtask, status);
        dstodo.addtask(task);
        renderDSTask(dstodo.arr);
        setLocalStorage();
    }
    getel('newTask').addEventListener('click', function() {
        getel('newTask').value = '';
    })

})

function getLlocalStorage() {
    // get data
    if (localStorage.getItem('ToDo')) {
        dstodo.arr = JSON.parse(localStorage.getItem('ToDo'));
        renderDSTask(dstodo.arr);
    }
}

function setLocalStorage() {
    // Chỉ lưu data dưới dạng Json
    localStorage.setItem('ToDo', JSON.stringify(dstodo.arr));
};