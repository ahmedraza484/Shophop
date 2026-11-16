import ProductCard from "../Components/ProductCard";
import { productList } from "../assets/assets";

const Shop = () => {
  return (
    <section className="shop-section">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="box">
        {productList.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
