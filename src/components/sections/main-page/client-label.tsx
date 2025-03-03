import Image from "next/image";

const clients = [
  { src: "/techcrunch-logo.webp", alt: "TechCrunch", width: 180, height: 50 },
  { src: "/wsj.png", alt: "WSJ", width: 120, height: 50 },
  { src: "/BBC-Logo-1.png", alt: "BBC", width: 120, height: 40 },
  { src: "/time.png", alt: "TIME", width: 120, height: 30 },
  { src: "/images.png", alt: "HuffPost", width: 140, height: 40 },
  { src: "/oprah-logo-black.png", alt: "The Oprah Magazine", width: 120, height: 50 },
  { src: "/theregister.png", alt: "The Register", width: 150, height: 45 },
];

export default function ClientLabel() {
  return (
    <div className="flex justify-center items-center gap-14 flex-wrap py-2">
      {clients.map((client, index) => (
        <div key={index} className={`flex justify-center items-center grayscale hover:grayscale-0 transition ${client.width}px ${client.height}px`}>
          <Image src={client.src} alt={client.alt} width={client.width} height={client.height} />
        </div>
      ))}
    </div>
  );
}
