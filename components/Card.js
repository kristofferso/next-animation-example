import Image from "next/image";

export default function Card({
  cardRef,
  handleCloseCard,
  imageSrc,
  overlayStyle,
  showCard,
  showOverlayContent,
  expanded,
  title,
  tagline,
  comments,
}) {
  return (
    <>
      <div
        ref={cardRef}
        className={`relative h-[17rem] w-[17rem] rounded overflow-hidden shadow-2xl ${
          showCard ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          alt={title + "image"}
        />
      </div>

      <div
        style={overlayStyle}
        className={`duration-500 transition-[top,_bottom,_height,_width] ease-[cubic-bezier(0.2,-0.2,0.265,1.3)] absolute ${
          expanded ? "" : `rounded overflow-hidden h-[17rem] w-[17rem]`
        } `}
      >
        <button
          className="fixed z-10 top-5 left-5 flex items-center justify-center"
          onClick={handleCloseCard}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 2L30 30" stroke="white" strokeWidth="3" />
            <path d="M2 30L30 2" stroke="white" strokeWidth="3" />
          </svg>
        </button>
        <div>
          <h2
            className={`fixed z-10 text-6xl text-white font-extrabold left-10 transition-[bottom,_opacity] duration-[0.4s] ease-[cubic-bezier(.2,-0.12,.44,2)] ${
              showOverlayContent
                ? "bottom-24 opacity-100"
                : "bottom-12 opacity-0"
            }`}
          >
            {title}
          </h2>
          <p
            className={`fixed z-10 text-xl font-light text-white left-10 transition-[bottom,_opacity] duration-500 ease-in-out ${
              showOverlayContent
                ? "bottom-16 opacity-100"
                : "bottom-0 opacity-0"
            }`}
          >
            {tagline}
          </p>
          <div
            className={`flex gap-3 items-center fixed z-10 text-lg font-light bottom-[3.5rem] text-white transition-[right,_opacity] duration-500 ease-in-out ${
              showOverlayContent ? "right-10 opacity-100" : "right-4 opacity-0"
            }`}
          >
            <p className="mb-1">{comments}</p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2C0 0.89543 0.895431 0 2 0H19C20.1046 0 21 0.89543 21 2V20.5L17 16.2963H2C0.89543 16.2963 0 15.4009 0 14.2963V2Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <Image
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          alt={title + "image"}
        />
      </div>
    </>
  );
}
