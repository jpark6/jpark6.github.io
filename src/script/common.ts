import { navigate } from "gatsby"

/**
 * card 클릭시 해당 게시글로 이동함.
 * @param link - 이동할 링크
 */
export const goPost = (link: string) => {
    navigate(link)
}
/**
 * 날짜 형식 변환
 * yyyy-mm-dd -> yyyy년 mm월 dd일
 * @param str_date - 날짜 문자열
 * @returns - 변환된 날짜
 */
export const formatDate = (str_date: string): string => {
  if(str_date.length < 10) return str_date
  const str_arr = str_date.substr(0,10).split("-")
  if(str_arr.length !== 3) return str_date
  return [str_arr[0], "년 ", str_arr[1], "월 ", str_arr[2], "일"].join("")
}


