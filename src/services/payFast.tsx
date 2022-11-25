import axios from "axios";

const PayFast = {
 
pay : () => {
    axios.post('https://us-central1-seedsofhope-d9bb0.cloudfunctions.net/payDemo?itemName=Testing&description=This is a test&amount=1000&referenceId=unique ref&firstName=Melvin&lastName=Musehani&email=melvin@mlab.co.za&callbackUrl=https://us-central1-seedsofhope-d9bb0.cloudfunctions.net/payment',{

    }
    )
}    

}


export default PayFast;