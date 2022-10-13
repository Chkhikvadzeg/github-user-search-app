import styled from "styled-components";
import SearchIcon from "../assets/icon-search.svg";

export default function Search({ isBlack, setSearch, isNoResult }) {
  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  }
  return (
    <Form onSubmit={submitHandler} isBlack={isBlack}>
      <label htmlFor="search">
        <img src={SearchIcon} alt="Search" />
        <input defaultValue='chkhikvadzeg' type="search" id="search" placeholder="Search GitHub username…" />
      </label>
      {isNoResult && <span>No results</span>}
      <Button type="submit" isBlack={isBlack}>Search</Button>
    </Form>
  )
}

const Form = styled.form`
  background: ${props => props.isBlack ? '#1E2A47' : '#FEFEFE'};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  height: 60px;
  padding: 0 7px 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 36px 0 16px;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px; 
    width: 100%;

    img {
      width: 20px;
      aspect-ratio: 1;
    }

    input {
      background: none;
      border: none;
      caret-color: #0079FF;
      width: 100%;
      color: ${props => props.isBlack ? '#FFFFFF' : '#222731'};

      // Remove default X button
      &::-ms-clear { display: none; width : 0; height: 0; }
      &::-ms-reveal { display: none; width : 0; height: 0; }
      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration { display: none; }

      &::placeholder {
        font-size: 13px;
        line-height: 25px;
        color: ${props => props.isBlack ? '#FFFFFF' : '#4B6A9B'};
      }

      &:focus {
        outline: none;
      }
    }

  }

  span {
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #F74646;
    white-space: nowrap;
  }

  @media screen and (min-width: 768px) {
      gap: 24px;  
      margin: 36px 0 24px;
      height: 70px;
      padding: 0 10px 0 32px;


      img {
        width: 24px;
      }

      input {
        font-size: 18px;
        line-height: 25px;
      }
    }
`;

const Button = styled.button`
  padding: 12px 16px;
  background: #0079FF;
  border-radius: 10px;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  border: 0;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #60ABFF;
  }
  
  @media screen and (min-width: 768px) {
    padding: 12px 24px;
  }
`;  