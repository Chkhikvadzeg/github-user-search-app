import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function SearchResult({ search, isBlack, setIsNoResult, setIsLoading, isNoResult }) {
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios?.get(`https://api.github.com/users/${search}`)
        setIsLoading(false)
        setSearchResult(data)
        setIsNoResult(false)
      } catch {
        setIsLoading(false)
        setIsNoResult(true)
        setSearchResult([])
      }
    }
    fetchData();
  }, [search, setIsLoading, isNoResult, setIsNoResult])
  const createdAt = searchResult?.created_at?.split('T')[0].split('-')
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  return (
    !isNoResult && (
      <Container isBlack={isBlack} >
        <User>
          <img src={searchResult.avatar_url} alt="avatar" />
          <Name isBlack={isBlack}>
            <div>
              <h2>{searchResult.name}</h2>
              <p>@{searchResult.login}</p>
            </div>
            <span>Joined {createdAt && createdAt[2]} {createdAt && months[createdAt[1] - 1]} {createdAt && createdAt[0]}</span>
          </Name>
        </User>
        {searchResult.bio && <Bio isBlack={isBlack}>{searchResult.bio}</Bio>}
        <Stats isBlack={isBlack}>
          <div>
            <p>Repos</p>
            <h3>{searchResult.public_repos}</h3>
          </div>
          <div>
            <p>Followers</p>
            <h3>{searchResult.followers}</h3>
          </div>
          <div>
            <p>Following</p>
            <h3>{searchResult.following}</h3>
          </div>
        </Stats>
        <Contact isBlack={isBlack}>
          <div>
            <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" fill={`${isBlack ? '#FFFFFF' : '#4B6A9B'}`} /></svg>
            <p>{searchResult.location ? searchResult.location : 'Not Available'}</p>
          </div>
          <div>
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill={`${isBlack ? '#FFFFFF' : '#4B6A9B'}`}><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" /><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" /></g></svg>
            <a href={searchResult.html_url} target="_blank" rel="noreferrer">{searchResult.html_url}</a>
          </div>
          <div>
            <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill={`${isBlack ? '#FFFFFF' : '#4B6A9B'}`} /></svg>
            <p>{searchResult.twitter_username ? searchResult.twitter_username : 'Not Available'}</p>
          </div>
          <div>
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill={`${isBlack ? '#FFFFFF' : '#4B6A9B'}`}><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" /></g></svg>
            <p>{searchResult.company ? searchResult.company : 'Not Available'}</p>
          </div>
        </Contact>
      </Container >
    )
  )
}


const Container = styled.div`
  background: ${props => props.isBlack ? '#1E2A47' : '#FEFEFE'};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  padding: 32px 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    padding: 40px;
    gap: 30px;
  }

  @media screen and (min-width: 1024px) {
    padding: 48px;
  }
`;

const User = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    gap: 40px;

    img {
      width: 117px;
      height: 117px;
    }
  }

`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.isBlack ? '#FFFFFF' : '#222731'};

    @media screen and (min-width: 768px) {
      font-size: 26px;
      line-height: 39px;
    }
  }

  p {
    font-size: 13px;
    line-height: 19px;
    color: #0079FF;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  span {
    font-size: 13px;
    line-height: 19px;
    color: ${props => props.isBlack ? '#FFFFFF' : '#697C9A'};

    @media screen and (min-width: 768px) {
      font-size: 15px;
      line-height: 22px;
    }

    @media screen and (min-width: 1024px) {
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
  }
`;

const Bio = styled.p`
  font-size: 13px;
  line-height: 25px;
  color: ${props => props.isBlack ? '#FFFFFF' : '#4B6A9B'};

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

const Stats = styled.div`
  padding: 18px 14px;
  background: ${props => props.isBlack ? '#141D2F' : '#F6F8FF'};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: ${props => props.isBlack ? '#FFFFFF' : '#2B3442'};
    font-size: 11px;
    line-height: 16px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 32px;

    div {
      font-size: 13px;
      line-height: 19px;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      font-size: 22px;
      line-height: 33px;
    }
  }
`;

const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 13px;
    line-height: 19px;
    color: ${props => props.isBlack ? '#FFFFFF' : '#4B6A9B'};

    svg {
      width: 20px;
      height: 20px;
    }

    a {
      text-decoration: none;
      color: ${props => props.isBlack ? '#FFFFFF' : '#4B6A9B'};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    font-size: 15px;
    line-height: 22px;
  }
`;