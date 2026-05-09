import { Languages } from './language';

export const fontConfig = {
  getLabel: (lang: string) => (lang === Languages.TH ? 'text-[19px]' : 'text-[11px]'),
  getTitle: (lang: string) => (lang === Languages.TH ? 'text-[clamp(44px,5vw,64px)]' : 'text-[clamp(36px,4vw,56px)]'),
  getExpTitle: (lang: string) => (lang === Languages.TH ? 'text-[32px]' : 'text-2xl'),
  getExpCompany: (lang: string) => (lang === Languages.TH ? 'text-[20px]' : 'text-[15px]'),
  getExpDesc: (lang: string) => (lang === Languages.TH ? 'text-[19px]' : 'text-[14px]'),
  getExpBullet: (lang: string) => (lang === Languages.TH ? 'text-[18px]' : 'text-[13px]'),
  getTechTag: (lang: string) => (lang === Languages.TH ? 'text-[18px]' : 'text-[10px]'),
  getNavLink: (lang: string) => (lang === Languages.TH ? 'text-[20px]' : 'text-[17px]'),
  getCardTitle: (lang: string) => (lang === Languages.TH ? 'text-[30px]' : 'text-[26px]'),
  getCardDesc: (lang: string) => (lang === Languages.TH ? 'text-[17px]' : 'text-[13px]'),
  getBadge: (lang: string) => (lang === Languages.TH ? 'text-[14px]' : 'text-[10px]'),
};
