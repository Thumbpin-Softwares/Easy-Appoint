import Image from "next/image";

export default function Logo() {
  return (
    <main className="relative h-14 w-28 overflow-hidden">
      <Image
        src="/easy.jpeg"
        alt="Easy Appoint"
        fill
        className="object-cover scale-104"
      />
    </main>
  );
}
