import { useEffect } from "react";


const useTitle = title =>{
  useEffect(()=>{
    document.title = `${title} - The Dragon News`;
  },[title])
};

export default useTitle;