/* 
見せ算ロジックメモ：
  ①n===mの眼は「0」
  ②n>mの眼は「n」
　  n<mの眼は「m」
  ③n===6 m===9 または　n===9 m===6 の眼は「11」
  ④n===2 m===5 または　n===5 m===2 の眼は「1.1」
  ⑤n===1 m===100 または　n===1000 m===1 の眼は「83」
*/



// ハンバーガー
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 見せ算用　ここから↓↓↓
  // メモ：変数作成
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
  const numberButtons = document.getElementById('number-buttons');
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  let activeInput = input1;
  // メモ：ボタン生成
  numbers.forEach(num => {
    const btn = document.createElement('button');
    btn.textContent = num;
    btn.addEventListener('click', () => {
      activeInput.value = num;
      // 次の入力枠にフォーカスを移す
      activeInput = (activeInput === input1) ? input2 : input1;
    });
    numberButtons.appendChild(btn);
  });
  // メモ：答えボタンのイベント
  document.getElementById('answer-btn').addEventListener('click', () => {
    const n = parseInt(input1.value);
    const m = parseInt(input2.value);
    let result = '';
    let reason = '';
    if ((n === 6 && m === 9) || (n === 9 && m === 6)) {
      result = '11';
      reason = 'お互い自分だと思って近づいたから';
    } else if ((n === 2 && m === 5) || (n === 5 && m === 2)) {
      result = '1.1';
      reason = '近づいて全然違うことにびっくりして携帯を落としたから';
    } else if ((n === 1 && m === 100) || (n === 100 && m === 1)) {
      result = '83';
      reason = '1が頑張って一人で17人倒したから';
    } else if (n === m) {
      result = '0';
      reason = 'お互い恥ずかしくなって立ち去ったから';
    } else {
      result = (n > m) ? n : m;
      reason = '小さい方が怯えて逃げ出したから';
    }

    document.getElementById('result').textContent = `結果：「${result}」です`;  // ``これはシングルクォーテーションではなく、バックフォートという。変数を埋め込むときに使う
    document.getElementById('reason').textContent = `理由：「${reason}」です`;
  });
// 見せ算用　ここまで↑↑↑


// ランダム計算用　ここから↓↓↓
  // メモ：変数作成
  const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
  const numberButtons2 = document.getElementById('number-buttons2'); 
  const input3 = document.getElementById('input3');
  const input4 = document.getElementById('input4');
  let activeInput2 = input3;
  // メモ：ボタン作成
  numbers2.forEach(num => {
    const btn2 = document.createElement('button');
    btn2.textContent = num;
    btn2.addEventListener('click', () => {
      activeInput2.value = num;
      // 次の入力枠にフォーカスを移す
      activeInput2 = (activeInput2 === input3) ? input4 : input3;
    });
    numberButtons2.appendChild(btn2);
  });
  // メモ　答えボタンのイベント
  document.getElementById('answer-btn2').addEventListener('click', () => {
    const n = parseInt(input3.value);
    const m = parseInt(input4.value);
    const operations = ['add', 'subtract', 'multiply', 'divide', 'misezan'];
    const selectedOp = operations[Math.floor(Math.random() * operations.length)];
    let result2 = '';
    let operationLabel = '';

    switch (selectedOp) {
      case 'add':
        result2 = n + m;
        operationLabel = '足し算';
        reason2 = '仲良くなったから';
      break;
      case 'subtract':
        result2 = n - m;
        operationLabel = '引き算';
        reason2 = '体当たりされたから';
      break;
      case 'multiply':
        result2 = n * m;
        operationLabel = '掛け算';
        reason2 = 'ノリが合ったから';
      break;
      case 'divide':
        result2 = (m !== 0) ? (n / m).toFixed(2) : '割れません';
        operationLabel = '割り算';
        reason2 = 'おんぶしたから';
      break;
      case 'misezan':
      if ((n === 6 && m === 9) || (n === 9 && m === 6)) {
        result2 = '11';
        reason2 = 'お互い自分だと思って近づいたから';
      } else if ((n === 2 && m === 5) || (n === 5 && m === 2)) {
        result2 = '1.1';
        reason2 = '近づいて全然違うことにびっくりして携帯を落としたから';
      } else if ((n === 1 && m === 100) || (n === 100 && m === 1)) {
        result2 = '83';
        reason2 = '1が頑張って一人で17人倒したから';
      } else if (n === m) {
        result2 = '0';
        reason2 = 'お互い恥ずかしくなって立ち去ったから';
      } else {
        result2 = (n > m) ? n : m;
        reason2 = '小さい方が怯えて逃げ出したから';
      }
      operationLabel = '見せ算';
      break;
    }

    document.getElementById('how').textContent = `何算：「${operationLabel}」です`;
    document.getElementById('result2').textContent = `結果：「${result2}」です`;
    document.getElementById('reason2').textContent = `理由：「${reason2}」です`;
  });
// ランダム計算用　ここまで↑↑↑


// バナーラベル管理
  document.addEventListener("DOMContentLoaded", () => {
  const banners = document.querySelectorAll(".banner");

  banners.forEach(banner => {
    const label = banner.querySelector(".label");
    const id = banner.dataset.id;

    // ページ読み込み時に状態を反映
    const status = localStorage.getItem(`bannerStatus_${id}`);
    if (status === "閲覧済み") {
      label.textContent = "閲覧済み";
      label.classList.add("viewed");
    }

    // クリックイベント
    banner.addEventListener("click", () => {
      label.textContent = "閲覧済み";
      label.classList.add("viewed");
      localStorage.setItem(`bannerStatus_${id}`, "閲覧済み");
    });
  });
});
