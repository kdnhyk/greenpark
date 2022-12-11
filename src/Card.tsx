import styled from "styled-components";
import React from "react";

const CardBlock = styled.div`
  width: 300px;
  /* background: rgba(20, 20, 20, 0.5); */
  /* border: 1px solid white; */
  .ImageWrapper {
    width: 300px;
    height: 300px;
    margin: 0;
    padding: 0;
    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }
  .ContentWrapper {
    height: calc(100vh - 420px);
    background: rgba(20, 20, 20, 0.5);
    padding: 20px;
    h2 {
      margin-bottom: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        color: #bfbfbf;
      }
    }
  }
`;
interface IsContent {
  title: string;
  vocal: string;
  url: string;
}
interface IsAlbum {
  title: string;
  url: string;
  createdTime: any;
  content: IsContent[];
}
interface IsCard {
  doc?: IsAlbum;
}

export default function Card({ doc }: IsCard) {
  if (!doc)
    return (
      <CardBlock>
        <div className="ImageWrapper"></div>
      </CardBlock>
    );

  return (
    <CardBlock>
      <div className="ImageWrapper">
        <img src={doc.url} alt="image" />
      </div>
      <div className="ContentWrapper">
        <h2>{doc.title}</h2>
        <ul>
          {doc.content.map((con: any) => {
            return (
              <li key={con.title}>
                <a href={con.url}>
                  {con.title} - {con.vocal}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </CardBlock>
  );
}
