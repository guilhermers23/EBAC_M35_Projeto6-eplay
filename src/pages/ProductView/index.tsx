import { useParams } from "react-router";
import Hero from "../../components/Hero";

export const ProductView = () => {
  const { id } = useParams();
  console.log(id)

  return (
    <Hero />
  )
};
