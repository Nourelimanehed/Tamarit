import { useState } from "react";
import AddChatBox from "./AddChatBox";


const AddChatOffers = () => {
    
    const[ownerShip,setOwnerShip] = useState(false);

    const isOwner = () => {
      setOwnerShip(true);
    }

    
    
    const[msg,setMsg] = useState("");
    const[msgs,setMsgs] = useState([]);
    
    const getMsg = (val) =>{
        setMsg(val.target.value)
        console.warn(val.target.value)
    }

    const item = {msg:"", date:""}
    
    const addMsg = () => {
        
        if(msg!=""){
            item.msg=msg;
            item.date=date;
            msgs.push(item);
            setMsg("");
        }
    }
    
    /*var date = (new Date().getFullYear()).toString().substring(2,5)*/
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ' - ' + today.getHours() + ' : ' + today.getMinutes();

    return (
      <div className="add-chat-container">
        <div className="add-chat-top">
        {ownerShip &&  
            <button className="add-chat-btn">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9163 17.1537C19.9475 16.9437 20.6094 11.8975 17.6419 8.42497C15.8188 6.29122 13.0056 5.1231 9.37314 5.00747L9.35377 1.49935C9.35377 1.2581 9.21439 1.03872 8.99689 0.934973C8.77877 0.833098 8.52064 0.862473 8.33377 1.01497L0.229393 7.66622C0.0843931 7.78497 1.81218e-05 7.96247 -0.000606878 8.14997C-0.00123188 8.33747 0.0825181 8.51497 0.227518 8.63372L8.33252 15.3481C8.51877 15.5025 8.77939 15.5343 8.99564 15.4306C9.21502 15.3275 9.35377 15.1068 9.35377 14.8656L9.37314 11.2787C18.1288 11.2725 18.7513 16.8825 18.7725 17.1143C18.7994 17.4293 18.9988 17.675 19.315 17.685C19.3225 17.6856 19.3294 17.6856 19.3363 17.6856C19.6456 17.6856 19.87 17.46 19.9163 17.1537ZM8.28814 10.2012C8.17064 10.3187 8.10439 10.4775 8.10439 10.6437V13.5425L1.61127 8.15372L8.10439 2.81497V5.6231C8.10439 5.96872 8.38377 6.2481 8.72939 6.2481C12.2856 6.2481 15.0025 7.2781 16.6888 9.2331C17.9569 10.7043 18.54 12.505 18.7394 13.9993C17.3744 12.1343 14.9844 10.0225 8.73002 10.0187C8.73002 10.0187 8.72939 10.0187 8.72877 10.0187C8.56377 10.0187 8.40502 10.0843 8.28814 10.2012Z" fill="#5D70D5"/>
                </svg>
            </button>
        }
        
            <div>
                <div>Meriem Soltani</div>
                <div className="add-chat-text-msg">jm_soltani@esi.zd</div>
            </div>
        </div>
        <hr/>
        <div className="add-chat-middle">
            {
                msgs.map((msg)=>(
                    <AddChatBox msg={msg.msg} date={msg.date} />
                ))
            }
            
        
        </div>
        <hr/>
        <div className="add-chat-bottom">
            <input type="text" id="msg" className="msg-field" value={msg} onChange={getMsg} placeholder="Tapez un offre"/>
            
            <button className="add-chat-btn" onClick={addMsg}>
                <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33425 22.2333L24.6005 12.6756C25.634 12.2283 25.634 10.7717 24.6005 10.3244L2.33425 0.766661C1.49209 0.396106 0.560612 1.02222 0.560612 1.92944L0.547852 7.81999C0.547852 8.45888 1.01997 9.00833 1.65797 9.08499L19.6879 11.5L1.65797 13.9022C1.01997 13.9917 0.547852 14.5411 0.547852 15.18L0.560612 21.0706C0.560612 21.9778 1.49209 22.6039 2.33425 22.2333Z" fill="#5D70D5"/>
                </svg>
            </button>
        
        </div>
      </div>
    );
  };
  
  export default AddChatOffers;
  /*{typeFilter && ( <div> <TypeFilter/></div>)}
  {sendMsg && ( <div> <AddChatBox msg={msg}/> </div>)}
  */
