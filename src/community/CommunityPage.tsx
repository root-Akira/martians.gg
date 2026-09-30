import React from 'react'
import { Link } from 'react-router-dom'
import { COMMUNITY, socialMeta, socialOrder, type CommunityKey } from './config'

const icons: Record<CommunityKey, React.ReactNode> = {
  discord: <path d="M20.32 4.57A19.79 19.79 0 0 0 15.43 3c-.24.42-.5.99-.69 1.44a18.3 18.3 0 0 0-5.48 0C9.07 3.99 8.8 3.42 8.56 3a19.74 19.74 0 0 0-4.88 1.57C.55 9.2-.28 13.7.14 18.16A19.9 19.9 0 0 0 6.15 21c.49-.66.92-1.37 1.3-2.1-.71-.27-1.4-.6-2.03-.99.17-.12.34-.25.5-.38a14.2 14.2 0 0 0 12.06 0c.16.14.33.26.5.38-.63.39-1.32.72-2.03.99.37.73.81 1.44 1.3 2.1a19.86 19.86 0 0 0 6.01-2.84c.5-5.18-.84-9.68-3.54-13.59ZM8.02 15.56c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.95-2.42 2.16-2.42 1.22 0 2.19 1.1 2.17 2.42 0 1.34-.95 2.42-2.17 2.42Zm7.96 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.95-2.42 2.16-2.42 1.22 0 2.19 1.1 2.17 2.42 0 1.34-.95 2.42-2.17 2.42Z" />,
  instagram: <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.24a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.89a4.29 4.29 0 1 1 0-8.58 4.29 4.29 0 0 1 0 8.58Zm8.4-11.15a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Z" />,
  youtube: <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />,
  x: <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />,
  linkedin: <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />,
  whatsapp: <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35M12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 1 1 7.97 4.41M20.52 3.45A11.2 11.2 0 0 0 12.04 0C5.6 0 .35 5.24.35 11.68c0 2.06.54 4.07 1.56 5.85L.25 24l6.62-1.73a11.66 11.66 0 0 0 5.17 1.22h.01c6.44 0 11.69-5.24 11.69-11.68 0-3.12-1.22-6.06-3.22-8.36Z" />,
  telegram: <path d="M23.07 3.28 19.6 19.63c-.26 1.15-.94 1.43-1.9.89l-5.25-3.87-2.53 2.44c-.28.28-.51.51-1.05.51l.37-5.33 9.7-8.76c.42-.38-.09-.58-.65-.21L6.27 13.07l-5.2-1.63c-1.13-.35-1.15-1.13.24-1.68L21.76.96c.9-.33 1.69.21 1.31 2.32Z" />
}

const outline = {
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" /></>,
  trophy: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 21h16M10 14.7V17c0 .6-.5 1-.97 1.2C7.85 18.7 7 20.2 7 21.9M14 14.7V17c0 .6.5 1 .97 1.2 1.18.5 2.03 2 2.03 3.7M18 2H6v7a6 6 0 0 0 12 0V2Z" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>
}

function Icon({ node, size = 20 }: { node: React.ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {node}
    </svg>
  )
}

function BrandBlock() {
  return (
    <div className="hub-brand">
      <div className="hub-logo-ring">
        <img src="/MGGLOGO-white.png" alt="Martians Gaming Guild" width="92" height="92" />
      </div>
      <h1 className="hub-name">MARTIANS GAMING GUILD</h1>
      <p className="hub-handle">{COMMUNITY.handle}</p>
      <p className="hub-tagline">PLAY. COMPETE. BELONG.</p>
      <p className="hub-blurb">Join our community and be part of something bigger.</p>
    </div>
  )
}

function Arrow({ size = 16 }: { size?: number }) {
  return <span className="hub-arrow" aria-hidden="true">&rarr;</span>
}

function FeaturedCommunity() {
  const m = socialMeta.discord
  const live = Boolean(COMMUNITY.discord)
  const body = (
    <>
      <span className="hub-social-icon hub-icon-lg"><Icon node={icons.discord} size={24} /></span>
      <span className="hub-featured-text">
        <strong>{m.title}</strong>
        <small>{m.desc}</small>
      </span>
      {live
        ? <span className="hub-arrow-btn" aria-hidden="true">&rarr;</span>
        : <span className="hub-pending">LINK PENDING</span>}
    </>
  )
  return (
    <section aria-labelledby="hub-primary-label">
      <p className="hub-primary-label" id="hub-primary-label">PRIMARY COMMUNITY</p>
      {live ? (
        <a className="hub-featured" href={COMMUNITY.discord} target="_blank"
           rel="noopener noreferrer" aria-label={m.label}>{body}</a>
      ) : (
        <div className="hub-featured is-pending" aria-label={m.label} aria-disabled="true">{body}</div>
      )}
    </section>
  )
}

function Divider({ children }: { children: string }) {
  return (
    <div className="hub-divider" role="presentation">
      <span className="hub-divider-line" />
      <span className="hub-divider-text">{children}</span>
      <span className="hub-divider-line" />
    </div>
  )
}

function SocialLinkCard({ k, i }: { k: CommunityKey; i: number }) {
  const href = COMMUNITY[k]
  const m = socialMeta[k]
  const body = (
    <>
      <span className="hub-social-icon"><Icon node={icons[k]} size={20} /></span>
      <span className="hub-social-text">
        <strong>{m.title}</strong>
        <small>{m.desc}</small>
      </span>
      {href ? <Arrow /> : <span className="hub-pending">PENDING</span>}
    </>
  )
  const style = { animationDelay: `${(i + 1) * 0.05}s` }
  return href ? (
    <a className="hub-social" href={href} target="_blank" rel="noopener noreferrer"
       aria-label={m.label} style={style}>{body}</a>
  ) : (
    <div className="hub-social is-pending" aria-label={m.label} aria-disabled="true" style={style}>{body}</div>
  )
}

const exploreCards = [
  { title: 'VISIT WEBSITE', desc: 'Explore Martians.gg', to: '/', icon: outline.globe as React.ReactNode },
  { title: 'TOURNAMENTS', desc: 'Upcoming & past events', to: '/#tournaments', icon: outline.trophy as React.ReactNode },
  { title: 'EVENTS', desc: 'Campus & online', to: '/#events', icon: outline.calendar as React.ReactNode }
]

function ExploreCard({ title, desc, to, icon }: { title: string; desc: string; to: string; icon: React.ReactNode }) {
  const external = to.startsWith('http')
  const inner = (
    <>
      <span className="hub-social-icon"><Icon node={icon} size={20} /></span>
      <span className="hub-social-text"><strong>{title}</strong><small>{desc}</small></span>
    </>
  )
  return external ? (
    <a className="hub-explore" href={to} target="_blank" rel="noopener noreferrer" aria-label={title}>{inner}</a>
  ) : (
    <Link className="hub-explore" to={to} aria-label={title}>{inner}</Link>
  )
}

function CommunityFooter() {
  return (
    <footer className="hub-footer">
      <img src="/MGGLOGO-white.png" alt="" className="hub-footer-logo" width="46" height="46" />
      <p className="hub-footer-name">MARTIANS GAMING GUILD</p>
      <p className="hub-footer-blurb">
        Building competitive gaming experiences that connect players, colleges, creators and brands.
      </p>
      <p className="hub-copy">&copy; 2026 Martians Gaming Guild. All rights reserved.</p>
    </footer>
  )
}

export default function CommunityPage() {
  return (
    <div className="hub">
      <div className="hub-hud" aria-hidden="true">
        <span className="hub-corner tl" /><span className="hub-corner tr" />
        <span className="hub-corner bl" /><span className="hub-corner br" />
      </div>

      <div className="hub-inner">
        <main className="hub-col">
          <BrandBlock />
          <FeaturedCommunity />
          <Divider>FOLLOW MARTIANS</Divider>
          {socialOrder.map((k, i) => <SocialLinkCard key={k} k={k} i={i} />)}
          <Divider>EXPLORE MORE</Divider>
          <div className="hub-explore-row">
            {exploreCards.map(c => <ExploreCard key={c.title} {...c} />)}
          </div>
        </main>
        <CommunityFooter />
      </div>
    </div>
  )
}
