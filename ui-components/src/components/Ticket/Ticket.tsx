"use client"
import styles from './Ticket.module.css'
import { SpotifyIcon, YoutubeIcon } from '../icons';

export type Link = {
  type: string
  url: string
}

type TicketProps = {
  title: string
  year: number
  language: string
  time: string
  links: Link[]
  feature?: string
  backgroundImg: string
}

const Ticket: React.FC<TicketProps> = ({title, year, time, links, language, feature, backgroundImg}) => {
  return (
    <li className={styles.ticketItem}>
      <div
        className={styles.ticketItemContainer}
        style={{'--background-img': `url("${backgroundImg}")`} as React.CSSProperties}
      >
        <div className={styles.ticketSVGContainer}>
          <svg
            className={styles.ticketSVG}
            viewBox="0 0 30 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect x="0" y="0" height="2" width="30" />
            <rect x="0" y="4" height="1" width="30" />
            <rect x="0" y="7" height="3" width="30" />
            <rect x="0" y="12" height="1" width="30" />
            <rect x="0" y="15" height="2" width="30" />
            <rect x="0" y="19" height="1" width="30" />
            <rect x="0" y="22" height="1" width="30" />
            <rect x="0" y="25" height="3" width="30" />
            <rect x="0" y="30" height="1" width="30" />
            <rect x="0" y="33" height="2" width="30" />
            <rect x="0" y="37" height="1" width="30" />
            <rect x="0" y="40" height="1" width="30" />
            <rect x="0" y="43" height="2" width="30" />
            <rect x="0" y="47" height="3" width="30" />
            <rect x="0" y="52" height="1" width="30" />
            <rect x="0" y="55" height="1" width="30" />
            <rect x="0" y="58" height="2" width="30" />
            <rect x="0" y="62" height="1" width="30" />
            <rect x="0" y="65" height="3" width="30" />
            <rect x="0" y="70" height="1" width="30" />
            <rect x="0" y="73" height="2" width="30" />
            <rect x="0" y="77" height="1" width="30" />
            <rect x="0" y="80" height="1" width="30" />
            <rect x="0" y="83" height="3" width="30" />
            <rect x="0" y="88" height="1" width="30" />
            <rect x="0" y="91" height="2" width="30" />
            <rect x="0" y="95" height="1" width="30" />
            <rect x="0" y="98" height="1" width="30" />
            <rect x="0" y="101" height="2" width="30" />
            <rect x="0" y="105" height="3" width="30" />
            <rect x="0" y="110" height="1" width="30" />
            <rect x="0" y="113" height="2" width="30" />
            <rect x="0" y="117" height="3" width="30" />
          </svg>

        </div>
        <div className={styles.ticketItemContent}>
          <span>Atlamoon {feature}</span>
          <h3>{title}</h3>
          <div className={styles.ticketItemTime}>
            <span>{year}</span>
          </div>
          <div className={styles.songInfo}>
            <div>
              <div>year</div>
              <div>{year}</div>
            </div>
            <div>
              <div>language</div>
              <div>{language}</div>
            </div>
            <div>
              <div>time</div>
              <div>{time}</div>
            </div>
            <div>
              <div>by</div>
              <div>atlamoon</div>
            </div>
          </div>
        </div>
        <div className={styles.ticketStub}>
          <div>
            <span>play now</span>
            <div>
              {links.map((link, index) => {
                return (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer">
                    {link.type === 'youtube' ? <YoutubeIcon/> : <SpotifyIcon/>}
                  </a>
                )
              })}
            </div>
          </div>
          <svg
            className={styles.stubSVG}
            viewBox="0 0 120 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="2" />
            <rect x="4" y="0" width="1" />
            <rect x="7" y="0" width="3" />
            <rect x="12" y="0" width="1" />
            <rect x="15" y="0" width="2" />
            <rect x="19" y="0" width="1" />
            <rect x="22" y="0" width="1" />
            <rect x="25" y="0" width="3" />
            <rect x="30" y="0" width="1" />
            <rect x="33" y="0" width="2" />
            <rect x="37" y="0" width="1" />
            <rect x="40" y="0" width="1" />
            <rect x="43" y="0" width="2" />
            <rect x="47" y="0" width="3" />
            <rect x="52" y="0" width="1" />
            <rect x="55" y="0" width="1" />
            <rect x="58" y="0" width="2" />
            <rect x="62" y="0" width="1" />
            <rect x="65" y="0" width="3" />
            <rect x="70" y="0" width="1" />
            <rect x="73" y="0" width="2" />
            <rect x="77" y="0" width="1" />
            <rect x="80" y="0" width="1" />
            <rect x="83" y="0" width="3" />
            <rect x="88" y="0" width="1" />
            <rect x="91" y="0" width="2" />
            <rect x="95" y="0" width="1" />
            <rect x="98" y="0" width="1" />
            <rect x="101" y="0" width="2" />
            <rect x="105" y="0" width="3" />
            <rect x="110" y="0" width="1" />
            <rect x="113" y="0" width="2" />
            <rect x="117" y="0" width="3" />
          </svg>
        </div>
      </div>
    </li>
  );
}

export default Ticket;
