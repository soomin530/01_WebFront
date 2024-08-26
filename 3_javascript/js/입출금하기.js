const output = document.getElementById("output");
const amount = document.getElementById("amount");

let balance = 10000;
const password = '1234';

output.innerText = balance;

function deposit() {
	const amount1 = Number(amount.value);
  // if(amount.value.length == 0) 이라고 써도 됨
	if(amount1 == ""){
		alert("금액을 입력하세요");
	} else {
		balance = balance + amount1
		output.innerText = balance;
		amount.value = "";
	}
}

function withdrawal() {
  const amount2 = Number(amount.value);

	if(amount.value == ""){
		alert("금액을 입력해주세요");

	} else {
		const pw = prompt("비밀번호를 입력하세요.");

		// prompt 에서 취소 누르면 null 반환
		console.log("password", pw);
	
		if(pw == null) { // 취소를 누른 경우
			alert("출금을 취소하셨습니다");
	
		} else { // 확인을 누른 경우
      // if(password == pw)
			if(pw == '1234') {
				alert("비밀번호 일치");
	
				// 출금할 금액이 잔액보다 큰 경우 처리 .
				if(balance < amount2) {
					alert("잔액보다 큰 금액을 출금할 수 없습니다")
	
				} else { // 출금한 금액이 잔액보다 작거나 같은 경우 (출금 처리 가능)
					// 잔액 balance에서 내가 작성한 금액 차감
					balance = balance - amount2;
	
					// 화면 잔액 변경
					output.innerText = balance;
	
					// 화면에 입력된 금액 없애기
					amount.value = "";

          alert(`${amount2}원이 출금되었습니다. 남은 잔액 ${balance}`);
				}
	
	
			} else {
				alert("비밀번호 불일치");
			}
		}
	}
}