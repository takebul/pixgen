import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
  const res = await fetch(`https://pixgen-gold.vercel.app/category.json`);
  const data = await res.json();
  const categories = data.categories;

  return (
    <div className="space-x-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?category=${category?.name.toLowerCase()}`}
        >
          <Button variant="outline">{category.name} </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
