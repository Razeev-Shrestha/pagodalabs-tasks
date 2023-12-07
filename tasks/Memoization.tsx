//@ts-nocheck

import { memo } from "react";

/** memoized component,
 * i.e it will only re-render if its props (i.e the product object) changes. */
const ProductItem = memo(({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
});

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

/** using useMemo to wrap the expensive calculation of prime factors,
so that the calculation only occurs when the number prop changes. */
const PrimeFactors = ({ number }) => {
  const primeFactors = useMemo(() => {
    const factors = [];
    for (let i = 2; i <= number; i++) {
      while (number % i === 0) {
        factors.push(i);
        number /= i;
      }
    }
    return factors;
  }, [number]);

  return (
    <div>
      <h3>Prime factors of {number}:</h3>
      <ul>
        {primeFactors.map((factor) => (
          <li key={factor}>{factor}</li>
        ))}
      </ul>
    </div>
  );
};

const ComponentA = () => {
  return <h1>Component A</h1>;
};

/**only default exported */
/**reduces bundle size, boosts overall performance of app. */
const ComponentB = React.lazy(() => import("./ComponentB"));

function MyComponent() {
  return (
    <div>
      <ComponentA />
      <Suspense fallback={<p>Loading...</p>}>
        <ComponentB />
      </Suspense>
    </div>
  );
}
