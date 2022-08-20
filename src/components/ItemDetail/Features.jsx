// BOOTSTRAP
import Card from 'react-bootstrap/Card';

const Features = ({ product }) => {
  const { features, includes } = product;

  return (
    <>
      <Card.Body className='mx-auto mt-3 col-12 col-sm-8 col-md-10 detail-features'>
        <h3 className='detail-title'>FEATURES</h3>
        <p className='detail-feature-txt text-muted my-0'>{features}</p>
      </Card.Body>

      <Card.Body className='mx-auto mb-5 col-12 col-sm-8 col-md-10 detail-box'>
        <h3 className='detail-title'>IN THE BOX</h3>

        <div className='detail-box-container'>
          <p className='detail-box-quant'>{includes[0].quantity}</p>
          <p className='detail-box-item text-muted '>
            {product.includes[0].item}
          </p>
          <p className='detail-box-quant'>{product.includes[1].quantity}</p>
          <p className='detail-box-item text-muted '>
            {product.includes[1].item}
          </p>
          <p className='detail-box-quant'>{product.includes[2].quantity}</p>
          <p className='detail-box-item text-muted '>
            {product.includes[2].item}
          </p>
          <p className='detail-box-quant'>{product.includes[3].quantity}</p>
          <p className='detail-box-item text-muted '>
            {product.includes[3].item}
          </p>
          {product.includes[4] && (
            <>
              <p className='detail-box-quant'>{product.includes[4].quantity}</p>
              <p className='detail-box-item text-muted '>
                {product.includes[4].item}
              </p>
            </>
          )}
        </div>
      </Card.Body>
    </>
  );
};

export default Features;
