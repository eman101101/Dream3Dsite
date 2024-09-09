import Link from "next/link";
import Container from "@/components/container";

export default function Home({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          <h1 className="text-brand-primary mb-6 mt-4 text-center text-4xl font-bold tracking-tight dark:text-white lg:text-5xl lg:leading-snug">
            Dream3D
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10">
            Your Dreams Made Real
          </p>
        </Container>
      )}
    </>
  );
}