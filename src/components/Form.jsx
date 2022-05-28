import React from 'react'
import styles from './Styles.module.css'
import creditcard from './creditcard.jpg'
function Form() {
  return (

    <div className={styles.wrapper}>

<img src={creditcard}/>
        
<form className={styles.form}>
     <div className={styles.h2_div}>
         <div>
         <h2>Pament Details</h2>
         </div>
     </div>


    <div className={styles.div1}>
        <div className={styles.div2}>
        <div className={styles.formchild1}>
              <label>Credential Name</label>
              <br/>
              <span className="material-icons">{"perm_identity_sharp"}</span>
                 <input  className={styles.crein}  type='text'  />
              </div>
              <br/>
           
             <div  className={styles.formchild1}>
             <label>CARD NUMBER</label>
             <br/>
             <span className="material-icons">{"credit_card_sharp"}</span>
             <input className={styles.cardin} type='text' maxLength='16' />
    </div>
        </div>
   
    </div>
   
   <br/>

     <div className={styles.footer}>
       
         <div  className={styles.formchild}>
         <label>Expiry Month</label>
         <br/>
         <span className="material-icons">{"calendar_month_sharp"}</span>
         <input className={styles.month} type='text' maxLength='2' />
         </div>
      
         <div  className={styles.formchild}>
         <label>Expiry Year</label>
         <br/>
         <span className="material-icons">{"calendar_month_sharp"}</span>
         <input className={styles.year} type='text' maxLength='4' />
         </div>
    
         <div  className={styles.formchild}>
         <label>CVV</label>
         <br/>
         <span className="material-icons">{"lock_open_sharp"}</span>
         <input className={styles.cvv} type='text' maxLength='3' />
         </div>
     
     
     </div>

<div className={styles.pay_div}>
<div>
    <h3>Payment Amount</h3>
     <input type='text'/>
   
    </div>
</div>
     
<div className={styles.btn_div}>
   <div>
    <button>PAY</button>
   </div>
</div>


  
  

 
 </form>
    </div>
      
 
  )
}

export default Form