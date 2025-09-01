import Image from 'next/image'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full mx- h-16 z-50 bg-black flex justify-between px-10">
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
  )
}

export default Header