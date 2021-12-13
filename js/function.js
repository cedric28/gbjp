function CheckAlpabat(obj) {

    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-";

    for (i=0; i < obj.value.length; i++) {
        if (str.indexOf(obj.value.substring(i,i+1))<0) {
            //obj.focus();
            obj.value = "";
            return "NO";
        }

    }

    return true;
}

function addAmount(amount) {
    var f 		= document.frmDepositPayout ;
    var amt 	= Number(f.inpAmount.value);
    amt		= amt + (amount * 10000);

    f.inpAmount.value 	= amt;
}

function resetAmount() {
    var f 		= document.frmDepositPayout ;
    var amt 	= Number(f.inpAmount.value);
    amt		= 0;

    f.inpAmount.value 	= amt;
}

/**
 * 팝업
 */
function popup (url, winname, width, height) {
    window.open(url, winname, "width="+width+", height="+height);
}