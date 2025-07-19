import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden px-[40px] bg-black text-white font-body">
      <header className="w-full flex justify-between py-[24px]">
        <Image
          src="/images/signature.svg"
          width={66}
          height={37}
          alt="Logo - Handwritten Signature"
        />
        <ul className="flex gap-[24px]">
          <a href="https://github.com/goncalocantante" className="my-auto">
            <Image
              src="/images/icons/github.svg"
              width={20}
              height={20}
              alt="Github Logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/goncalo-cantante/" className="my-auto">
            <Image
              src="/images/icons/linkedIn.svg"
              width={20}
              height={20}
              alt="LinkedIn Logo"
            />
          </a>
        </ul>
      </header>
      <main className="grid grid-cols-12 flex-1 overflow-y-scroll grow">
        <div className="col-span-3"></div>
        <div className="col-span-5 h-full flex flex-col justify-center">
          <h1 className="pb-[24px] text-3xl">Hi, I&apos;m <span className="font-playfair text-highlight font-bold">Gonçalo Cantante</span>!</h1>
          <div className="pr-[128px] pb-[40px] flex flex-col gap-1">
            <p>I build scalable, user-focused web applications using modern JS frameworks.</p>
            <p>Currently open to remote-first or hybrid teams building useful AI tools — especially where I can learn fast and contribute hands-on.</p>
            <p>This site is the first of many. I&apos;m sharing my progress publicly as I pivot into the world of applied AI.</p>
          </div>
          <Image
            src="/images/wavy-divider.svg"
            width={160}
            height={12}
            alt="Wavy Line Section Divider"
            className="pb-[56px]"
          />
          <div className="pb-[48px]">
            <h2 className="pb-[24px] font-bold font-playfair">Find Me On</h2>
            <div className="flex gap-[24px]">
              <div className="flex gap-[8px]">
                <a href="https://github.com/goncalocantante" className="my-auto">
                  <Image
                    src="/images/icons/github.svg"
                    width={16}
                    height={16}
                    alt="Github Logo"
                  />
                {/* <span>Github</span> */}
                </a>
                </div>
              <div className="flex gap-[8px]">
                <a href="https://www.linkedin.com/in/goncalo-cantante/" className="my-auto">
                  <Image
                    src="/images/icons/linkedIn.svg"
                    width={16}
                    height={16}
                    alt="LinkedIn Logo"
                  />
                  {/* <span>LinkedIn</span */}
                </a>
              </div>

            </div>
          </div>
          <div>
            <h2 className="pb-[24px] font-bold font-playfair">Contact</h2>
            <p >You can reach me out at anytime at <a className="underline" href="mailto:goncalo.cantante.contact@gmail.com”" > goncalocantante@gmail.com</a></p>
          </div>
        </div>
      </main>
      <footer className="w-full text-left py-[24px]">
        <p>2025 Built with Next.js by Gonçalo Cantante</p>
      </footer>
    </div>
  );
}
