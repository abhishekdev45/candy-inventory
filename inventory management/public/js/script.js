const addItemForm = document.getElementById('addItemForm')


function addItem(event) {

  event.preventDefault();
  const candyName = document.getElementById('candyName').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;

  const newItem = { candyName, description, price, quantity };

  axios.post('http://localhost:3000/inventory/add-product', newItem)
    .then(response => {
      console.log(response.data)
      showData(response.data.newData); 
    })
    .catch(error => {
      console.error('Error adding item:', error);
    });
}

function showData(addedItem){
      
      const tableBody = document.getElementById('itemsBody');
      const newRow = tableBody.insertRow();
      newRow.innerHTML = `<td>${addedItem.candy}</td>
                          <td>${addedItem.description}</td>
                          <td>${addedItem.price}</td>
                          <td>${addedItem.quantity}</td>
                          <td><button onclick="buyItem(${addedItem.id} , 1)">Buy1</button></td>
                          <td><button onclick="buyItem(${addedItem.id} , 2)">Buy2</button></td>
                          <td><button onclick="buyItem(${addedItem.id} , 3)">Buy3</button></td>`;
}


const buyItem = async (itemId , num) => {
  // console.log(itemId , num);
  try{
    const result = await axios.put(`inventory/update-item?itemId=${itemId}&num=${num}`);
    location.reload();
  }
  catch(err){
    console.log(err);
  } 
}
  
     


document.addEventListener("DOMContentLoaded",()=>{
  axios.get("http://localhost:3000/inventory/get-products").then(res =>{
     for(let i=0; i< res.data.items.length ;i++){
      showData(res.data.items[i]);
     }
     
  })
  .catch(err=>console.log(err))
})

addItemForm.addEventListener('submit' , addItem)

