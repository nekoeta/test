function convertToBinary() {
  const input = document.getElementById("decimalInput").value;
  const number = parseFloat(input);

  if (isNaN(number)) {
    document.getElementById("result").textContent = "数値を正しく入力してください。";
    return false;
  }

  const binary = number.toString(2);
  document.getElementById("result").value = binary;
  document.getElementById("resultDisp").textContent = `2進数：${binary}`;
  
  // 履歴追加
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = `${number} → ${binary}`;
  historyList.appendChild(li);
  
    // 初期メッセージがあれば削除（任意）
  const firstItem = historyList.querySelector("li");
  if (firstItem && firstItem.textContent === "履歴がここに表示されます") {
    historyList.removeChild(firstItem);
  }

  // 最大10件に制限：11件以上なら最初の1件を削除
  while (historyList.children.length > 10) {
    historyList.removeChild(historyList.firstChild);
  }
  return true;
}
