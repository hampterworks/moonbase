"use client"
import styles from './Ticket.module.css'
import { SpotifyIcon, YoutubeIcon } from '../icons';

export type Link = {
  type: string
  url: string
}

type TicketProps = {
  title: string;
  year: string;
  language: string;
  time: string;
  links: Link[]
}

const Ticket: React.FC<TicketProps> = ({title, year, time, links, language}) => {
  return (
    <li className={styles.ticketItem}>
      <div className={styles.ticketItemContainer}>
        <div>
          <svg
            className={styles.ticketSVG}
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
        <div className={styles.ticketItemContent}>
          <span>Atlamoon</span>
          <h3>{title}</h3>
          <div className={styles.ticketItemTime}>
            <span>{year}</span>
          </div>
          <div className={styles.seatLocation}>
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
