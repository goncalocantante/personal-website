import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <h1>Hi, I'm <span>Gonçalo Cantante</span>!</h1>
        <p>I build scalable, user-focused web applications using modern JS frameworks.</p>
        <p>Currently open to remote-first or hybrid teams building useful AI tools — especially where I can learn fast and contribute hands-on.</p>
        <p>This site is the first of many. I'm sharing my progress publicly as I pivot into the world of applied AI.</p>
        <Image
          src="/images/wavy-divider.svg"
          width={160}
          height={12}
          alt="Picture of the author"
        />
        <div>
          <h2>Find Me On</h2>
          <div>
            <div><span>Github</span></div>
            <div><span>LinkedIn</span></div>
          </div>
        </div>
        <div>
          <h2>Contact</h2>
          <p>You can reach me out at anytime at goncalotantante@gmail.com</p>
        </div>
      </main>
      <footer>
        <p>2025 Built with Next.js by Gonçalo Cantante</p>
      </footer>
    </div>
  );
}
