import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring 2026 Recital — Program Notes",
};

const songs = [
  {
    title: "The Bends",
    artist: "Radiohead",
    notes: `This is the top crust of the Radiohead sandwich that is our show tonight, and it is also the title track off of their second album. After the huge success of Creep on Pablo Honey, Radiohead returned in 1994 with a stunningly great album. From start to finish there's not a bad song on the record, and it has such exciting guitar heroics throughout. A few years ago after we had so much fun doing their third album OK Computer, a bunch of us went ahead and learned most of this album too, and we wanted to feature a few of our favorite songs tonight.`,
  },
  {
    title: "Wave of Mutilation",
    artist: "The Pixies",
    notes: `This was the first Pixies song I ever heard. The UK surf version was released on the soundtrack for the movie Pump Up the Volume, but the faster and harder version is on the album Doolittle. We are doing a hybrid version tonight that starts with the chill vibe of the UK surf but then picks up in the second half. The OG lineup of the Pixies put out five albums in the late '80s and early '90s. It's hard to pick a favorite — they are all so good!`,
  },
  {
    title: "Yer So Bad",
    artist: "Tom Petty",
    notes: `This is one of the standout tracks off of his 1989 album Full Moon Fever. Produced by fellow Traveling Wilbury Jeff Lynne, and almost certainly featuring a gift from George Harrison: the ukulele. Tonight the part of the ukulele will be played by a mandolin.`,
  },
  {
    title: "Nowhere Man / Girl",
    artist: "The Beatles",
    notes: `In 1965 The Beatles released Rubber Soul and ushered in a new era of studio innovation and creativity, raising the bar for what rock music could be. Brian Wilson of the Beach Boys was inspired, and poured that energy into Pet Sounds. This back and forth rivalry is the stuff of rock legend — we'll see a few more chapters in this saga later in the show. We were so inspired by Rubber Soul that we covered the whole album back in 2019! This is a great pair of songs from the record — I especially love the double guitar solo at the end of Girl.`,
  },
  {
    title: "Love Song / Boys Don't Cry",
    artist: "The Cure",
    notes: `These songs represent two different eras of The Cure. Boys Don't Cry was part of their earliest phase and featured more of a punk-adjacent raw live band sound. Love Song from 1989's Disintegration album shows The Cure stretching out in the studio with more sophisticated arrangements and lush synth orchestration. This is an excellent pair of classic Cure songs!`,
  },
  {
    title: "Masterfade",
    artist: "Andrew Bird",
    notes: `If you don't already know, Andrew Bird is an exceptionally talented multi-instrumentalist and songwriter. This song comes from his 2005 masterpiece The Mysterious Production of Eggs. His layers of strings and elaborate wordplay make for rewarding repeated listening.`,
  },
  {
    title: "Songbird",
    artist: "Fleetwood Mac",
    notes: `It's hard to say any song stands out off of Rumours, as it is chock full of huge hits like Go Your Own Way and Dreams. But the grace and beauty of Songbird speaks for itself. We are modeling our performance tonight not off of Fleetwood Mac, but off of an even better version performed by Eva Cassidy. She was a DC-area rising star in the '90s who died of cancer on the cusp of her big musical break. She is such an incredible singer and interpreter of songs — her versions of popular songs were always better than the original. She is literally the voice of an angel.`,
  },
  {
    title: "Fly Me to the Moon",
    artist: "Bart Howard",
    notes: `I first heard this song on a record my parents had when I was a kid. I didn't know who Frank Sinatra was, and I'd certainly not heard of the producer, Quincy Jones. Of course both of those names are legends in the music industry — Old Blue Eyes as the leader of the Rat Pack, and Quincy the thrilling producer and father of the bride.\n\n(Can you decode both of the Quincy references?)`,
  },
  {
    title: "Can't Stand It / How to Fight Loneliness",
    artist: "Wilco",
    notes: `In 1999, Wilco released their third album, Summer Teeth. This album is on my short list of best albums of the '90s. Their first record is fairly straight-up country rock, their second album sounds like they've been listening to some Sonic Youth, and in the third album they throw the kitchen sink into the production. This was the start of a successful string of albums for Wilco, but none can quite match the quality of this one.`,
  },
  {
    title: "What's Going On",
    artist: "Marvin Gaye",
    notes: `When this song and album came out, it really spoke to the social and political moment perfectly, and I think it does so now as well. Certainly, Marvin had great success throughout his career, but some of his works really tower, including Trouble Man and Here My Dear. On Rolling Stone's top 500 albums of all time, this album comes in at number one.`,
  },
  {
    title: "Mystery of Love",
    artist: "Sufjan Stevens",
    notes: `Sufjan Stevens is another multi-instrumentalist and songwriter. He seems to specialize in acoustic instruments and his trademark whispery vocal. After a couple of albums that featured songs about specific states (Michigan and Illinois), it was rumored that he was going to put out an album for every state in the country! This song is from the soundtrack for the film Call Me by Your Name.`,
  },
  {
    title: "Sacred Heart",
    artist: "Ron Sexsmith / Feist",
    notes: `Though she did not write it, Feist is the artist we are covering here. I'm a huge fan of everything she has done, but this one is from her first full-length release, Let It Die. Released in 2004 and recorded in Paris, the album features a variety of styles from sparse Bossa Nova to Disco. Her next album featured her biggest hit: 1 2 3 4.`,
  },
  {
    title: "Wouldn't It Be Nice / God Only Knows",
    artist: "The Beach Boys",
    notes: `These are both standout tracks from the perfect 1966 album Pet Sounds. There are zero silly surfing songs on this album. Instead, you have one of the best and earliest examples of using the studio as an instrument. Interestingly, the Beach Boys themselves didn't play the instruments on the record — instead they used a professional studio band in LA nicknamed The Wrecking Crew, full of amazing and legendary talent like bassist Carol Kaye and drummer Hal Blaine. This album is the next chapter in that Beach Boys / Beatles rivalry in the mid '60s. Pet Sounds was seen as a response to Rubber Soul, and the Beatles countered with their 1966 release Revolver. Before Brian Wilson could write and record his response, Smile, the Beatles dropped Sergeant Pepper and Brian kind of lost his mind and couldn't finish the album. He later returned to the project and finally released Smile in 2004.`,
  },
  {
    title: "Lucy in the Sky with Diamonds / Getting Better",
    artist: "The Beatles",
    notes: `Speaking of Sgt. Pepper, here it is! Tracks three and four, respectively. I'm sure that Lucy in the Sky with Diamonds is really based on the drawing that John's son made at school. Totally not a reference to LSD. Obviously not. Anyway, these songs represent the album well as a great example of psychedelic-era Beatles, which started with some tracks off of Revolver and continued on through Magical Mystery Tour.`,
  },
  {
    title: "Crazy Train",
    artist: "Ozzy Osbourne",
    notes: `All aboard! The late great Ozzy and Marvin Gaye both have a message for us. And this is the same group of performers that brought you Sweet Child of Mine at the last show. That was so much fun we decided to do it all over again!`,
  },
  {
    title: "I Will Always Love You",
    artist: "Dolly Parton",
    notes: `Again, we are modeling after a different performance than the original. Whitney Houston totally owned this song in her stunning cover from the soundtrack for the film The Bodyguard. If I recall correctly, the movie itself wasn't such a hit, but the song was huge!`,
  },
  {
    title: "The Man I Used to Be",
    artist: "Jellyfish",
    notes: `Jellyfish was a neo-psychedelic pop rock band in the late '80s and early '90s. They only put out two albums, and they are both phenomenal. This is the first track off of their first album, Bellybutton. Their second album stretched more into Queen territory with crazy polished vocal harmonies. Both albums are incredible.`,
  },
  {
    title: "My Iron Lung",
    artist: "Radiohead",
    notes: `And now as the finale, the bottom crust of our Radiohead sandwich: My Iron Lung. This is also from the album The Bends. I love when a band evolves their sound from album to album. I think that Radiohead's The Bends to OK Computer to Kid A is one of the most amazing three-album evolutions ever — a giant artistic leap! This song is really fun to play and features some cool effects from an octave harmonizer pedal.`,
  },
];

export default function Recital2026() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Caveat:wght@600&family=Abril+Fatface&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --charcoal: #161614;
          --off-white: #F8F6F2;
          --off-white-dark: #EDE9E1;
          --orange: #D4500A;
          --orange-dark: #B84308;
          --dark: #1E1C18;
          --body: #3A3530;
          --muted: #6A6058;
          --border: #DDD8CE;
        }

        body {
          font-family: 'Libre Baskerville', serif;
          background-color: var(--off-white);
          color: var(--dark);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 56px;
          background-color: var(--charcoal);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: #E8E4DC;
          letter-spacing: 0.02em;
          text-decoration: none;
        }

        .nav-links { display: flex; gap: 36px; }

        .nav-links a {
          font-size: 13px;
          letter-spacing: 0.14em;
          color: #C0B8A8;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: #F0EAE0; }

        .page-header {
          background-color: var(--charcoal);
          padding: 72px 56px 64px;
          border-bottom: 3px solid var(--orange);
        }

        .header-eyebrow {
          font-family: 'Caveat', cursive;
          font-size: 22px;
          color: var(--orange);
          margin-bottom: 12px;
        }

        .header-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 64px;
          line-height: 1.0;
          color: #fff;
          margin-bottom: 20px;
        }

        .header-sub {
          font-size: 16px;
          color: #9A9088;
          line-height: 1.75;
          max-width: 560px;
        }

        .program {
          max-width: 820px;
          margin: 0 auto;
          padding: 72px 56px 96px;
        }

        .song-entry {
          padding: 48px 0;
          border-bottom: 1px solid var(--border);
        }

        .song-entry:first-child {
          padding-top: 0;
        }

        .song-entry:last-child {
          border-bottom: none;
        }

        .song-number {
          font-family: 'Caveat', cursive;
          font-size: 18px;
          color: #C0B8A8;
          margin-bottom: 6px;
        }

        .song-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 28px;
          color: var(--dark);
          line-height: 1.2;
          margin-bottom: 4px;
        }

        .song-artist {
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          font-style: italic;
          color: var(--orange);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid var(--border);
        }

        .song-notes {
          font-size: 16px;
          line-height: 1.9;
          color: var(--body);
          white-space: pre-line;
        }

        footer {
          background-color: #0E0C0A;
          padding: 28px 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #3A3830;
          font-size: 12px;
          letter-spacing: 0.06em;
        }

        footer a {
          color: #3A3830;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 14px;
            padding: 16px 24px;
          }

          .nav-links {
            gap: 18px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .page-header {
            padding: 48px 24px 40px;
          }

          .header-title {
            font-size: 40px;
          }

          .program {
            padding: 48px 24px 72px;
          }

          .song-title {
            font-size: 22px;
          }

          footer {
            flex-direction: column;
            gap: 8px;
            padding: 20px 24px;
            text-align: center;
          }
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">David Stemmle Music</Link>
        <div className="nav-links">
          <Link href="/lessons">Lessons</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/used-gear">Used Gear</Link>
          <Link href="/recordings">Recordings</Link>
        </div>
      </nav>

      <div className="page-header">
        <div className="header-eyebrow">Program Notes</div>
        <h1 className="header-title">Spring 2026 Recital</h1>
        <p className="header-sub">Notes from David on each piece in tonight&apos;s program.</p>
      </div>

      <div className="program">
        {songs.map((song, i) => (
          <div className="song-entry" key={i}>
            <div className="song-number">{String(i + 1).padStart(2, "0")}</div>
            <h2 className="song-title">{song.title}</h2>
            <div className="song-artist">{song.artist}</div>
            <p className="song-notes">{song.notes}</p>
          </div>
        ))}
      </div>

      <footer>
        <span>&copy; 2026 David Stemmle Music &middot; Durham, NC</span>
        <Link href="/">mrdavidmusic.com</Link>
      </footer>
    </>
  );
}
