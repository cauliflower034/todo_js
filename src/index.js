import "./styles.css";

const addtxt = document.getElementById("add-text");
const addbtn = document.getElementById("add-button");
const incmp = document.getElementById("incomp-list");

const onClickAdd = () => {
  const inputText = addtxt.value;
  addtxt.value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divの子要素設定
  div.appendChild(li);

  //ul下にdiv生成
  incmp.appendChild(div);
};

addbtn.addEventListener("click", () => onClickAdd());
