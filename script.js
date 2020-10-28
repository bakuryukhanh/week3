function calculate() {
    var first = document.getElementById("firstNum").value;
    var second = document.getElementById("secondNum").value;
    var cals = document.getElementsByName("cal");
    var noti = document.getElementById("noti");
    var kq;
    var calValue = "";
    for (var i = 0; i < cals.length; i++) {
        if (cals[i].checked) calValue = cals[i].value;
    }
    if (isNaN(first) || first == null || first == "") {
        noti.innerHTML = "Giá trị nhập ở <em>Số thứ nhất</em> không phải là số";
        return;
    }
    if (isNaN(second) || second == null || second == "") {
        noti.innerHTML = "Giá trị nhập ở <em>Số thứ hai</em> không phải là số";
        return;
    }
    if (calValue == "") {
        noti.innerHTML = "Chưa chọn phép tính";
        return;
    }

    var req = new XMLHttpRequest();
    req.open("POST", "https://apple-impossible-canary.glitch.me/", true);
    req.setRequestHeader("Content-Type", "application/json");
    var data = { First: first, Second: second, CalValue: calValue };

    req.send(JSON.stringify(data));
    req.onloadend = () => {
        var obj = JSON.parse(req.response);
        kq = obj.result;
        noti.innerHTML = "";
        document.getElementById("result").value = kq;
    };
}
