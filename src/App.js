import React, { useState } from "react";
import "./styles.css";

var songList = [
  {
    party: [
      {
        Name: "Iko Iko",
        Spotify:
          "https://open.spotify.com/track/4qlBvxOwFy6og73eik75Ro?si=9BsKIxRySm6HbeDv5s5XdQ",
      },
      {
        Name: "Banana(feat.Shaggy)",
        Spotify:
          "https://open.spotify.com/track/13OdVDwHdPlGkKHyjPoadB?si=_jXV4QQaQiC_AZse5ROFNQ",
      },
      {
        Name: "Ice Cream(with Selena Gomez)",
        Spotify:
          "https://open.spotify.com/track/2k0e6dy1tx7fE6m126Ydfw?si=BHP-C40fR3a73ZH3STVgCg",
      },
      {
        Name: "Alone,Pt.II By Alan Walker",
        Spotify:
          "https://open.spotify.com/track/0bMbDctzMmTyK2j74j3nF3?si=6X0pm-3iRUWnBsxW0xkK6w",
      },
      {
        Name: "Senorita By Shawn Mendes",
        Spotify:
          "https://open.spotify.com/track/0TK2YIli7K1leLovkQiNik?si=zWqIbPaURAmbvDcEsW78ig",
      },
    ],
    hiphop: [
      {
        Name: "Be the One(feat.MORGAN,Digga D & TIKE)",
        Spotify:
          "https://open.spotify.com/track/1kXHqvq1R8dkx1Mm52nH9g?si=nU-aJuaBTcS8O3dy9si8CA",
      },
      {
        Name: "Way Out(feat.Big Sean)",
        Spotify:
          "https://open.spotify.com/track/6rLi6PyWXu1rPlShuIZpj6?si=f2uXx3lFR56rtgYv_MIC9Q",
      },
      {
        Name: "No Love Lost By Blxst",
        Spotify:
          "https://open.spotify.com/track/5uf4BlmqOUGelDL6hsZ5B1?si=30d-LecQSeSAbVYWqy7QYA",
      },
      {
        Name: "The Emo Song(feat.Sihk)",
        Spotify:
          "https://open.spotify.com/track/6EVtAgOJw0NHlLXltpn41u?si=fSCiPI0gRseBktC48IDlsQ",
      },
      {
        Name: "Suck To Be You",
        Spotify:
          "https://open.spotify.com/track/7A7SoEsLBOjOhIZu7UkOsl?si=LBcJ_2KaT6WsyDruOeHMzg",
      },
    ],
    rock: [
      {
        Name: "Mars By YUNGBLUD",
        Spotify:
          "https://open.spotify.com/track/4ZSGp4CmOIeNSpuLLEGumA?si=Aaz2wdV1Qp-ishSCHemMJg",
      },
      {
        Name: "Take Me Higher By Antartick",
        Spotify:
          "https://open.spotify.com/track/7tOx9NFURYAA8od0uLPKaQ?si=WGWOokYvS8O-Ie5zy2GP-w",
      },
      {
        Name: "Lost feat.OMB Peezy",
        Spotify:
          "https://open.spotify.com/track/01wBD2H7YYrM49YVblqrtR?si=g7xpkBrnRzyuz4jlEqD4nw",
      },
      {
        Name: "Shame Shame By Foo Fighters",
        Spotify:
          "https://open.spotify.com/track/0wGv595Z2XDF9ZFbrbQqqH?si=98Mmltf-Q4movE0_QJt_jg",
      },
      {
        Name: "Tonight(feat.iann dior)",
        Spotify:
          "https://open.spotify.com/track/6Tsro9u5bnTJxFjuzuNA7R?si=jNFghz5zRUK9QyTqObd1qQ",
      },
    ],
    instrumental: [
      {
        Name: "Let Go By Chama Wijnen",
        Spotify:
          "https://open.spotify.com/track/2gixQXOUSRnv7yBuplbgAK?si=NNFQETZ-SgS0_7z3WUGdJA",
      },
      {
        Name: "The Forest By Mont Real",
        Spotify:
          "https://open.spotify.com/track/4NId2w4cZ9D61Stbr79isY?si=ipjB13vlTP-UuvWqIIDsNQ",
      },
      {
        Name: "Swallows Flight By Josephine Flight",
        Spotify:
          "https://open.spotify.com/track/6JJBMI3G7UaClhI9qYs2Xw?si=RvgsE9CDQoyFT2-RkgiCCQ",
      },
      {
        Name: "Silueta By Rafa EI Tachuela",
        Spotify:
          "https://open.spotify.com/track/58kxJYi95CiXjVPFlAMOmH?si=X99fUCZGRvu-IZ_Ay_zb-g",
      },
      {
        Name: "Stacks of Wax By FreakBeats",
        Spotify:
          "https://open.spotify.com/track/7snLXEObgQUlMoDpltzASW?si=ChdzphULSbGeDRaTO8KfzA",
      },
    ],
    jazz: [
      {
        Name: "When I Fall in Love By Michael Buble",
        Spotify:
          "https://open.spotify.com/track/2b7XO47o117TqSfUd4kTQT?si=lFMP022nSDuPXGi76gkZ5A",
      },
      {
        Name: "Guinnevere",
        Spotify:
          "https://open.spotify.com/track/5AIWxJgzPpYukbUDXVY7qT?si=r3QXSOotR_yC1Dn5QpBCaw",
      },
      {
        Name: "Festival",
        Spotify:
          "https://open.spotify.com/track/2lXFtsU8naRn2mC0DACJEl?si=bGq_V42_Ruipj6gCErj0sQ",
      },
      {
        Name: "I Did It For You",
        Spotify:
          "https://open.spotify.com/track/4xWLo3R0jjTVOdmtjC5MKI?si=Si_RvyyMSm-WwWITtKfgJQ",
      },
      {
        Name: "My Funny Valentine",
        Spotify:
          "https://open.spotify.com/track/3CsGqy0ajJSqIDBe8fWJWt?si=DU92jWvLQ5m8bOBdxUiyxQ",
      },
    ],
  },
];

let greyColor = "#9ca3af";
let whiteColor = "#f3f4f6";

export default function App() {
  let [songGenre, setSongGenre] = useState("rock");

  function onClickHandler(key) {
    setSongGenre(key);
  }

  return (
    <div className="App">
      <h1
        style={{
          fontSize: "60px",
        }}
      >
        Music Recommendations
      </h1>
      <h4>Click on Genre to get My recommended Songs</h4>
      <div>
        <ul
          style={{
            listStyle: "none",
            display: "inline-block",
          }}
        >
          {Object.keys(songList[0]).map((genre) => {
            return (
              <li
                key={genre}
                style={{
                  display: "inline",
                }}
              >
                <button
                  className="song-btn"
                  onClick={() => onClickHandler(genre)}
                >
                  {genre}
                </button>
                {"    "}
              </li>
            );
          })}
        </ul>
      </div>
      <hr></hr>
      <div>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          {songList[0][songGenre].map((song, index) => {
            return (
              <div className="song-list-div">
                {song.Name}
                <a href={song.Spotify}>Play in Spotify</a>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
