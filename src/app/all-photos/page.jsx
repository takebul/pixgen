import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async () => {
  const res = await fetch("https://pixgen-gold.vercel.app/data.json");
  const data = await res.json();
  const photos = data.items;

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All Photos</h1>

      <div className="grid grid-cols-4 gap-5">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
