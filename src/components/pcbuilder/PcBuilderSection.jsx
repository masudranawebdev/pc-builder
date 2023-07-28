import { FiCpu, FiMonitor } from "react-icons/fi";
import { BsMotherboard } from "react-icons/bs";
import { ImPowerCord } from "react-icons/im";
import { MdSdStorage, MdStorage } from "react-icons/md";
import PcBuilderCard from "./PcBuilderCard";

const PcBuilderSection = () => {
  const cpu = <FiCpu />;
  const mothreboard = <BsMotherboard />;
  const powerSupply = <ImPowerCord />;
  const storage = <MdSdStorage />;
  const ram = <MdStorage />;
  const monitor = <FiMonitor />;
  const categories = [
    {
      id: 1,
      icon: cpu,
      category: "processors",
    },
    {
      id: 2,
      icon: mothreboard,
      category: "motherboard",
    },
    {
      id: 3,
      icon: powerSupply,
      category: "power supply",
    },
    {
      id: 4,
      icon: ram,
      category: "ram",
    },
    {
      id: 5,
      icon: storage,
      category: "storage",
    },
    {
      id: 6,
      icon: monitor,
      category: "monitor",
    },
  ];
  return (
    <div className="px-1 md:main-container w-9/12 mx-auto bg-white my-10 py-5">
      <div className="grid grid-cols-1 gap-3">
        {categories.map((category) => (
          <PcBuilderCard key={category.id} category={category} />
        ))}
      </div>
      <div className="bg-primary w-[200px] uppercase ml-auto text-center py-2 rounded text-white mt-10">
        <button disabled>pc build complete</button>
      </div>
    </div>
  );
};

export default PcBuilderSection;
