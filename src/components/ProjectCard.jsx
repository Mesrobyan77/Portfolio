import { Tilt } from "react-tilt";
import { github, globus, sunIcon, moonIcon } from "../assets";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live,
  themes,
  imagesByTheme,
}) => {
  const cardRef = useRef(null);

  const [currentTheme, setCurrentTheme] = useState(themes?.[0] || "light");
  const [currentImage, setCurrentImage] = useState(
    imagesByTheme ? imagesByTheme[currentTheme] : image
  );

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  const toggleTheme = () => {
    if (!themes) return;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(nextTheme);
    if (imagesByTheme) setCurrentImage(imagesByTheme[nextTheme]);
  };

  return (
    <div ref={cardRef}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[476px]"
      >
        <div className="relative w-full">
          <img
            src={currentImage}
            alt="project_image"
            className="w-full h-[220px] object-cover object-left rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {live && (
              <div
                onClick={() => window.open(live, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={globus}
                  alt="live site"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {themes && (
              <div
                onClick={toggleTheme}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={currentTheme === "dark" ? moonIcon : sunIcon}
                  alt="toggle theme"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;
