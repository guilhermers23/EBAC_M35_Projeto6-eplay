import { useParams } from "react-router";

export const ProductView = () => {
  const { id } = useParams();

  return (
    <div>Product {id}</div>
  )
};
