import styled from "styled-components";

interface IsCardBlock {
  vh: number;
}
const CardBlock = styled.div<IsCardBlock>`
  width: 300px;
  height: fit-content;
  position: relative;
  .CardInner {
    width: 300px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 16px 16px 16px 16px;
    .ImageWrapper {
      width: 300px;
      height: 300px;
      border-radius: 16px 16px 0 0;

      // 쌓임 맥락 issue
      isolation: isolate;
      overflow: hidden;
      img {
        width: 300px;
        height: 300px;
        border-radius: 16px 16px 0 0;
        object-fit: cover;
        transition: transform 0.3s linear;
        &:hover {
          transform: scale(1.04);
        }
      }
    }
    .ContentWrapper {
      height: fit-content;
      max-height: ${({ vh }) => `calc(${vh}px * 100 - 440px)`};
      background: rgba(20, 20, 20, 0.5);
      padding: 12px 20px 12px 20px;
      border-radius: 0 0 16px 16px;
      overflow: hidden;
      /* -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      } */
      &:hover {
        ul {
          display: block;
        }
        p {
          display: none;
        }
      }
      h3 {
        color: white;
        margin-bottom: 8px;
        overflow-x: auto;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      ul {
        display: none;

        list-style: none;
        padding: 0;

        max-height: ${({ vh }) => `calc(${vh}px * 100 - 504px)`};
        overflow-y: auto;
        li {
          color: #e6e6e6;
          margin-bottom: 2px;
          overflow-x: auto;
          -ms-overflow-style: none;
          &::-webkit-scrollbar {
            display: none;
          }
          a {
            font-size: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      p {
        color: #e6e6e6;
        font-size: 14px;
        white-space: nowrap;
        overflow: auto;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
          display: none;
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
  vh: number;
}

export default function Card({ doc, vh }: IsCard) {
  if (!doc)
    return (
      <CardBlock vh={vh}>
        <section className="CardInner"></section>
      </CardBlock>
    );

  const arr: string[] = [];
  doc.content
    .slice(0)
    .reverse()
    .forEach((element) => {
      arr.push(element.vocal);
    });
  const vocals = Array.from(new Set(arr));

  return (
    <CardBlock vh={vh}>
      <section className="CardInner">
        <div className="ImageWrapper">
          <img src={doc.url} alt="Album Cover" />
        </div>
        <article className="ContentWrapper">
          <h3>
            {doc.title} | {doc.content.length}
          </h3>
          <ul>
            {doc.content
              .slice(0)
              .reverse()
              .map((con: any) => {
                return (
                  <li key={con.title}>
                    <a href={con.url}>
                      {con.title} - {con.vocal}
                    </a>
                  </li>
                );
              })}
          </ul>
          <p className="VocalOnly">{vocals.join(", ")}</p>
        </article>
      </section>
    </CardBlock>
  );
}
