import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

export default function ProductList({ products }) {
    return (
        <div className={styles.list}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
