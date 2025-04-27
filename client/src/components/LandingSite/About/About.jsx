import { TeamCard } from "./TeamMember";
function About() {

  const ahad = {
    name: "Aditya Raj",
    designation: "Front-end Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const danish = {
    name: "Vishal Kumar",
    designation: "Back-end Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const abubakar = {
    name: "Aditya Raj",
    designation: "Back-end Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const muneeb = {
    name: "Vishal Kumar",
    designation: "Front-end Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const arsal = {
    name: "Aditya Raj",
    designation: "Database",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={ahad} />
        <TeamCard member={danish} />
        <TeamCard member={abubakar} />
        <TeamCard member={arsal} />
        <TeamCard member={muneeb} />
      </div>
    </>
  );
}
export { About };
