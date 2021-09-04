import * as React  from 'react';
import { LoadingOutlined } from "@ant-design/icons";
import {useEffect, useRef, useState} from "react";

export default function Spinner(){
  const [loaded, setLoaded] = useState(false);
  const beforeLoadPage = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    },2000);
  })

  return (
    <>
    {
      !loaded
      &&
      <div className="beforeLoadPage" ref={beforeLoadPage}>
        <LoadingOutlined
          style={{ fontSize: '64px', color: '#1ac5be'}}
        />
      </div>
    }
    </>
  )
};