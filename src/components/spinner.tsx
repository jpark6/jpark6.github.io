import * as React  from 'react';
import {CircularProgress} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";

export default function Spinner(){
  const [loaded, setLoaded] = useState(false)
  const beforeLoadPage = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    },1000)
  })

  return (
    <>
    {
      !loaded
      &&
      <div className="beforeLoadPage" ref={beforeLoadPage}>
        <CircularProgress />
      </div>
    }
    </>
  )
};