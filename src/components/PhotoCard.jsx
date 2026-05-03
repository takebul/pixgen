import { Card } from "@heroui/react";
import Image from "next/image";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="">
      <div>
        <Image
          src={photo.imageUrl}
          height={200}
          width={200}
          alt={photo.title}
        />
      </div>
    </Card>
  );
};

export default PhotoCard;
