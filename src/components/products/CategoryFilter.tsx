"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Category {
  id: number;
  name: string;
}

interface Props {
  categoryId: number | null;
}

const CategoryFilter: React.FC<Props> = ({ categoryId }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (value: string) => {
    if (value === "-1") {
      router.push(`/products`);
    } else {
      router.push(`/products/category/${value}`);
    }
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={
            categoryId
              ? categories.find((item) => item.id === Number(categoryId))?.name
              : "Categoria"
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="-1" key={0}>
          Tutti
        </SelectItem>

        {categories.map((category) => (
          <SelectItem value={String(category.id)} key={category.id}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
