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
        <p className="text-lg">I'm making Manufacturing
        easy</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
Hey I'm Evan! I have various experience in creating web applications and with 3d Printing. I picked up a Eryone ER-20 3D Printer back in 2021 and have been improving my 3d printing skills ever since. I've taught swimming lessons for 7 years for the cities of Mississauga and Toronto so I have a lot of experiecne teaching all ages.
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
