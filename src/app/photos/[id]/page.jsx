import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://pixgen-gold.vercel.app/data.json");
  const data = await res.json();
  const photos = data.items;

  const photo = photos.find((p) => p.id == id);

  return (
    <div className="container mx-auto justify-items-center">
      <Card className="border rounded-xl">
        <div className="relative w-100 aspect-video">
          <Image
            src={photo.imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={photo.title}
            className="object-cover rounded-xl"
          />
          <Chip size="sm" className="absolute right-2 top-2">
            {photo.category}{" "}
          </Chip>
        </div>
        <div>
          <h2 className="font-medium">{photo.title} </h2>
          <p>Prompt: {photo.prompt} </p>
          <p>Model: {photo.model}</p>
        </div>

        <div className="flex items-center gap-5">
          <p className="flex items-center gap-2">
            <FcLike /> {photo.likes}{" "}
          </p>
          <Separator orientation="vertical" />
          <p className="flex items-center gap-2">
            <FaCloudDownloadAlt /> {photo.downloads}{" "}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PhotoDetails;
