import { FcGoogle } from 'react-icons/fc';
import {RxCross2} from 'react-icons/rx';
import {BiMessage} from 'react-icons/bi';
export default function Login() {
  const handleButtonClick = () => {
    window.location.href = 'https://www.example.com';    /*URL DE DESTINATION */
  }
    return (
      // CSS de la section
     <div style={{
      position: 'relative',
      left:'405px',
      top:'110px',
      width: '470px',
     height: '400px',
    background: '#FFFFFF',
    opacity: '0.9',
    boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)',
     borderRadius: '15px',
     }} >



     <div style ={{
      position: 'absolute',
      width: '10px',
      height: '10px',
      left: '12px',
      top: '12px',
      
     }}>
     <RxCross2/>
     </div>
       
     <div style={{
       position: 'absolute',
       width: '40px',
       height: '40px',
       left: '210px',
       top: '63px',

     }}>
     <BiMessage/>
     </div>





     <div >
     
         <span style={{
           position: 'absolute',
          width: '368px',
          height: '50px',
           top: '113px',
           left:' calc(50% - 368px/2 + 5px)',
           fontFamily: 'Outfit',
           fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '25px',
           display: 'flex',
          alignItems: 'center',
          color: '#000000'
       }}>
          
          
          
          Veuiller selectionner l’option suivante pour continuer</span>
         <span style={{position: 'absolute',
          width: '358px',
          height: '13px',
           top: '177px',
           left:' calc(50% - 358px/2)',
           fontFamily: 'josefin sans',
           fontStyle: 'normal',
          fontWeight: ' 300',
          fontSize: '13px',
          lineHeight: '13px',
           display: 'flex',
          alignItems: 'center',
          color: '#545454'
}}>En nous rejoingnant vous pourrrez accèder à l’action précedente</span>

<div style={{    
           position: 'absolute',
           width: '358px',
           height: '40px',
           left: 'calc(50% - 358px/2 - 6px)',
           top: '266px',
           background: '#9B581C',
           borderRadius: '30px',
}}>
    <div style={{ position: 'absolute',
          width: '90px',
          height: '21px',
           top: '11px',
           left:' calc(50% - 90px/2 - 16px)',
           fontFamily: 'Outfit',
           fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '17px',
          letterSpacing:'-0.05em',
          lineHeight: '21px',
           display: 'flex',
           textShadow :'0px 4px 4 px rgba(0,0,0,0.25)',
          alignItems: 'center',
          color: '#F3F3FE'}}>



   
      <boutton onClick={handleButtonClick}>  Se  Connecter </boutton>
     
     



 {/* pour l'icon google */}
    <div style={{
      position: 'absolute',
      width:'18px',
      height: '18px',
      left: '90px', }}>
      <FcGoogle/></div>
    </div>

</div>
 </div>
 </div>

    );
  }
  
  