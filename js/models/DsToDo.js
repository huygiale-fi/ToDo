function DSToDo() {
    this.arr = [];
}
DSToDo.prototype.addtask = function(Task) {
    this.arr.push(Task);
}
DSToDo.prototype.timvitri = function(id) {
    return this.arr.findIndex(function(td) {
        return id == td.id;
    });
}
DSToDo.prototype.deleteTask = function(id) {

    var vitri = this.timvitri(id);
    if (vitri !== -1) {
        this.arr.splice(vitri, 1);
    }
}
DSToDo.prototype.laythongtintask = function(id) {
    var vitri = this.timvitri(id);
    if (vitri !== -1) {
        return this.arr[vitri];
    }
}
DSToDo.prototype.validatortrung = function(newtask) {
    for (const key in dstodo.arr) {
        if (dstodo.arr[key].newtask.toLowerCase() == newtask.toLowerCase()) {
            return true;
        } else {
            continue;
            return false;

        }
    }
}