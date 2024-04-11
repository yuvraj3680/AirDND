import React,{useState} from 'react'



import { Button, Modal } from 'antd';
import './AddHotel.css';

const AddHotel = () => {
    
      const [popUpModal, setPopUpModal] = useState(false);
    
      const[data, setData]=useState({
        imgUpload:'',
        hotelName:'',
        address:'',
        open_time:'',
        close_time:'',
        qty:''
      });
      const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({
         ...data,
         [name]:value
        }) 
       }
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        alert('Form submitted successfully!');
        setPopUpModal(false);
        setData({
            imgUpload: '',
            hotelName: '',
            address: '',
            open_time: '',
            close_time: '',
            qty: '',
          });
        
      };
      return (
        <>
        <div className='btn-model'>
          <Button  type="primary" onClick={()=>setPopUpModal(true)}>
            Add Hotel
          </Button>
          </div>
          <Modal title="Add New Hotel" visible={popUpModal}  onCancel={()=>setPopUpModal(false)} footer={false}>
          <form onSubmit={handleSubmit}>
              <label>
                Image Upload:
                <input type="file" name='imgUpload'value={data.imgUpload} onChange={handleChange}/>
              </label>
              <label>
                Hotel Name:
                <input type="text" name='hotelName'value={data.hotelName} onChange={handleChange}/>
              </label>
            
              <label>
                Address:
                <input type="text" name='address'value={data.address} onChange={handleChange}/>
              </label>
              <label>Open Time:
              <input type="time" name="open_time" value={data.open_time} onChange={handleChange}/>
              </label>
              <label>Close Time:
               <input type="time"  name="close_time"value={data.close_time} onChange={handleChange}/>
               </label>
              <label>
                No of Rooms Available:
                <input type="number" name='qty'  value={data.qty} onChange={handleChange} />
              </label>
              <button type="submit">Submit</button>
            </form>
          </Modal>
        </>
      );
    };
    
  
  
export default AddHotel;
 