import { useRef, useState } from "react";
import ExpandButton from "../components/ExpandButton";
import Card from "./../components/Card";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [showExpandButton, setShowExpandButton] = useState(true);
  const [showOverlayContent, setShowOverlayContent] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({ display: "none" });

  const cardRef = useRef();

  const handleExpandCard = () => {
    const { top } = cardRef.current.getBoundingClientRect();
    setShowExpandButton(false);
    setOverlayStyle({
      ...overlayStyle,
      display: "block",
      top,
    });
    setTimeout(
      () =>
        setOverlayStyle({
          top: 0,
          height: "100%",
          width: "100%",
        }),
      100
    );
    setTimeout(() => setShowOverlayContent(true), 200);
    setTimeout(() => {
      setExpanded(true);
      setShowCard(false);
    }, 400);
  };

  const handleCloseCard = () => {
    setExpanded(false);
    setShowOverlayContent(false);
    setShowExpandButton(true);

    const { top } = cardRef.current.getBoundingClientRect();
    setOverlayStyle({
      ...overlayStyle,
      top,
      height: "17rem",
      width: "17rem",
    });
    setTimeout(() => {
      setOverlayStyle({
        display: "none",
      });
      setShowCard(true);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center gap-8 py-8 px-8">
      <p className="text-sm font-light text-gray-500">
        <span className="font-semibold text-gray-800">Shared</span> by you
      </p>
      <Card
        cardRef={cardRef}
        handleCloseCard={handleCloseCard}
        imageSrc={"/tokyo.jpeg"}
        overlayStyle={overlayStyle}
        showOverlayContent={showOverlayContent}
        showCard={showCard}
        expanded={expanded}
        title={"Lost in Tokoy"}
        tagline={"By Kristoffer"}
        comments={"8"}
      />

      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-extrabold text-[2.6rem]">Lost in Tokyo</h1>
        <p className="text-center text-sm text-stone-700">
          Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam
          eget risus varius blandit sit amet non magna.
        </p>
      </div>
      <ExpandButton
        showExpandButton={showExpandButton}
        handleExpandCard={handleExpandCard}
      />
    </div>
  );
}
