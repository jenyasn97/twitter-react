import React from "react";
import styled from "styled-components";



const Header = styled.div`
  display:flex;
  align-items: flex-end;
  justify-content: space-between;

  h1{
    font-size: 26px;
  }

  h2{
    font-size: 1.2rem;
    color: grey;
  }
`

function AppHeader({ liked, allPosts }) {
  return (
    <Header>
      <h1>John Sultan</h1>
      <h3>{allPosts} записей, из них понравилось {liked}</h3>
    </Header>
  )
}
export default AppHeader;