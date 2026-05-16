import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Languages } from '../configs/language';
import { fontConfig } from '../configs/font-config';
import { ImgCoppArr } from '../configs/img-coop';
import { ImgTaxEaseArr } from '../configs/img-tax-ease';
import { ImgFlowMoneyArr } from '../configs/img-flow-money';

interface Props {
  language: string;
}

interface Project {
  id: string;
  tag: string;
  title: string;
  desc: string;
  link: string;
  bg: string;
  images?: string[];
}

function ThreeDSlider({ images, onImageClick }: { images: string[]; onImageClick?: (index: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 md:h-80 flex flex-col items-center justify-center group/slider">
      <div className="relative w-full h-full flex items-center justify-center perspective-[1500px]">
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {images.map((img, index) => {
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            const translateX = offset * 110;
            const translateZ = -absOffset * 180;
            const rotateY = offset * -25;
            let opacity = 1 - absOffset * 0.4;
            const zIndex = 20 - absOffset;

            if (absOffset > 2) opacity = 0;

            return (
              <div
                key={index}
                onClick={() => (isCenter && onImageClick ? onImageClick(index) : setCurrentIndex(index))}
                className={`absolute w-52 md:w-80 h-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform-gpu
                           ${!isCenter ? 'opacity-60 grayscale-[0.5] cursor-pointer hover:brightness-110 hover:-translate-y-2 hover:scale-[1.05]' : 'opacity-100 grayscale-0 cursor-zoom-in hover:scale-[1.03] hover:-translate-y-2'}`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-cover select-none" />
                {!isCenter && <div className="absolute inset-0 bg-black/10 transition-opacity group-hover/slider:opacity-5" />}
              </div>
            );
          })}
        </div>

        <div
          className="absolute left-0 top-0 w-1/3 h-full z-[30] cursor-w-resize"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
        />
        <div
          className="absolute right-0 top-0 w-1/3 h-full z-[30] cursor-e-resize"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
        />
      </div>

      <div className="mt-12 flex items-center gap-4">
        <div className="h-[2px] w-32 bg-black/5 rounded-full overflow-hidden relative">
          <div
            className="absolute h-full bg-black transition-all duration-500"
            style={{ width: `${100 / images.length}%`, left: `${(currentIndex / images.length) * 100}%` }}
          />
        </div>
        <span className="text-[10px] font-black tracking-tighter text-black/40 tabular-nums">
          0{currentIndex + 1} / 0{images.length}
        </span>
      </div>
    </div>
  );
}

function Projects(props: Props) {
  const { language } = props;
  const [paddingX, setPaddingX] = useState(40);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomedImageIndex, setZoomedImageIndex] = useState<number | null>(null);
  const zoomScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePadding = () => {
      const computedPadding = Math.max(40, (window.innerWidth - 1100) / 2 + 40);
      setPaddingX(computedPadding);
    };
    updatePadding();
    window.addEventListener('resize', updatePadding);
    const timeoutId = setTimeout(updatePadding, 100);
    return () => {
      window.removeEventListener('resize', updatePadding);
      clearTimeout(timeoutId);
    };
  }, []);

  // Sync scroll position when zoomedImageIndex changes externally (thumbnails or keyboard)
  useEffect(() => {
    if (zoomScrollRef.current && zoomedImageIndex !== null) {
      const container = zoomScrollRef.current;
      const targetScrollLeft = zoomedImageIndex * container.clientWidth;
      if (Math.abs(container.scrollLeft - targetScrollLeft) > 10) {
        container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }
  }, [zoomedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomedImageIndex === null) return;
      if (e.key === 'ArrowRight') setZoomedImageIndex((prev) => (prev! + 1) % selectedProject!.images!.length);
      if (e.key === 'ArrowLeft') setZoomedImageIndex((prev) => (prev! - 1 + selectedProject!.images!.length) % selectedProject!.images!.length);
      if (e.key === 'Escape') setZoomedImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImageIndex, selectedProject]);

  const handleZoomScroll = () => {
    if (zoomScrollRef.current) {
      const container = zoomScrollRef.current;
      const index = Math.round(container.scrollLeft / container.clientWidth);
      if (index !== zoomedImageIndex) {
        setZoomedImageIndex(index);
      }
    }
  };

  const projects: Project[] = [
    {
      id: '01',
      tag: language === Languages.EN ? 'Web App · Finance' : 'เว็บแอป · การเงิน',
      title: language === Languages.EN ? 'Tax Ease' : 'Tax Ease',
      desc:
        language === Languages.EN
          ? 'Visual personal income tax calculator for complex structures.'
          : 'เครื่องมือคำนวณภาษีเงินได้บุคคลธรรมดาที่ช่วยเปลี่ยนตัวเลขที่ซับซ้อนให้เข้าใจง่ายผ่านแผนภาพ',
      link: 'https://tax-ease.vercel.app/',
      bg: '#ffffff',
      images: ImgTaxEaseArr,
    },
    {
      id: '02',
      tag: language === Languages.EN ? 'Web App · Finance' : 'เว็บแอป · การเงิน',
      title: language === Languages.EN ? 'FlowMoney' : 'FlowMoney',
      desc:
        language === Languages.EN
          ? 'Personal finance management focused on daily tracking.'
          : 'แอปพลิเคชันจัดการการเงินส่วนบุคคลที่เน้นความเรียบง่ายในการบันทึกรายรับรายจ่ายรายวัน',
      link: 'https://paylogs-fe.vercel.app/',
      bg: '#ffffff',
      images: ImgFlowMoneyArr,
    },
    {
      id: '03',
      tag: language === Languages.EN ? 'Mobile App · QR Inventory' : 'มือถือ · จัดการครุภัณฑ์',
      title: language === Languages.EN ? 'Asset\nChecker' : 'ระบบตรวจสอบ\nครุภัณฑ์',
      desc:
        language === Languages.EN
          ? 'An equipment status inspection mobile application using QR codes for fast and convenient inventory management. Developed during a cooperative education project.'
          : 'แอปพลิเคชันตรวจสอบสถานะครุภัณฑ์ผ่านการสแกนคิวอาร์โค้ด ช่วยให้การจัดการคลังพัสดุสะดวกและรวดเร็วขึ้น พัฒนาขึ้นในโครงการสหกิจศึกษา',
      link: '#',
      bg: '#ffffff',
      images: ImgCoppArr,
    },
  ];

  const openModal = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setZoomedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div id="work" className="py-24 max-w-full bg-white relative z-0">
      <section className="px-10 max-w-[1100px] mx-auto mb-12 relative text-center md:text-left z-10">
        <p className={`section-label ${fontConfig.getLabel(language)} text-gray-400`}>
          {language === Languages.EN ? 'Selected Work' : 'ผลงานที่เลือกสรร'}
        </p>
        <h2 className={`section-title ${fontConfig.getTitle(language)} !mb-0 w-fit mx-auto md:mx-0 text-black`}>
          {language === Languages.EN ? (
            <>
              Projects &<br />
              <em className="not-italic text-gray-300">Experiments</em>
            </>
          ) : (
            <>
              โปรเจกต์ &<br />
              <em className="not-italic text-gray-300">การทดลอง</em>
            </>
          )}
        </h2>
      </section>

      {/* Projects Carousel */}
      <div className="relative overflow-visible">
        <div
          className="flex overflow-x-auto gap-8 pb-16 pt-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ paddingLeft: `${paddingX}px`, scrollPaddingLeft: `${paddingX}px` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={(e) => openModal(e, project)}
              className="group relative flex-shrink-0 w-[260px] md:w-[300px] cursor-pointer flex flex-col items-center text-center snap-start 
                       bg-white border border-gray-100 rounded-xl p-6 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 transform-gpu
                       hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] hover:-translate-y-4 hover:scale-[1.03] hover:z-20"
            >
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-sm border border-gray-50 group-hover:shadow-lg transition-all duration-500">
                <img
                  src={project.images?.[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col items-center px-2">
                <p className={`${fontConfig.getBadge(language)} text-[10px] tracking-[0.2em] uppercase text-gray-300 font-bold mb-1`}>
                  {project.tag}
                </p>
                <h3
                  className={`font-serif ${fontConfig.getCardTitle(language)} !text-xl leading-tight tracking-tight text-black whitespace-pre-line mb-3`}
                >
                  {project.title}
                </h3>
                <p className={`${fontConfig.getCardDesc(language)} text-[13px] text-gray-400 leading-relaxed line-clamp-2 px-2`}>{project.desc}</p>
                <div className="mt-8 transition-all duration-300 group-hover:scale-110">
                  <span className="bg-black text-white px-6 py-2 rounded-full text-[11px] font-bold tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center gap-1 uppercase">
                    {language === Languages.EN ? 'View Detail' : 'ดูรายละเอียด'}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0" style={{ width: `${Math.max(0, paddingX - 32)}px` }} />
        </div>
      </div>

      {/* Project Detail Modal using Portal */}
      {selectedProject &&
        createPortal(
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 md:px-6 py-6 md:py-10 transition-opacity duration-300 ease-out">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeModal} />
            <div
              className="relative bg-white w-full max-w-5xl max-h-full overflow-y-auto rounded-xl md:rounded-xl shadow-2xl flex flex-col transition-all duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:scale-110 hover:shadow-md rounded-full flex items-center justify-center text-black transition-all shadow-sm font-light text-2xl"
              >
                ✕
              </button>

              {/* Header Section (Top) */}
              <div className="p-8 md:p-16 pb-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 text-center md:text-left">
                  <div className="flex-1 space-y-4">
                    <p className={`${fontConfig.getBadge(language)} text-[11px] tracking-[0.3em] uppercase text-gray-300 font-black`}>
                      {selectedProject.tag}
                    </p>
                    <h2 className={`font-serif ${fontConfig.getTitle(language)} !text-4xl md:!text-6xl leading-none text-black`}>
                      {selectedProject.title}
                    </h2>
                    <p
                      className={`${fontConfig.getCardDesc(language)} text-[15px] md:text-[18px] text-gray-500 max-w-3xl leading-relaxed mx-auto md:mx-0`}
                    >
                      {selectedProject.desc}
                    </p>
                  </div>
                  {selectedProject.link !== '#' && (
                    <div className="pb-2 flex justify-center">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-12 py-4 bg-black text-white rounded-full text-sm font-black tracking-widest hover:bg-gray-900 transition-all shadow-xl active:scale-95 transform-gpu hover:scale-110 hover:-translate-y-1"
                      >
                        {language === Languages.EN ? 'VISIT WEBSITE' : 'เยี่ยมชมเว็บไซต์'}
                      </a>
                    </div>
                  )}
                </div>
                <div className="h-px bg-gray-100 w-full mt-12" />
              </div>

              {/* Gallery Section (Bottom) */}
              <div className="px-8 md:px-16 pb-16">
                <h3 className="text-[13px] font-black text-gray-200 uppercase tracking-[0.2em] mb-10 text-center md:text-left">Screenshots</h3>
                {selectedProject.images && <ThreeDSlider images={selectedProject.images} onImageClick={(index) => setZoomedImageIndex(index)} />}
                <div className="mt-12 text-center">
                  <p className="text-[12px] text-gray-400 italic">
                    {language === Languages.EN ? 'Tap central image to zoom' : 'แตะรูปตรงกลางเพื่อขยายภาพ'}
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Native Scroll-Snap Zoomed Photo Viewer */}
      {zoomedImageIndex !== null &&
        selectedProject?.images &&
        createPortal(
          <div
            className="fixed inset-0 z-[300] bg-black backdrop-blur-2xl flex flex-col select-none overflow-hidden transition-opacity duration-300 animate-in fade-in"
            onClick={() => setZoomedImageIndex(null)}
          >
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[350] bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
              <div className="text-white/80 text-xs font-bold tracking-widest uppercase tabular-nums">
                {zoomedImageIndex + 1} OF {selectedProject.images.length}
              </div>
              <button
                className="text-white/40 hover:text-white hover:scale-110 transition-all text-3xl font-light p-2 pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedImageIndex(null);
                }}
              >
                ✕
              </button>
            </div>

            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
              <button
                className="absolute left-6 md:left-12 w-14 h-14 hidden md:flex items-center justify-center bg-white/5 hover:bg-white/10 hover:scale-110 rounded-full text-white/50 hover:text-white transition-all z-[350] text-3xl"
                onClick={(e) => {
                  e.stopPropagation();
                  if (zoomScrollRef.current) zoomScrollRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
                }}
              >
                ‹
              </button>
              <button
                className="absolute right-6 md:right-12 w-14 h-14 hidden md:flex items-center justify-center bg-white/5 hover:bg-white/10 hover:scale-110 rounded-full text-white/50 hover:text-white transition-all z-[350] text-3xl"
                onClick={(e) => {
                  e.stopPropagation();
                  if (zoomScrollRef.current) zoomScrollRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
                }}
              >
                ›
              </button>

              <div
                ref={zoomScrollRef}
                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                onScroll={handleZoomScroll}
              >
                {selectedProject.images.map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-full h-full flex items-center justify-center p-4 md:p-12 snap-center relative">
                    <div className="relative inline-flex max-w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
                      <img
                        src={img}
                        alt=""
                        className="max-w-full max-h-[85vh] rounded-lg shadow-[0_30px_100px_rgba(0,0,0,0.5)] object-contain select-none"
                      />

                      {/* Clickable areas over the image */}
                      <div
                        className="absolute left-0 top-0 w-1/2 h-full z-20 cursor-w-resize"
                        onClick={() =>
                          setZoomedImageIndex(
                            (prev) => (prev! - 1 + selectedProject.images!.length) % selectedProject.images!.length
                          )
                        }
                        title={language === Languages.EN ? 'Previous' : 'ก่อนหน้า'}
                      />
                      <div
                        className="absolute right-0 top-0 w-1/2 h-full z-20 cursor-e-resize"
                        onClick={() => setZoomedImageIndex((prev) => (prev! + 1) % selectedProject.images!.length)}
                        title={language === Languages.EN ? 'Next' : 'ถัดไป'}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-28 bg-black/40 backdrop-blur-md border-t border-white/5 flex items-center justify-center gap-3 px-6 overflow-x-auto scrollbar-hide z-[350] relative pointer-events-auto">
              {selectedProject.images.map((img, i) => (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedImageIndex(i);
                  }}
                  className={`flex-shrink-0 h-14 w-14 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer hover:scale-110
                            ${i === zoomedImageIndex ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-30 grayscale'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover select-none" />
                </div>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default Projects;
