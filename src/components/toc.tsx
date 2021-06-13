import * as React from 'react'
interface Item {
  url: string
  title: string
  items?: Item[]
}
interface TocProps {
  toc: {
    items?: Item[]
  }
}

/**
 * 현재 url상의 주소의 #뒤의 내용과 toc item.title 비교
 * 같을 경우 true 반환
 * @param title
 */
const scrollHandler = () => {
}

export default function Toc({toc}:TocProps) {
  return (
    <aside>
      <TocElement toc={toc} />
    </aside>
  )
}
const TocElement = ({toc}:TocProps) =>  (
  <ul>
    {
      toc.items && toc.items.map(item => (
        <li key={item.title}>
          <a
            href={item.url}
          >{item.title}</a>
          {item.items && <TocElement toc={item} />}
        </li>
      ))
    }
  </ul>
)