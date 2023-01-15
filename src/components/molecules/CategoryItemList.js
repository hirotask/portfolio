import WorkCategory from '../../util/WorkCategory';
import { CategoryItem } from '../atoms/CategoryItem';

export const CategoryItemList = ({ setCategoryIdx }) => {
  const categories = [
    {
      category: WorkCategory.MINECRAFT,
      text: 'Minecraft',
    },
    {
      category: WorkCategory.COMPUTER_SCIENCE,
      text: 'コンピュータサイエンス',
    },
    {
      category: WorkCategory.MOBILE_APPS,
      text: 'モバイルアプリ',
    },
    {
      category: WorkCategory.OTHERS,
      text: 'その他',
    },
  ];

  return (
    <>
      {categories.map((cat, idx) => (
        <CategoryItem
          category={cat.category}
          text={cat.text}
          key={idx}
          setCategoryIdx={setCategoryIdx}></CategoryItem>
      ))}
    </>
  );
};