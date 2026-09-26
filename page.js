import Link from 'next/link';

export const metadata = {
  title: 'নতুন দিনের বার্তা | সত্যের সাথে ন্যায়ের পথে অবিচল',
  description: 'নতুন দিনের বার্তা — সত্যের সাথে ন্যায়ের পথে অবিচল। সর্বশেষ সংবাদ।',
  alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000' },
  openGraph: { title: 'নতুন দিনের বার্তা | সত্যের সাথে ন্যায়ের পথে অবিচল', description: 'সত্যের সাথে ন্যায়ের পথে অবিচল।', url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', siteName: 'নতুন দিনের বার্তা', locale: 'bn_BD', type: 'website' },
  twitter: { card: 'summary_large_image' }
};import Header from '@/components/Header';import Footer from '@/components/Footer';import {news} from '@/lib/news';
export default function Home(){return <><Header/><main className="container"><div className="breaking"><b>ব্রেকিং নিউজ</b><span>দেশ-বিদেশের সর্বশেষ গুরুত্বপূর্ণ খবর জানতে চোখ রাখুন নতুন দিনের বার্তায়</span></div><section className="grid"><div><Link className="lead" href={'/news/'+news[0].slug}><img src={news[0].image}/><h1>{news[0].title}</h1><p>{news[0].summary}</p></Link><div className="cards">{news.slice(1).map(n=><Link className="card" href={'/news/'+n.slug} key={n.slug}><img src={n.image}/><h2>{n.title}</h2><small>{n.category} · {n.date}</small></Link>)}</div></div><aside className="side"><h3>সর্বশেষ</h3>{news.map(n=><Link className="sideitem" href={'/news/'+n.slug} key={'s'+n.slug}>{n.title}</Link>)}</aside></section><section className="section"><h2>আরও সংবাদ</h2><div className="cards">{news.map(n=><Link className="card" href={'/news/'+n.slug} key={'m'+n.slug}><h2>{n.title}</h2><p>{n.summary}</p></Link>)}</div></section></main><Footer/></>}
