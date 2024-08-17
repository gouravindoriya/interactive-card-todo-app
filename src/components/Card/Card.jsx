import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FcMenu } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
const Card = ({ color = "bg-white",title, description,id, refer,clickhandling}) => {
  const [Visiblebtn, setVisiblebtn] = useState(false);

  // let X,Y;  // let be avoid now ... later on disscussed
  // useEffect(()=>{
  // // update the final position of the card componemt by onDragEnd event
    
  // },[X,Y])

  return (
    <motion.div
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      drag
      dragConstraints={refer}
      whileDrag={{ scale: 1.1 }}
      // onDragEnd={(e)=>{
      //    X=e.x;
      //    Y=e.y;
      // }}
      className={` hover:z-10 w-60 h-72  rounded bg-slate-950 p-5 m-2 border border-white absolute overflow-hidden`}
    >
      <div className="text-white flex h-4 justify-between items-center">
        <FcMenu
          size="1.3em"
          onClick={() => {
            setVisiblebtn(!Visiblebtn);
          }}
        />
        {Visiblebtn ? (
          <div className="flex justify-between items-center gap-4">
            <CiEdit size="1.3em" />
            <MdDeleteOutline size="1.3em" id={id} onClick={(e)=>clickhandling(e)} />
          </div>
        ) : (
          title.substring(0, 18)
        )}
      </div>

      <p className="text-xs mt-5 font-mono">{description}</p>

      <footer
        // className={`absolute bottom-0 text-center py-2 w-full  left-0 bg-[#893FF3]`}
        className={`absolute bottom-0 text-center py-2 w-full  left-0 ${color}`}
        style={{background:color}}
      >
       {color}
       
      </footer>
    </motion.div>
  );
};

export default Card;
