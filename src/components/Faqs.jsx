import React from 'react';
import faqImg from '../assets/faq_sec.png';
import { faqList } from '../constants';

const Faqs = () => {
  return (
    <>
      <div className="faqs-sec py-lg-5 py-3 bg-global" id='faqs'>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
                <div>
                    <h2>Objectives of the XEnergy Sunrise Project</h2>
                    <h4 className='py-3'>Do you have any kind of questions? We're here to help.</h4>
                    <img className='' src={faqImg} alt="FAQ Section" />
                </div>
            </div>
            <div className="col-lg-7">
              <div className="accordion" id="faqAccordion">
                {faqList.map((faq, index) => (
                  <div className="accordion-item my-lg-4 my-2 border-0 rounded-5" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button className="accordion-button collapsed p-0 pe-4 rounded-4" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                        <span className="list-number">{index + 1}</span> <p className='m-0'>{faq.ques}  </p> 
                      </button>
                    </h2>
                    <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <h4>{faq.obj}</h4>
                        <p>{faq.ans}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;



// import React from 'react'
// import faqImg from '../assets/faq_sec.png'
// import { faqList } from '../constants'

// const Faqs = () => {
//   return (
//     <>
//         <div className="faqs-sec py-lg-5 py-3 bg-global">
//             <div className="container">
//                     <div className="row">
//                         <div className="col-lg-5">
//                             <h2>Frequently Asked Questions</h2>
//                             <h4>DO have any kind Of questions? We're here to help.</h4>
//                             <img className='' src={faqImg} alt="faqImg" />
//                         </div>
//                         <div className="col-lg-7">
//                             {faqList.map((faqs , index) => (
//                                 <div className="my-3" key={index}>
//                                     <p className="card flex-row p-3 rounded-4 align-items-center"><span className="list-number">{index + 1} </span>  {faqs.ques} </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//             </div>  
//         </div>
//     </>
//   )
// }

// export default Faqs