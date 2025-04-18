import Image from "next/image";

import person1 from "../../images/person 1.jpg";
import person2 from "../../images/person2.jpg";
import person3 from "../../images/person3.jpg";
import person4 from "../../images/person4.jpg";

type MeetOurAgentsProps = {};

const MeetOurAgents: React.FC<MeetOurAgentsProps> = () => {
  const data = [
    {
      id: 1,
      name: "Vincent Fuller",
      title: "Real Estate Agent , Country House Real Estate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...",
      img: person1,
    },
    {
      id: 2,
      name: "Brittany Watkins",
      title: "Company Agent , All American Real Estate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,... ",
      img: person2,
    },
    {
      id: 3,
      name: "Michelle Ramirez",
      title: "Company Agent , Modern House Real Estate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...",
      img: person3,
    },
    {
      id: 4,
      name: "Samuel Palmer",
      title: "Company Agent , Modern House Real Estate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...",
      img: person4,
    },
  ];

  return (
    <section className="py-[80px]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="max-w-[1110px] mx-auto">
          <div className="pb-[40px] ">
            <h2 className="font-normal text-center text-[35px] leading-[42px] text-[#000]">
              Meet Our Agents
            </h2>
            <p className="mt-3 text-center text-[16px] leading-[25px] text-accent">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </div>
          <div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 w-full gap-[1px]">
              {data.map(({ id, name, title, description, img }) => (
                <div
                  key={id}
                  className="p-[30px] bg-white text-center  mb-5 w-full
                  hover:-translate-y-[10px] transition duration-300 ease-in-out 
                  hover:shadow-[0_70px_70px_rgba(0,0,0,0.2)]"
                >
                  <div className="mb-[30px] ">
                    <Image
                      className="mx-auto rounded-full w-[150px] h-[150px]"
                      src={img}
                      alt={"person images"}
                    />
                  </div>

                  <div>
                    <h4 className="text-[15px]  leading-[25px] text-[#00aeff]">
                      <strong> {name}</strong>
                    </h4>
                    <h2 className="text-[15px] mt-1 leading-[25px] text-secondary">
                      <strong> {title}</strong>
                    </h2>
                    <p className="text-neutral py-[20px]">{description}</p>
                    <button className="text-[15px]  leading-[25px] text-[#00aeff]">
                      <strong>View Profile</strong>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MeetOurAgents;
