import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
       <div className="text-center w-full ">
        <h1 className={`${styles.opecInfoText}`}>[ TECH ]</h1>
      </div>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");