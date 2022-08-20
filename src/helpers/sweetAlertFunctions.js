// SWEET ALERT 2
import Swal from 'sweetalert2';

/**
 * It takes the response from the server and the input data from the form, and displays a success
 * message to the user
 * @param resp - the response from the server
 * @param inputData - the data that the user has inputted in the form
 */
export const orderAlert = (resp, inputData) => {
  Swal.fire({
    title: `Thank you, ${inputData.name}. We're processing your order!`,
    html: `<p>The code of your order is <b>${resp.id}</b></p>`,
    icon: 'success',
    iconColor: '#d87d4a',
    confirmButtonColor: '#d87d4a',
  });
};

/**
 * It takes a product object as an argument, and then displays a toast message with the product name
 */
export const toastAddProduct = product => {
  Swal.fire({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    icon: 'success',
    iconColor: '#d87d4a',
    title: `Added ${product.name}`,
  });
};

/**
 * It takes in a count, stock, and name, and if the count is equal to the stock, it fires a SweetAlert2
 * alert
 * @param count - the current count of the item in the cart
 * @param stock - the number of items in stock
 * @param name - The name of the product
 */
export const maxStockAlert = (count, stock, name) => {
  count === stock &&
    Swal.fire({
      title: `Sorry!`,
      html: `<p>We only have <b>${stock} ${name}</b> in stock</p>`,
      icon: 'error',
      confirmButtonColor: '#d87d4a',
      timer: 2000,
    });
};
