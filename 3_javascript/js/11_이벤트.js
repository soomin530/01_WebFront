/* 인라인 이벤트 모델 확인하기 */
function check1(btn) {

  // 매개변수 btn == 클릭한 버튼(this)
  console.log(btn);

  // 버튼의 배경색을 얻어와 저장
  const bgColor = btn.style.backgroundColor;

  console.log(bgColor);

  // 버튼이 클릭될 때마다 pink <-> yellow 변경
  if(bgColor == "yellow") {
    btn.style.backgroundColor = "pink";
  } else {
    btn.style.backgroundColor = "yellow";
  }
}

// --------------------------------------------------

/* 고전 이벤트 모델 확인하기 */

// 아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장
const test1a = document.querySelector("#test1-1");

// 고전 이벤트 모델 작성법
// 요소.이벤트리스너 = 이벤트핸들러

test1a.onclick = function() {
  alert("고전 이벤트 모델 확인 버튼 클릭됨");
};

// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭 시
// #test1-1 onclick 이벤트 리스너의 이벤트 핸들러 제거

document.querySelector("#test1-2").onclick = function() {
  // test1-1 기존 onclick 이벤트 핸들러를 
  // null 로 덮어씌움 (이벤트 제거)

  test1a.onclick = null;
  alert("이벤트 제거됨");

}

// 고전 이벤트 모델 단점

// test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

// test1c 요소가 클릭 되었을 때 배경색을 red로 변경
test1c.onclick = function() {
  test1c.style.backgroundColor = "red";
}

// test1c 요소가 클릭되었을 때 글자색을 "white"로 변경
test1c.onclick = function() {
  test1c.style.color = "white";
}

// -> onclick 에 저장된 값이 덮어씌워지면서
// 이전 코드가 사라지는 문제 발생


// --------------------------------------------------

/* 표준 이벤트 모델 확인하기 */
const test2 = document.querySelector("#test2");

// 표준 이벤트 모델 작성법
// 요소.addEventListener("이벤트종류", 이벤트핸들러(함수));

test2.addEventListener("click", function() {

  // 투명도 1 (불투명) -> 0 (투명) 0.1씩 감소

  // 현재 test2의 투명도 확인하기
  let curr = test2.style.opacity;

  // 맨 처음에는 투명도 '' -> 1대입
  // console.log(curr);

  if(curr == '') {
    test2.style.opacity = 1;
    curr = 1;
  }

  // 투명도 0.1씩 감소
  test2.style.opacity = curr - 0.1;

  if(test2.style.opacity == 0) { // 완전히 투명해졌다면
    test2.style.opacity = 1; // 다시 불투명하게
  }


});

// test2 요소를 클릭하면 클릭 횟수 카운트
let count = 0;

test2.addEventListener("click", function(){

  count++; // 카운트 1 증가


  // 표준 이벤트 모델의 이벤트 핸들러(함수)안에서
  // this == 이벤트가 발생한 요소
  this.innerText = count; // -> this는 test2 임
});


// --------------------------------------------------

/* 입력한 색상으로 배경색 변경하기 */

// 내가 입력할 input 태그 요소 얻어오기
// 얻어온 input 요소의 내용(작성된 값) 얻어오기
const box = document.querySelector("#box3");
const input = document.querySelector("#input3");

// input 요소에 이벤트를 추가한다
// - 무슨 이벤트? input에서 키보드가 올라왔을 때
//   (이벤트핸들러)함수 안에 작성된 내용을 수행하겠다!
input.addEventListener("keyup", function(e) {  // e : 이벤트 객체(발생한 이벤트 정보를 담고 있는 객체)
  
  // 조건? 이벤트로써 감지된 키가 Enter일 때
  if(e.key == "Enter") {
    // 얻어온 색상(내용)으로 배경색을 줄 div요소 얻어오기
    // box의 배경색에 대입하기
    box.style.backgroundColor = input.value; // - 항상 오른쪽에 있는 걸 왼쪽에 대입
  } 
})


// box를 클릭하면 box가 가지고 있는 배경색을 alert 창에 출력
box.addEventListener("click", function(e) {

  // console.log(e); - 콘솔창에 div#box3 이름을 가진 target이 있음
  // e.target : 이벤트가 발생한 대상 요소
  // alert(`배경색 : ${e.target.style.backgroundColor}`); 
  alert(`배경색 : ${box.style.backgroundColor}`);
})

