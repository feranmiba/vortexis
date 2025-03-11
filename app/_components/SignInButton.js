import { signInGithubAction, signInGoogleAction } from "../_lib/actions";

function SignInButton() {
  return (
    <div>
      <form action={signInGoogleAction}>
        <button className="border-primary-300 flex items-center gap-6 border px-10 py-4 text-lg font-medium">
          <img
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="24"
            width="24"
          />
          <span>Continue with Google</span>
        </button>
      </form>
      <form action={signInGithubAction}>
        <button className="border-primary-300 flex items-center gap-6 border px-10 py-4 text-lg font-medium">
          <img
            src="https://authjs.dev/img/providers/github.svg"
            alt="Google logo"
            height="24"
            width="24"
          />
          <span>Continue with Github</span>
        </button>
      </form>
    </div>
  );
}

export default SignInButton;
