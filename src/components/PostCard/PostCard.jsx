import React, { useState } from "react";
import service from "../../Appwrite/postcards";
const PostCard = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A8",
    "#FFD700",
    "#AEEEEE",
    "#FFB0C1",
    "#F5F5C4"
];

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [color, setcolor] = useState("#fff");

  function formSubmit(e) {
    e.preventDefault();
    console.log(color);
    service.createPost(
      {
        title: title,
        description: description,
        color:color,
        // color: `bg-[${color}]`,
        top: 0,
        left: 0,
        id: "66be6f89000cba1ff2a7",
      } // to update to gernal  audiance id = admin id
    );

    settitle("");
    setdescription("");
    setcolor("#fff");
    console.log(e);
  }

  return (
    <>
      <form
        onSubmit={formSubmit}
        className="z-[15] w-1/4 px-10  py-3 absolute flex flex-col justify-center items-center gap-4 top-1/3 left-1/2 -translate-x-1/2 -tarnslate-y-1/2 bg-slate-950/50  "
      >
        <h3 className="font-thin text-yellow-500">Can you want to add card</h3>
        <input
          placeholder="title"
          required
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

        />
        
        <textarea
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="description"
          required
          rows={8}
          cols={34}
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />

        {/* <input
          required
          type="color"
          value={color}
          onChange={(e) => setcolor(e.target.value)}
        /> */}
        <div className=" grid grid-cols-4 gap-1 w-1/3">
          {colors.map((color) => (
            <div
              key={color}  
              style={{backgroundColor:color }}
              className=" aspect-square rounded   "
              onClick={()=>setcolor(color)}
            >
              
            </div>
          ))}
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add card</button>

      </form>
    </>
  );
};

export default PostCard;
