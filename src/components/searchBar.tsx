import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function searchBar() {
  const openGitRepository = () => {
    window.open("https://github.com/jpark6", "_github")
  }
  const mailToMe = () => {
    location.href = "mailto:qkstjr09@gmail.com"
  }
  return (
    <div className="searchBar">
      <input type="text" placeholder="게시글 검색"/>
      <button type="button">
        <FontAwesomeIcon
          icon={faSearch}
        />
      </button>
      <button type="button">
        <FontAwesomeIcon
          onClick={openGitRepository}
          icon={faGithub}
          size="2x"
        />
      </button>
      <button type="button">
        <FontAwesomeIcon
          onClick={mailToMe}
          icon={faEnvelope}
          size="2x"
        />
      </button>
    </div>
  )
}