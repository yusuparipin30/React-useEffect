
//useEffect merupakan function yang berjalan setiap kali terdapat perubahan pada DOM.
import { useState, useEffect } from "react"
import ProductList from "./components/ProductList";

/*#1.Di saat pertama kali page load, maka useEffect running. Kemudian klik salah satu dari tombol “Delete”,
 maka useEffect running kembali.*/
// function App() {
//   const [products, setProducts] = useState([
//     {id: 1, title: 'Product 1', price: 899},
//     {id: 2, title: 'Product 2', price: 982},
//     {id: 3, title: 'Product 3', price: 322},
//     {id: 4, title: 'Product 4', price: 763},
//     {id: 5, title: 'Product 5', price: 389}
//   ]);
 
//   const deleteProduct = (productId) => {
//     const newProducts = products.filter(product => product.id !== productId);
//     setProducts(newProducts);
//   }
 
//   useEffect(() => {
//     console.log('Use Effect Running');
//   });
 
//   return (
//     <div>
//       <ProductList products={ products } deleteProduct={ deleteProduct } />
//     </div>
//   );
// }

//#2.memanggil useEffect hanya pada saat page load. rubah 
//ubah useEffect function menjadi seperti berikut:
// useEffect(() => {
//   console.log('Use Effect Running');
// }, []);
 

//#3. memanggil useEffect tergantung pada perubahan suatu state.
function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);
 
   //membuat dependence untuk menjalankan useEffec
  const [name, setName] = useState('Yusuf');
  
        //membuat fuction deleteProduct
        //tangkap idnya kasih nama yang berbeda productId
        //buat variable baru const newProduct dan gunakan fungsi js yaitu filter untuk mengambil productnya
        //di dalam filter ambil item dari setiap listnya yaitu product.id !==(tidak sama dengan productId)
        //kemudian update useStatenta 
  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }
 
  useEffect(() => {
    console.log('Use Effect Running');
  }, [name]);

    /*pada button buat event onClick yang berfungsi untuk merubah useState ('Yusuf')*/ 
    /* output useStatenya mengunakan paragraf */
  return (
    <div>
      <ProductList products={ products } deleteProduct={ deleteProduct } />
      <button onClick={ () => setName('Arifin') }>Change Name</button>
      <p>Name: { name }</p>
    </div>
  );
}
 
/*Kembali ke Browser, maka useEffect berjalan pada saat pertama kali page load.

Kemudian klik tombol “Change Name”, maka useEffect berjalan kembali.

Jika Anda klik salah satu dari tombol “Delete”, maka useEffect tidak akan berjalan.*/
export default App;