import Image from "next/image";

const imageStyle = {
  height: "24px",
};

const TechStackSection = () => {
  return (
    <div className="grid grid-cols-12 mb-16">
      <h2 className="col-start-4 col-span-6 subheading mb-6">Tech Stack</h2>
      {/* Logos aligned wider, starting at col 2 */}
      <div className="col-start-2 col-span-10 flex justify-between">
        <Image
          src="/images/skillsLogos/next.svg"
          alt="nextjs logo"
          width={120}
          height={24}
          style={imageStyle}
        />
        <Image
          src="/images/skillsLogos/node.svg"
          alt="node logo"
          width={85}
          height={24}
          style={imageStyle}
        />
        <Image
          src="/images/skillsLogos/tailwindcss.svg"
          alt="tailwindcss logo"
          width={191}
          height={24}
          style={imageStyle}
        />
        <Image
          src="/images/skillsLogos/postgresql.svg"
          alt="postgresql logo"
          width={128}
          height={24}
          style={imageStyle}
        />
        <Image
          src="/images/skillsLogos/express.svg"
          alt="express logo"
          width={41}
          height={24}
          style={imageStyle}
        />
        <Image
          src="/images/skillsLogos/knex.svg"
          alt="knex logo"
          width={85}
          height={24}
          style={imageStyle}
        />
        <Image
          src="/images/skillsLogos/typescript.svg"
          alt="typescript logo"
          width={114}
          height={24}
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default TechStackSection;
