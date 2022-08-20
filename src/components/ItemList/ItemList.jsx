// CUSTOM COMPONENTS
import Item from '../Item/Item';

// STYLES
import './ItemList.scss';

const ItemList = ({ products }) => {
  const header = products.length === 6 ? 'store' : products[0].category;

  return (
    <>
      <div className='itemList-header my-0 d-flex justify-content-center align-items-center'>
        {header.toUpperCase()}
      </div>
      {products.map(prod => (
        <Item
          product={prod}
          key={prod.id}
        />
      ))}
    </>
  );
};

export default ItemList;
