"use client"

import Card from "./SingleCard";

export default function CardGrid() {
  const cards = [
    {
      image: "/bg1.jpg",
      title: "Card One",
      description: "This is the first card description.",
    },
    {
      image: "/bg1.jpg",
      title: "Card Two",
      description: "This is the second card description.",
    },
    {
      image: "/bg1.jpg",
      title: "Card Three",
      description: "This is the third card description.",
    },

   
  ];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
