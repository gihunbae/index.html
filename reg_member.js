var ipId;
var ipPw;
var ipPw_re;
var ipUser_name;
var ipEmail;
var ipBirth_y;
var ipBirth_m;
var ipBirth_d;
var ipSexes;    // 주의
var ipTel_1;
var ipTel_2;
var ipTel_3;

var id;
var pw;
var pw_re;
var userName;
var email;
var birth_y;
var birth_m;
var birth_d;
var tel_1;
var tel_2;
var tel_3;

var sexes;
var sex;

window.onload = function(){
    ipId=document.getElementById("id");
    ipPw=document.getElementById("pw");
    ipPw_re=document.getElementById("pw_re");
    ipUser_name=document.getElementById("user_name");
    ipEmail=document.getElementById("email");
    ipBirth_y=document.getElementById("birth_y");
    ipBirth_m=document.getElementById("birth_m");
    ipBirth_d=document.getElementById("birth_d");
    ipTel_1=document.getElementById("tel_1");
    ipTel_2=document.getElementById("tel_2");
    ipTel_3=document.getElementById("tel_3");

    ipSexes=document.getElementsByName("sex");  // 주의
}

function check(){  
    id=ipId.value;
    pw=ipPw.value;
    pw_re=ipPw_re.value;
    userName=ipUser_name.value;
    email=ipEmail.value;
    birth_y=ipBirth_y.value;
    birth_m=ipBirth_m.value;
    birth_d=ipBirth_d.value;
    tel_1=ipTel_1.value;
    tel_2=ipTel_2.value;
    tel_3=ipTel_3.value;
    
    for(var i=0;i<ipSexes.length;i++){
        // ipSexes[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻
        if(ipSexes[i].checked == true){ 
            sex = ipSexes[i].value; // 해당 라디오 버튼의 값을 변수에 저장
        }
    }

    var userInfo = 
        "아이디: " + id + "\n"
        // +"패스워드: "+pw+"\n"
        // +"pw_re: "+pw_re+"\n"
        + "이름:" + userName + "\n"
        + "이메일: " + email + "\n"
        + "생년월일: " + birth_y + "/" + birth_m + "/" + birth_d + "\n"
        // +"birth_m: "+birth_m+"\n"
        // +"birth_d: "+birth_d+"\n"
        + "전화번호: " + tel_1 + "-" + tel_2 + "-" + tel_3 + "\n"
        // +"tel_2: "+tel_2+"\n"
        // +"tel_3: "+tel_3+"\n"
        + "성별: " + sex;

    alert(userInfo);

    if(checkId()&&checkPw()&&checkPw_re()&&checkEqualPwAndPwRe()&&checkUserName()&&checkEmail()){
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}

function checkId(){
    if(id.length>=4 && id.length<=12){
        console.log("아이디 확인.");
        return true;
    } else {
        console.log("아이디를 입력해주세요.");
        return false;
    }
}
function checkPw(){
    if(pw.length>=4 && pw.length<=12){
        console.log("패스워드 확인.");
        return true;
    } else {
        console.log("패스워드를 입력해주세요.");
        return false;
    }
}
function checkPw_re(){
    if(pw_re.length>=4 && pw_re.length<=12){
        console.log("패스워드 재입력 확인");
        return true;
    } else {
        console.log("패스워드 재입력해주세요.");
        return false;
    }
}
function checkEqualPwAndPwRe(){
    if(pw == pw_re){
        console.log("비번,비번확인 같음");
        return true;
    } else {
        console.log("비번,비번확인 다름");
        return false;
    }
}
function checkUserName(){
    if(userName.length>=4 && userName.length<=12){
        console.log("이름 확인");
        return true;
    } else {
        console.log("이름 입력해주세요.");
        return false;
    }
}
function checkEmail(){
    if(email.length>=4 && email.length<=12){
        console.log("이메일 확인");
        return true;
    } else {
        console.log("이메일을 입력해주세요.");
        return false;
    }
}
