import SignUpForm from "@/components/ui/AuthSignin";

function page() {
  return (
    <div className="w-[1440px] h-full flex justify-center">
      <div className="">
        <div className="text-white">
          <h1 className="text-5xl text-white font-[700] ">
            Host Game-Changing Hackathons with Vortexis
          </h1>
          <p className="text-3xl mt-3 w-[98%] text-center">
            Create, manage, and scale your hackathons — all from one intuitive
            dashboard.
          </p>
        </div>

        <div className="w-[814px] mx-auto mt-10">
          <SignUpForm type="organizers" />
        </div>
      </div>
    </div>
  );
}

export default page;
