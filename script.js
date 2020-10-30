const form = document.querySelector("form");
const API_URL = "https://plant-surf-whale.glitch.me/";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const first = formData.get("firstNum");
    const second = formData.get("secondNum");
    const cal = formData.get("cal");

    var noti = document.getElementById("noti");
    const data = { first: first, second, cal };
    if ((cal == null) | (first == null) | (second == null)) {
        noti.textContent = "Vui lòng nhập đủ các trường";
        return;
    }
    if (isNaN(first)) {
        noti.textContent = "Số thứ nhất không phải là số";
        return;
    }
    if (isNaN(second)) {
        noti.textContent = "Số thứ hai không phải là số";
        return;
    }
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((response) => {
            var result = document.getElementById("result");
            result.value = response.kq;
        });
});
