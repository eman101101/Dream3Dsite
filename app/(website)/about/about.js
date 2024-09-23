import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">Hey I&apos;m Evan! I&apos;m making 3D printing easy for everyone</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        <Image src="/images/evan.jpg" alt="Work 1" className="mt-4 rounded-lg shadow-lg w-96 h-96 object-cover mx-auto" width={384} height={384} />
        <Image src="/images/evan2.jpg" alt="Work 2" className="mt-4 rounded-lg shadow-lg w-96 h-96 object-cover mx-auto" width={384} height={384} />
      </div>
      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          I have various experience in creating web applications and with 3D Printing over the last several years. I picked up an Eryone ER-20 back in 2021 and have been improving my 3D printing skills ever since. I&apos;ve taught swimming lessons for 7 years for the cities of Mississauga and Toronto so I have a lot of experience teaching all ages as well.
          If you want to know more about me, check out my portfolio below.
        </p>
        <p>
          <Link href="https://e2d.me/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">Check out my Portfolio!</a>
          </Link>
        </p>
      </div>
    </Container>
  );
}