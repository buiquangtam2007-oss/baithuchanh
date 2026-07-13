function printBCC(n) {
    let num = Number(n);
    let resultDiv = document.getElementById("result");
    
    if (isNaN(num) || num < 1 || num > 10) {
        resultDiv.innerHTML = "Vui lòng nhập một số hợp lệ từ 1 đến 10.";
        return;
    }
    
    let content = "<h3>BẢNG CỬU CHƯƠNG " + num + "</h3>";
    for (let i = 1; i <= 10; i++) {
        content += num + " x " + i + " = " + (num * i) + "<br>";
    }
    
    resultDiv.innerHTML = content;
}