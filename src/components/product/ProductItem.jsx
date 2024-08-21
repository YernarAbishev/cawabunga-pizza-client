function ProductItem({product, addToCart}) {

    function handleAddToCart() {
        addToCart({...product, quantity: 1});
    }

    return (
        <div class="product-card">
            <div class="product-card__img">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div class="product-card__body">
                <strong class="product-title">{product.name}</strong>
                <p class="product-description">{product.description}</p>
            </div>
            <div class="product-card__footer">
                <span class="product-price">{product.price} &#8376;</span>
                <button onClick={handleAddToCart} class="btn is-primary">В корзину</button>
            </div>
        </div>
    );
}

export default ProductItem;