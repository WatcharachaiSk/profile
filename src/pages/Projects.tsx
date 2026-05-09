import { Languages } from '../configs/language';
import { fontConfig } from '../configs/font-config';

interface Props {
  language: string;
}

function Projects(props: Props) {
  const { language } = props;

  const projects = [
    {
      id: '01',
      tag: language === Languages.EN ? 'UI Design · Web' : 'UI Design · เว็บ',
      title: language === Languages.EN ? 'Personal\nPortfolio' : 'พอร์ตโฟลิโอ\nส่วนตัว',
      desc: language === Languages.EN ? 'A minimal showcase of craft and process.' : 'การนำเสนอผลงานที่เรียบง่ายแต่แฝงด้วยกระบวนการคิด',
      link: 'https://watcharachaisk.github.io/profile/',
      bg: '#f0ede8'
    },
    {
      id: '02',
      tag: language === Languages.EN ? 'UX Research · Mobile' : 'UX Research · มือถือ',
      title: language === Languages.EN ? 'Mobile\nApp Design' : 'ออกแบบ\nแอปมือถือ',
      desc: language === Languages.EN ? 'End-to-end user experience for a lifestyle app.' : 'ประสบการณ์ผู้ใช้แบบครบวงจรสำหรับแอปไลฟ์สไตล์',
      link: '#',
      bg: '#e8ecf0'
    },
    {
      id: '03',
      tag: language === Languages.EN ? 'Design System' : 'ระบบการออกแบบ',
      title: language === Languages.EN ? 'UI Component\nLibrary' : 'คลังส่วนประกอบ\nUI',
      desc: language === Languages.EN ? 'Scalable design system built for teams.' : 'ระบบการออกแบบที่ปรับขนาดได้ซึ่งสร้างขึ้นสำหรับทีม',
      link: '#',
      bg: '#ece8f0'
    },
    {
      id: '04',
      tag: language === Languages.EN ? 'Branding · Identity' : 'การสร้างแบรนด์',
      title: language === Languages.EN ? 'Brand Identity\nDesign' : 'การออกแบบ\nเอกลักษณ์แบรนด์',
      desc: language === Languages.EN ? 'Visual identity for an early-stage startup.' : 'เอกลักษณ์ทางภาพสำหรับสตาร์ทอัพยุคเริ่มต้น',
      link: '#',
      bg: '#e8f0ec'
    }
  ];

  return (
    <div id="work" className="py-20 px-10 max-w-[1100px] mx-auto">
      <section className="pb-8 px-0">
        <p className={`section-label ${fontConfig.getLabel(language)}`}>{language === Languages.EN ? 'Selected Work' : 'ผลงานที่เลือกสรร'}</p>
        <h2 className={`section-title ${fontConfig.getTitle(language)}`}>
          {language === Languages.EN ? (
            <>Projects &<br /><em className="not-italic text-gray-400">Experiments</em></>
          ) : (
            <>โปรเจกต์ &<br /><em className="not-italic text-gray-400">การทดลอง</em></>
          )}
        </h2>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 rounded-3xl overflow-hidden border border-gray-100 bg-gray-100">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] bg-white p-8 no-underline flex flex-col justify-end overflow-hidden transition-transform duration-500 hover:scale-[0.99] hover:z-10"
          >
            <div 
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundColor: project.bg }}
            />
            
            <span className={`absolute top-7 right-7 ${fontConfig.getBadge(language)} text-black/30 tracking-wider`}>
              {project.id}
            </span>
            
            <div className="relative z-10">
              <p className={`${fontConfig.getBadge(language)} tracking-widest uppercase text-black/40 mb-2.5`}>
                {project.tag}
              </p>
              <h3 className={`font-serif ${fontConfig.getCardTitle(language)} leading-tight tracking-tight text-black whitespace-pre-line`}>
                {project.title}
              </h3>
              <p className={`${fontConfig.getCardDesc(language)} text-gray-500 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                {project.desc}
              </p>
            </div>
            
            <div className="absolute bottom-7 right-7 w-9 h-9 border border-black/10 rounded-full flex items-center justify-center text-black opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">
              ↗
            </div>
          </a>
        ))}
        
        {/* Wide Card Example */}
        <a
          href="#"
          className="group relative md:col-span-2 aspect-[4/3] md:aspect-[16/6] bg-white p-8 no-underline flex flex-col justify-end overflow-hidden transition-transform duration-500 hover:scale-[0.99] hover:z-10 mt-[0.5px]"
        >
          <div className="absolute inset-0 bg-[#f5f5f2] transition-transform duration-700 group-hover:scale-110" />
          <span className={`absolute top-7 right-7 ${fontConfig.getBadge(language)} text-black/30 tracking-wider`}>05</span>
          <div className="relative z-10">
            <p className={`${fontConfig.getBadge(language)} tracking-widest uppercase text-black/40 mb-2.5`}>Dashboard · Data Viz</p>
            <h3 className={`font-serif ${fontConfig.getCardTitle(language)} leading-tight tracking-tight text-black`}>Analytics Dashboard</h3>
            <p className={`${fontConfig.getCardDesc(language)} text-gray-500 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>Complex data made beautifully simple.</p>
          </div>
          <div className="absolute bottom-7 right-7 w-9 h-9 border border-black/10 rounded-full flex items-center justify-center text-black opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">↗</div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
