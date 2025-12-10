"use client";

import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  testimonial: string;
  videoUrl?: string;
  imageUrl?: string;
  platform?: string;
}

/* ------------------------- Testimonial Card Component ------------------------- */

const TestimonialCard = ({ item, className }: { item: Testimonial; className?: string }) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card hover-lift border border-border",
        className
      )}
    >
      {/* Media Section (Video or Image) */}
      <div className="aspect-[4/3] overflow-hidden  relative">
       {item.videoUrl ? (
  <div
    onClick={() => window.open(item.videoUrl, "_blank")}
    className="w-full h-full cursor-pointer  overflow-hidden relative"
  >
    {/* Dummy Thumbnail */}
    <img
      src={item.imageUrl} // <-- replace with your actual dummy image
      alt="testimonial video"
      className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
    />

    {/* Play Button Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white opacity-80"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
) : (
  <img
    src={item.imageUrl}
    alt={item.clientName}
    className="w-full h-full object-cover rounded-lg"
    loading="lazy"
  />
)}

      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Platform */}
        <div className="flex items-center gap-3 mb-2 text-sm text-muted-foreground">
          <span>{item.platform}</span>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold mb-1 text-foreground">{item.clientName}</h3>
        <p className="text-sm text-muted-foreground mb-3">{item.clientRole}</p>

        {/* Testimonial */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          “{item.testimonial}”
        </p>
      </div>
    </div>
  );
};

/* ---------------------------- Data for Testimonials ---------------------------- */

const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Jaieesh",
    clientRole: "Host, Jai and Bharat show",
    testimonial:
      "Naveen managed my entire YouTube channel—shorts, reels, long-form editing. Exceptional quality every time.",
    videoUrl: "https://www.youtube.com/watch?v=u3GFZXkzymE&list=TLGGmTddtfCJShwwNTEyMjAyNQ",
    platform: "Direct Client",
    imageUrl:"/u3GFZXkzymE-HD.jpg",
  },
  {
    id: "2",
    clientName: "Bharata Sharma",
    clientRole: "Owner, Agency",
    testimonial:
      "All the edits are crisp, clean, and exactly how I wanted. Super satisfied with the final output!",
    imageUrl: "/bCQnQUqJSIs-HD.jpg",
    videoUrl: "https://www.youtube.com/watch?v=bCQnQUqJSIs&list=TLGGO-gzQe0gJ-AwNTEyMjAyNQ",
    platform: "YouTube",
  },
  {
    id: "3",
    clientName: "Eshanu",
    clientRole: "Tarot Card Reader",
    testimonial:
      "Naveen's Podcast Editing improved our content massively. Super fast delivery, friendly communication, and professional results.",
    videoUrl: "https://www.youtube.com/watch?v=yAcWKWVmoQ8&list=TLGG0_du6O4SKx4wNTEyMjAyNQ",
    platform: "LinkedIn",
    imageUrl: "/yAcWKWVmoQ8-SD.jpg",
  },
    {
    id: "4",
    clientName: "Mr. Batra",
    clientRole: "Political Speaker",
    testimonial:
      "Top-quality edits every time. Naveen handled everything end-to-end",
    videoUrl: "https://www.youtube.com/watch?v=i99XeYzfU7Y&list=TLGGlmyPAWdYXyUwNTEyMjAyNQ",
    platform: "Youtube",
    imageUrl: "/i99XeYzfU7Y-HD.jpg",
  },
];

/* ------------------------------ Testimonials Page ------------------------------ */

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Testimonials</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} item={t} />
        ))}
      </div>
    </div>
  );
}
