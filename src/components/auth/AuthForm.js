import { signUpPage, signInPage } from "../../firebase/auth";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AuthForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [signMode, setSignMode] = useState("SignIn");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (signMode === "SignIn") {
        // 로그인 함수 호출
        await signInPage(userEmail, userPassword);
      } else if (signMode === "SignUp") {
        // 회원가입 함수 호출
        await signUpPage(userEmail, userPassword);
      }
    } catch (error) {
      switch (error.code) {
        case "auth/too-many-requests":
          let remainingTime = 100; // 기본 대기 시간

          const toastId = toast.info(
            `잠시 후 다시 시도해주세요. ${remainingTime}초 남았습니다.`,
            { autoClose: false }
          );

          const intervalId = setInterval(() => {
            remainingTime--;

            if (remainingTime > 0) {
              toast.update(toastId, {
                render: `잠시 후 다시 시도해주세요. ${remainingTime}초 남았습니다.`,
                type: "info",
              });
            } else {
              toast.dismiss(toastId);
              clearInterval(intervalId);
            }
          }, 1000);
          break;
        default:
          toast.error("이메일이나 비밀번호를 다시 확인해주세요.");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div>
        <h2>{signMode === "SignIn" ? "로그인" : "회원가입"}</h2>

        <div>
          <label>이메일</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          {signMode === "SignIn" ? "로그인" : "회원가입"}
        </button>

        <div>
          {signMode === "SignIn" ? (
            <p>
              계정이 없으신가요?
              <button type="button" onClick={() => setSignMode("SignUp")}>
                회원가입
              </button>
            </p>
          ) : (
            <p>
              이미 계정이 있으신가요?
              <button type="button" onClick={() => setSignMode("SignIn")}>
                로그인
              </button>
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
