export const COMMUNITY = {
  handle: '@martiansgamingguild',
  // TODO: replace with real accounts. Empty string => card is not rendered.
  discord: '',
  instagram: '',
  youtube: '',
  x: '',
  linkedin: '',
  whatsapp: '',
  telegram: '',
  website: '/'
} as const

export type CommunityKey = 'discord' | 'instagram' | 'youtube' | 'x' | 'linkedin' | 'whatsapp' | 'telegram'

export const socialMeta: Record<CommunityKey, { title: string; desc: string; label: string }> = {
  discord: {
    title: 'JOIN OUR DISCORD',
    desc: 'Meet gamers, creators and competitors.',
    label: 'Join Martians Gaming Guild on Discord'
  },
  instagram: {
    title: 'FOLLOW ON INSTAGRAM',
    desc: 'Behind the scenes, updates and more.',
    label: 'Follow Martians Gaming Guild on Instagram'
  },
  youtube: {
    title: 'SUBSCRIBE ON YOUTUBE',
    desc: 'Watch tournaments, highlights and content.',
    label: 'Subscribe to Martians Gaming Guild on YouTube'
  },
  x: {
    title: 'FOLLOW ON X',
    desc: 'Latest news, announcements and discussions.',
    label: 'Follow Martians Gaming Guild on X'
  },
  linkedin: {
    title: 'CONNECT ON LINKEDIN',
    desc: 'Partnerships, updates and professional news.',
    label: 'Connect with Martians Gaming Guild on LinkedIn'
  },
  whatsapp: {
    title: 'JOIN OUR WHATSAPP',
    desc: 'Get instant updates about events and tournaments.',
    label: 'Join Martians Gaming Guild on WhatsApp'
  },
  telegram: {
    title: 'JOIN OUR TELEGRAM',
    desc: 'Community chat and important announcements.',
    label: 'Join Martians Gaming Guild on Telegram'
  }
}

export const socialOrder: CommunityKey[] = [
  'instagram', 'youtube', 'x', 'linkedin', 'whatsapp', 'telegram'
]
