function Validation() {
    this.checkempty = function(value, spanid, mess) {
        if (value === '') {
            getel(spanid).style.display = 'block';
            getel(spanid).innerHTML = mess;
            return false;
        }
        getel(spanid).style.display = 'none';
        getel(spanid).innerHTML = '';
        return true;
    }

}