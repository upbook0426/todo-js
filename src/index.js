import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li タグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innterText ="完了";
  console.log(completeButton);

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innterText ="削除";
  console.log(deleteButton);

   //divタグの子要素に書く要素を設定
   div.appendChild(li);
   div.appendChild(completeButton);
   div.appendChild(deleteButton);


  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
