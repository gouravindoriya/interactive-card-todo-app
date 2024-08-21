import React, { useEffect, useRef, useState } from 'react';
import Card from '../Card/Card';
import service from '../../Appwrite/postcards';
import PostCard from '../PostCard/PostCard';
import { useSelector } from 'react-redux';
const Foreground = () => {
  const ref = useRef(null);
  const [posts, setPosts] = useState([]);
  const [displayform, setdisplayform] = useState(false)

  const userdata = useSelector((state) => state.auth.userData);
  console.log(userdata)
  
  const fetchData = async () => {
      // let post = await service.getPosts("66be6f89000cba1ff2a7"); // fetch by userid
      let post = await service.getPosts(userdata["$id"]); // fetch by userid

      setPosts(post.documents);
       console.log(post.documents)
      // console.log(post.documents[0].$id)
    };
  useEffect(() => {
  
     
    fetchData();
  }, [displayform]);

  function deletepost(e){
    console.log(e.target.id);
    console.log("delete function executed")
    service.delete(e.target.id)
    fetchData();
  }

  return (
    <div ref={ref} className="relative w-full left-0 top-0 h-full z-[4] text-white bg-slate-600/50 overflow-hidden">
      <span onClick={()=>setdisplayform(!displayform)} className='absolute top-4 right-5 z-[1000] rounded-full cursor-context-menu leading-none px-4 py-2 hover:bg-zinc-300/50 text-3xl font-mono from-slate-100 font-extrabold'>+</span>
      {displayform &&<PostCard/>}
      {
        posts.map((item, index) => (
          <Card 
            key={index}  // It's a good practice to add a unique key prop when rendering lists in React
            color={item.color} 
            description={item.description} 
            title={item.title}  
            refer={ref} 
            id={item.$id}
            clickhandling={(e)=>{deletepost(e)}}
          />
        ))
      }
    </div>
  );
}

export default Foreground;
