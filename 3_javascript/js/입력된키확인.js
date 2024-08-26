// 문자열.toLowerCase() : 영어를 모두 소문자로 변경 (A -> a)
// 문자열.toUpperacase() : 영어를 모두 대문자로 변경 (a -> A)


// 화면에 존재하는 key 모두 얻어오기
//const divList = document.querySelectorAll("key"); 라고 해도 됨
const divList = document.getElementsByClassName("key");
console.log(divList);

// 문서(화면 전체)에서 키가 눌러지는 걸 감지했을 때
// HTML 문서 자체에서 일어나는 거라 문서 자체(document).이벤트 추가
document.addEventListener("keydown", function(e) {

  // console.log(e.key);

  // e.key.toLowerCase() -> q, w, e, r
  switch(e.key.toLocaleLowerCase()) {
    case 'q': divList[0].style.backgroundColor = "olive"; break;
    case 'w': divList[1].style.backgroundColor = "olive"; break;
    case 'e': divList[2].style.backgroundColor = "olive"; break;
    case 'r': divList[3].style.backgroundColor = "olive"; break;
    default : return; // 함수 종료
  }

  }
)

document.addEventListener("keyup", function(e) {

  // console.log(e.key);
  
  switch(e.key.toLocaleLowerCase()) {
    case 'q': divList[0].style.backgroundColor = "white"; break;
    case 'w': divList[1].style.backgroundColor = "white";break;
    case 'e': divList[2].style.backgroundColor = "white";break;
    case 'r': divList[3].style.backgroundColor = "white";break;
  }

  }
)

// -----------  더 간단한 방법  ---------------------------------------

const divList1 = document.getElementsByClassName("key1");
console.log(divList);

document.addEventListener("keydown", function(e) {

  let idx; // 인덱스 값을 저장할 변수
  switch(e.key.toLocaleLowerCase()) {
    case 'q': idx = 0; break;
    case 'w': idx = 1; break;
    case 'e': idx = 2; break;
    case 'r': idx = 3; break;
    default : return; // 함수 종료
  }

  // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
  keys[idx].style.backgroundColor = "deepPink";

  }
)

document.addEventListener("keyup", function(e) {

  switch(e.key.toLocaleLowerCase()) {
    case 'q': idx = 0; break;
    case 'w': idx = 1; break;
    case 'e': idx = 2; break;
    case 'r': idx = 3; break;
    default : return; // 함수 종료
  }

  keys[idx].style.backgroundColor = "white"; 

  }
);
