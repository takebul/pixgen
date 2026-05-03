import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-gold.vercel.app/data.json");
  const data = await res.json();
  const photos = data.items;
  const topPhotos = photos.slice(0, 8);

  return (
    <div>
      <h1 className="text-2xl font-bold mt-5">Top Generations </h1>

      <div>
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
