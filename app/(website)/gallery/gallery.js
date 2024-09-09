import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Container from "@/components/container";

export default function Gallery({ images = [] }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Gallery
      </h1>
      <div className="text-center">
        <p className="text-lg">A collection of 3D Prints.</p>
      </div>

      {/* Section for test1.jpg */}
      <div className="mb-16 mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mb-32 md:mt-16 md:gap-16">
        <div className="relative overflow-hidden rounded-md ">
          <div className="relative aspect-square">
            <Image
              src="/images/test1.jpg"
              alt="Test Image"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-2">Test Image</p>
        </div>
        <div className="relative overflow-hidden rounded-md ">
          <div className="relative aspect-square">
            <Image
              src="/images/Dream.png"
              alt="Dream3D Logo"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-2">Dream3D Logo</p>
        </div>
        <div className="relative overflow-hidden rounded-md ">
          <div className="relative aspect-square">
            <Image
              src="/images/Dream.png"
              alt="Dream3D Logo"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-2">Dream3D Logo</p>
        </div>
        <div className="relative overflow-hidden rounded-md">
          <div className="relative aspect-square">
            <Image
              src="/images/Dream.png"
              alt="Dream3D Logo"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-2">Dream3D Logo</p>
        </div>
        <div className="relative overflow-hidden rounded-md">
          <div className="relative aspect-square">
            <Image
              src="/images/Dream.png"
              alt="Dream3D Logo"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-2">Dream3D Logo</p>
        </div>
      </div>
      
      {/* Section for other images */}
      <div className="mb-16 mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mb-32 md:mt-16 md:gap-16">
        {Array.isArray(images) && images.map((image, index) => {
          if (image.src === "/images/test1.jpg" || image.src === "/images/Dream3D.png") return null; // Skip test1.jpg and Dream3D.png as they're already handled
          const imageProps = urlForImage(image) || null;
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-md bg-slate-50">
              {imageProps && (
                <>
                  <div className="relative aspect-square">
                    <Image
                      src={imageProps.src}
                      alt={image.alt || "Gallery Image"}
                      layout="fill"
                      objectFit="cover"
                      sizes="(max-width: 320px) 100vw, 320px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center mt-2">{image.alt || "Gallery Image"}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  // Replace with your image fetching logic
  const images = [
    { src: "/images/test1.jpg", alt: "Test Image" },
    { src: "/images/Dream.png", alt: "Dream3D Logo" },
    { src: "/images/image2.jpg", alt: "Image 2" },
    { src: "/images/image3.jpg", alt: "Image 3" },
    // Add more images as needed
  ];

  return {
    props: {
      images,
    },
  };
}