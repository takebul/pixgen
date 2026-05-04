import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  const res = await fetch("https://pixgen-gold.vercel.app/data.json");
  const data = await res.json();
  const photos = data.items;

  const filteredPhotos = category
    ? photos.filter(
        (photo) => photo.category?.toLowerCase() == category?.toLowerCase(),
      )
    : photos;

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All Photos</h1>

      <Category />

      <div className="grid grid-cols-4 gap-5">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
