import "./styles.css";

const addtxt = document.getElementById("add-text");
const addbtn = document.getElementById("add-button");
const incmp = document.getElementById("incomp-list");
const cmp = document.getElementById("comp-list");

const onClickAdd = () => {
  const inputText = addtxt.value;
  addtxt.value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button生成
  //完了ボタン
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    //ついているボタンを消す
    div.removeChild(compButton);
    div.removeChild(delButton);
    //戻すボタンをつける
    const revButton = document.createElement("button");
    revButton.innerText = "戻す";
    div.appendChild(revButton);
    //完了したlistに移す
    cmp.appendChild(div);

    //戻すボタン処理
    revButton.addEventListener("click", () => {
      //ボタンの削除と追加
      div.removeChild(revButton);
      div.appendChild(compButton);
      div.appendChild(delButton);
      //未完了listに移す
      incmp.appendChild(div);
    });
  });

  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    //listから削除
    const deltarget = delButton.parentNode;
    incmp.removeChild(deltarget);
  });

  //divの子要素設定
  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(delButton);

  //ul下にdiv生成
  incmp.appendChild(div);
};

addbtn.addEventListener("click", () => onClickAdd());
