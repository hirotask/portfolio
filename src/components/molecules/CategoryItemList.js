import { CategoryItem } from "../atoms/CategoryItem";

export const CategoryItemList = () => {
  const categories = ["Minecraft", "画像処理", "モバイルアプリ", "その他"];

  return (
    <>
      {categories.map((cat, idx) => (
        <CategoryItem text={cat} key={idx}></CategoryItem>
      ))}
    </>
  );
};
