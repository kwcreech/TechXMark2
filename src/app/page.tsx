import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <Image 
          src="/images/moralebooster.jpg" 
          alt="Morale Boosting Image"
          height={250}
          width={250}
        />
      </div>
      <div className="mt-10">
        <p className="text-center">
          Come learn the basics of NextJS with me! On this website I will go over what each file and directory means,
          what the App Router is, and what Server Components are.
        </p>
        <p className="text-center text-4xl font-extrabold mt-10">
          You got this!
        </p>
      </div>
    </main>
  );
}
