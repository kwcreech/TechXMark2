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
    </main>
  );
}
