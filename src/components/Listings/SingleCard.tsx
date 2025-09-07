"use client"

export default function Card({ image, title, description }) {
  return (
    <div className="bg-stone-400 rounded-lg shadow-md overflow-hidden w-60 min-h-[18rem] mx-auto cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
