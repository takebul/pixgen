import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
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
      <Button variant="outline" className={"w-full"}>
        <Link href={`/photos/${photo.id}`}>View Details</Link>
      </Button>
    </Card>
  );
};

export default PhotoCard;
