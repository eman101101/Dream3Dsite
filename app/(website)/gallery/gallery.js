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
        <p className="text-lg">A collection of some of the 3D prints I&#39;ve made.</p>
      </div>

      {/* Section for test1.jpg */}
      <div className="mb-16 mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:mb-32 md:mt-16 md:gap-16">
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
          <p className="text-center mt-2">Hand Wine Holder</p>
          <a href="https://makerworld.com/en/models/167066#profileId-183419" className="block text-center text-blue-500 mt-2" target="_blank" rel="noopener noreferrer">Model Link</a>
        </div>
        <div className="relative overflow-hidden rounded-md ">
          <div className="relative aspect-square">
            <Image
              src="/images/test2.jpg"
              alt="Test Image"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-2">Airless Basketball</p>
          <a href="https://makerworld.com/en/models/563387#profileId-482952" className="block text-center text-blue-500 mt-2" target="_blank" rel="noopener noreferrer">Model Link</a>
        </div>
        <div className="relative overflow-hidden rounded-md ">
          <div className="relative aspect-square">
            <Image
              src="/images/testapex.gif"
              alt="Test Image"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-2">Apex Legends Wingman</p>
          <a href="https://makerworld.com/en/models/487570?from=search#profileId-400386" className="block text-center text-blue-500 mt-2" target="_blank" rel="noopener noreferrer">Model Link</a>
        </div>
        
        <div className="relative overflow-hidden rounded-md ">
          <div className="relative aspect-square">
            <Image
              src="/images/test5.jpg"
              alt="Dream3D Logo"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          
          <p className="text-center mt-2">Golf ball dispenser</p>
          <a href="https://makerworld.com/en/models/180302?from=search#profileId-198349" className="block text-center text-blue-500 mt-2" target="_blank" rel="noopener noreferrer">Model Link</a>
        </div>
        <div className="relative overflow-hidden rounded-md ">
          <div className="relative aspect-square">
            <Image
              src="/images/test4.jpg"
              alt="Dream3D Logo"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-2">Orbital Clock</p>
          <a href="https://makerworld.com/en/models/540894?from=search#profileId-458402" className="block text-center text-blue-500 mt-2" target="_blank" rel="noopener noreferrer">Model Link</a>
        </div>
        <div className="relative overflow-hidden rounded-md">
          <div className="relative aspect-square">
            <Image
              src="/images/test3.jpg"
              alt="Dream3D Logo"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-center mt-2">Suspended Millennium Falcon</p>
          <a href="https://makerworld.com/en/models/460390?from=search#profileId-368852" className="block text-center text-blue-500 mt-2" target="_blank" rel="noopener noreferrer">Model Link</a>
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
