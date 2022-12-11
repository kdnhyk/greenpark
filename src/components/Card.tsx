import styled from "styled-components";

const CardBlock = styled.div`
  width: 300px;
  .CardInner {
    width: 300px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    &:hover {
    }
    .ImageWrapper {
      width: 300px;
      height: 300px;

      margin: 0;
      padding: 0;
      img {
        width: 300px;
        height: 300px;
        border-radius: 16px 16px 0 0;
        object-fit: cover;
      }
    }
    .ContentWrapper {
      height: calc(100vh - 440px);
      background: rgba(20, 20, 20, 0.5);
      padding: 20px;
      border-radius: 0 0 16px 16px;
      overflow-y: auto;
      h3 {
        margin-bottom: 10px;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          color: #bfbfbf;
          margin-bottom: 2px;
          a {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
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
        <div className="CardInner"></div>
      </CardBlock>
    );

  return (
    <CardBlock>
      <div className="CardInner">
        <div className="ImageWrapper">
          <img src={doc.url} alt="Album Cover" />
        </div>
        <div className="ContentWrapper">
          <h3>
            {doc.title} | {doc.content.length}
          </h3>
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
      </div>
    </CardBlock>
  );
}
