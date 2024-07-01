// 필요한 모듈과 함수를 가져옵니다.
import { BaseError } from "../../config/error.js"; // 사용자 정의 오류 클래스
import { status } from "../../config/response.status.js"; // 응답 상태 코드
import { signinResponseDTO } from "../dtos/user.dto.js"; // 사용자 로그인 응답 데이터 전송 객체
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao.js"; // 사용자 DAO 함수들

// 새로운 사용자를 등록하는 비동기 함수 정의
export const joinUser = async (body) => {
    // body 객체에서 생년월일 정보를 추출하여 Date 객체 생성
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    // body 객체에서 사용자 선호도를 추출하여 변수에 저장
    const prefer = body.prefer;

    // addUser 함수를 호출하여 새로운 사용자 데이터를 데이터베이스에 추가하고 결과를 저장
    const joinUserData = await addUser({
        'email': body.email,      // 사용자 이메일
        'name': body.name,        // 사용자 이름
        'gender': body.gender,    // 사용자 성별
        'birth': birth,           // 사용자 생년월일
        'addr': body.addr,        // 사용자 주소
        'specAddr': body.specAddr,// 사용자 상세 주소
        'phone': body.phone       // 사용자 전화번호
    });

    // 만약 joinUserData가 -1이면 이메일이 이미 존재함을 의미하므로 오류를 발생시킴
    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST); // 이메일 중복 오류
    } else {
        // 이메일이 중복되지 않은 경우
        // 사용자의 선호도를 설정
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]); // 각 선호도를 설정
        }
        // 사용자 정보와 선호도를 가져와서 signinResponseDTO를 호출하여 응답 객체를 반환
        return signinResponseDTO(
            await getUser(joinUserData), // 사용자 정보
            await getUserPreferToUserID(joinUserData) // 사용자 선호도
        );
    }
}
