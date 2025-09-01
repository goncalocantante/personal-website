import Image from "next/image";

const ResumeSection = () => {
  return (
    <div className="grid grid-cols-12">
      <h2 className="col-start-4 col-span-6 subheading mb-6">Resume</h2>
      <p className="col-start-4 col-span-6 text-body ">
        Here&apos;s a snapshot of my work so far — from full-stack roles in
        consulting and non-profits to personal projects and hackathons. I focus
        on clean code, product impact, and learning fast. If you'd like the full
        PDF version, feel free to reach out.
      </p>
      <Image
        src="/images/wavy-divider.svg"
        width="160"
        height="12"
        alt="Wavy Line Section Divider"
        className="col-start-4 col-span-8 mt-4 mb-16"
      />
    </div>
  );
};

export default ResumeSection;
