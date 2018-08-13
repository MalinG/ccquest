import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

import logo from "../../images/logo.svg";

const HeaderWrapper = styled.div`
  background: #000000;
  margin-bottom: 1.45rem;
  display: flex;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? "65vh" : "45vh")};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  flex: 1;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SiteTitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin: 0 20px;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export default class Header extends Component {
  render() {
    const { data, location } = this.props;

    return (
      <HeaderWrapper
        isHome={location.pathname === "/"}
      >
        <HeaderContainer>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                width: '100px',
                height: '100px'
              }}
            >
              <img src={logo} alt="Cupcake Quest Logo" />
            </Link>
            <SiteTitle>
              {data.site.siteMetadata.title}
            </SiteTitle>
        </HeaderContainer>
        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.4
          }}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
    );
  }
}
