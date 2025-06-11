import SignUpForm from "@/components/ui/AuthSignin";

function page() {
  return (
    <div className="w-[1440px] flex justify-center">
      <div className="">
        <div className="text-white">
          <h1 className="text-5xl text-white font-[700] ">
            Ready to Build Something Big?
          </h1>
          <p className="text-3xl mt-3 w-[98%] text-center">
            Join the Vortexis community, participate in hackathons, form teams,
            and build great ideas from start to finish.
          </p>
        </div>

        <div className="w-[814px] mx-auto mt-10">
          <SignUpForm type="participants" />
        </div>
      </div>
    </div>
  );
}

export default page;
