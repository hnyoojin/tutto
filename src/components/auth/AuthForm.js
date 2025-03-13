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
        await signInPage(userEmail, userPassword);
      } else if (signMode === "SignUp") {
        await signUpPage(userEmail, userPassword);
      }
    } catch (error) {
      switch (error.code) {
        case "auth/too-many-requests":
          let remainingTime = 100;

          const toastId = toast.info(
            `잠시 후 다시 시도해주세요. ${remainingTime}초 남았습니다.`,
            { autoClose: false }
          );
          const intervalId = setInterval(() => {
            remainingTime--;
            if (remainingTime > 0) {
              toast.update(toastId, {
                render: `Please try again later. ${remainingTime}s left.`,
                type: "info",
              });
            } else {
              toast.dismiss(toastId);
              clearInterval(intervalId);
            }
          }, 1000);
          break;
        default:
          toast.error("Chect your Email/Password.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div>
        <h2 style={{ color: "white" }}>
          {signMode === "SignIn" ? "Sign In" : "Sign Up"}
        </h2>

        <div style={{ paddingBottom: "5px" }}>
          <label style={{ color: "white", paddingRight: "5px" }}>Email</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>

        <div style={{ paddingBottom: "5px" }}>
          <label style={{ color: "white", paddingRight: "5px" }}>
            Password
          </label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          {signMode === "SignIn" ? "Sign In" : "Sign Up"}
        </button>

        <div>
          {signMode === "SignIn" ? (
            <p style={{ color: "white" }}>
              Don't have an account?
              <button type="button" onClick={() => setSignMode("SignUp")}>
                Sign Up
              </button>
            </p>
          ) : (
            <p style={{ color: "white" }}>
              Already have an account?
              <button type="button" onClick={() => setSignMode("SignIn")}>
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
