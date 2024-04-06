import "./Sahuliyat.css"
import React from "react";
function Sahuliyat() {
  return(
    <div className="aboutBody">
      <div className="rechargeBackground">
        <div className="rechargeMaindiv">
          <div className="rechargeCenterdiv">
            <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Postpaid Payment</h1>
            <div className="gridContainer">
              <div className="gridItem consumerCode">
                <p>Consumer Code:</p>  
              </div>
              <div className="gridItem DATE">
                <p>Date:</p>
              </div>
            </div>
            <div className="gridContainer">
              <div className="grid-item Cname">
                <p>Name:</p>
              </div>
              <div className="gridItem DueDate">
                <p>Due Date:</p>
              </div>
            </div>
            <div className="gridContainer">
              <div className="gridItem">
                <p>Email:</p>
              </div>
              <div className="gridItem phoneN">
                <p>Mobile No.</p>  
              </div>
            </div>
            <div className="gridContainer" style={{marginBottom: '10px'}}>
              <div className="gridItem BillAmt">
                <p>Bill Amount:</p>
              </div>
            </div>
            <div className="rechargeAmount">
              <h2>Select Your Payment Mode</h2>
              <div className="radioGrid">
                <div className="rechargeRadiobutton">
                  <input type="radio" id="radio1" name="radioGroup"/>
                  <label htmlFor="radio1">Full Payment</label>
                </div>
                <div className="rechargeRadiobutton">
                  <input type="radio" id="radio2" name="radioGroup"/>
                  <label htmlFor="radio2">Partial Payment</label>
                </div>
              </div>
              <input type="text" id="amount" name="amount" placeholder="Enter the amount..."/>
            </div>
            <div className="rechargeButtoncontainer">
              <button className="rechargeSubmitbtn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sahuliyat;
