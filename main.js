"use strict";
{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const results = ["洋　食", "和　食", "中　華", "エスニック", "韓国料理"];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
  });
}
