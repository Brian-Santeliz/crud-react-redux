import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import {useParams, use} from 'react-router-dom'
import {initialState} from './FormAdd'
const FormUpdate = () => {
  const {id} = useParams()
    const {products} = useSelector(select=>select.products);
    const {active} = useSelector(select=>select.products);
    console.log(active)
    const [form, setForm] = useState(initialState)
     const product = products.find(product=>product._id === id);
     if(!product){
       //ejecutar accion que llame a la api
     }
    useEffect(()=>{
        setForm(product)
    },[])
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <form className="card">
            <h1 className="font-weight-light text-center card-header">
              Update Product
            </h1>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  required="required"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  className="form-control"
                  placeholder="Update the name..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>

                <input
                  required="required"
                  type="text"
                  id="description"
                  name="description"
                  value={form.description}
                  className="form-control"
                  placeholder="Update description..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                  required="required"
                  type="number"
                  id="price"
                  name="price"
                  value={form.price}
                  className="form-control"
                  placeholder="Update price..."
                />
              </div>
              <button type="submit" className="btn btn-info btn-block">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormUpdate;
