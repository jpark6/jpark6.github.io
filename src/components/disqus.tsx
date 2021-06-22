import * as React from 'react'
import {useEffect} from 'react'

export default function Disqus() {

    useEffect(() => {
      if(document == undefined) {
          return;
      }
      const d = document
      const s = d.createElement('script')
      s.src = 'https://jpark6-github-io.disqus.com/embed.js';
    s.setAttribute('data-timestamp', (new Date()).toISOString());
    (d.head || d.body).appendChild(s);
    })

    return (
        <div id="disqus_thread" className="contentReply" />
    )
}