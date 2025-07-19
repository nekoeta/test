function convertToBinary() {
  const input = document.getElementById("decimalInput").value;
  const number = parseInt(input, 10);

  if (isNaN(number)) {
    document.getElementById("result").textContent = "数値を正しく入力してください。";
    return;
  }

  const binary = number.toString(2);
  document.getElementById("result").textContent = `2進数：${binary}`;
  document.getElementById("resultDisp").textContent = `2進数：${binary}`;
}
