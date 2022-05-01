import { Product } from '../../data/index';
import './styles.scss';

interface ProductComponentProps {
  selectedProduct: Product;
  animateClass: string;
}

export default function ProductComponent({ selectedProduct, animateClass }: ProductComponentProps) {
  const {id, title, subtitle, description, info, img} = selectedProduct; 

  return (
    <div className={`product ${animateClass}`} key={id}>
      <div className="product-content">
        <div className="product-content-title">
          <h2>SNEAKER</h2>
          <span>{title}</span>
        </div>
        <div className="product-content-subtitle">
          <span>{subtitle}</span>
        </div>
        <div className="product-content-description">
          <p>{description}</p>
        </div>
        <div className="product-content-info">
          <p>SKU: {info.sku1}</p>
          {info.sku2 && <p>SKU: {info.sku2}</p>}
          {info.releaseDate && <p>Release date: {info.releaseDate}</p>}
          {info.colorWay && <p>Colorway: {info.colorWay}</p>}
        </div>
      </div>
      <div className="product-content-image">
        <img src={img} alt={subtitle} />
      </div>
    </div>
  )
}
