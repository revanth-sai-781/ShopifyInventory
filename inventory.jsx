import { useState } from "react";
import './inventory.css';

function Inventory()
 {
  
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [sum, setSum] = useState();
  const [edited, setIsEdited] = useState(false);
  const [currentInd, setCurrentInd] = useState(null);

     function Calculation()
     {
      users.push({ name,qty,price,sum });

      const total = users.reduce((total,user)=>{
        total += Number(user.sum)
        return total
      },0);
       // calculates total price * qty
       setTotal(total);
           // Clear the input fields
    setName('');
    setQty('');
    setPrice('');
    setSum('');
    }


    const handlePriceChange = (e) => {
      const newPrice = parseFloat(e.target.value);
      if (!isNaN(newPrice)) {
        setPrice(newPrice);
        calculateTotal(newPrice, qty);
      }
      };
      
      // Event handler for quantity selection
       const handleQuantityChange = (e) => {
       const newQuantity = parseInt(e.target.value);
       if (!isNaN(newQuantity)) {
        setQty(newQuantity);
        calculateTotal(price, newQuantity);
        }
        };
      
       // Calculate the total based on price and quantity
       const calculateTotal = (price, qty) => {
      const newTotal = price * qty;
      setSum(newTotal);
       };

       function refreshPage(){ 
        window.location.reload(); 
    }

    const handleEdit = (index) => {
        // Get the product to edit based on the index
        const userToEdit = users[index];
        setName(userToEdit.name);
        setQty(userToEdit.qty);
        setPrice(userToEdit.price);
        setSum(userToEdit.sum);

        setCurrentInd(index);
      };
      

    return (
        <div class="container-fluid bg-2 text-center">
            <h1 align = "center"> - Shopify Inventory - </h1>
            <br/>
        <div class="row">
        
        <div class="col-sm-8">

        <table class="table table-bordered">
                <h3 align="left"> Add Products  </h3>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    <th>Option</th>
                </tr>
                <tr>
                
                <td>
                  
                     <input type="text" class="form-control" placeholder="Item Name" value={name}
                        onChange={(event) =>
                        {
                            setName(event.target.value);      
                        }}
                                       
                        />

                </td>
                <td>
                    <input type="text" class="form-control" placeholder="Enter Price" 
                        value={price}
                        onChange={handlePriceChange}
                        />
                </td>
                <td>
                <input type="number" class="form-control" placeholder="Enter Qty" 
                        value={qty}
                        onChange={handleQuantityChange}
                 />

                </td>
                <td>
                    
                    <input type="text" value={sum} class="form-control" placeholder="Enter Total" id="total_cost" name="total_cost" disabled/>
                </td>
                <td>
                  

                <button
                    className="btn btn-success"
                    type="submit"
                    onClick={Calculation}
                  >
                    {edited ? "Update" : "Add"}
                  </button>
                </td>
                </tr>
        </table>
        <h3 align="left">  Product List :  </h3>
        <table class="table table-bordered">
        
                    <thead>
                    <tr>
                        <th>Item Name</th>
                       
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                        
                    </tr>
                    </thead>

                    <tbody>
                    {users.map((row,index) => (
            <tr key={index}>
              <td>{row .name}</td>
              <td>{row .price}</td>

              <td>{row .qty}</td>
              <td>{row .sum}</td>

              <td>
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
            </tr>
          ))}
        </tbody>
                </table>
        </div>

        <div class="col-sm-4">
                
                <div class="form-group" align="left">
                        <h3>Total</h3>
               
                <input type="text"  class="form-control" placeholder="Enter Total" required  disabled
                value={total} /> <nr />
                <br/>
                <button type="button" class="btn btn-success" onClick={ refreshPage }> <span>Clear All</span> </button> 

            </div>
            </div>

 </div>
      </div>
    );
}
  
  export default Inventory;