import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="bg-[#CACACA] py-16">
        <div className="container">
          <div className="flex gap-10">
            <div className="font-extrabold text-2xl">Iscriviti alla Newsletter</div>

            <div className="flex gap-5">
              <input
                className=" pl-2 py-2"
                type="email"
                name="newsletter_email"
                id="newsletter_email"
                placeholder="Indirizzo E-mail"
              />

              <button className="bg-black text-white uppercase px-16 py-2">Iscriviti</button>

              <div className="text-xs">
                <input
                  type="checkbox"
                  className="mr-2 "
                  
                  name="newsletter_privacy"
                  id="newsletter_privacy"
                  value="1"/>
                
                Letta la Privacy Policy, dichiaro di aver compiuto almeno 16 anni e accetto di ricevere
                la newsletter ai sensi del Regolamento UE 2016/679 (GDPR)
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Newsletter;
