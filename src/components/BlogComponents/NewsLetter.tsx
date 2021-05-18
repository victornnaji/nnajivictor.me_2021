import React, { useState }  from 'react'
import styled from 'styled-components';
import addToMailchimp from "gatsby-plugin-mailchimp";
import { media, theme } from '@src/styles';

const NewsLetter = () => {
    const [email, setEmail] = useState<any>();
    const [message, setMessage] = useState<any>();
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async (event: { preventDefault: () => void; }) =>{
        event.preventDefault();
        setDisabled(true);

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            setMessage("Please Enter a Valid Email Address");
            setDisabled(false)
        }else{
            setMessage("Sending...")
            const response = await addToMailchimp(email)
            if (response.result === "error") {
                if (response.msg.toLowerCase().includes("already subscribed")) {
                    setMessage("You're already on the list!");
                    setEmail("");
                } else {
                    setMessage("Some error occured while subscribing you to the list.")
                }
                setDisabled(false)
                } else {
                setMessage("Thanks and welcome! You have successfully joined the Newsletter 🥳.")
                setEmail("");
            }
        }
    };

    return (
        <NewsLetterContent>
            <Heading> Join The NewsLetter</Heading>
            <p className="newsletter-content">
                Once a week or two, I send out newsletter about interesting findings and latest posts. Subscribe to stay in the loop
            </p>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-contents">
                    <input x-model="email" type="email" id="email"
                        required 
                        placeholder="Enter your email" 
                        className="emailInput"
                        onChange={event => setEmail(event.target.value)}
                        aria-label="Join"
                     />
                     
                    <button className="button" disabled={disabled}>
                        Join The Ship
                    </button>
                    
                </div>
            </form>
            <div className="message-box">{message}</div>
        </NewsLetterContent>
    )
};

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: ${theme.fonts.Mono};
  ${media.tablet`font-size: 24px;`};

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 100px;
    background-color: var(--primary-color);
    position: relative;
    margin-left: 20px;
    ${media.desktop`width: 30%`};
    ${media.phablet`margin-left: 10px;`};
  }
`;

const NewsLetterContent = styled.div`
   position: relative;
   border: 1px solid var(--link-color) ;
   border-radius: .5rem;
   padding: 2rem;
   font-size: 1.6rem;
   max-width: 800px;
   margin: 0 auto;
   font-family: ${theme.fonts.Mono};

   /* ${media.tablet`padding: 1.5rem 1.5rem`} */
   /* ${media.phablet`padding: 1rem 1rem`} */

   .newsletter-content{
       margin-top: -2rem;
       margin-bottom: 3rem;
       line-height: 1.5;
   }

   .form{
    .form-contents{
       display: flex;

       ${media.phablet`display: block;`}

       .emailInput{
           display: block;
           max-width: 320px;
           width: 100%;
           padding: 1.5rem 1rem;
           font-size: 1.4rem;
           border-radius: .375rem;
           border: 1px solid var(--link-color);
           background: transparent;
           color: var(--primary-color);

           ${media.phablet`max-width: 100%;`}

           &:focus{
               box-shadow: 0 0 0 3px rgba(164,202,254,.45);
           };
       }

       .button{
        margin-left: 1rem;
        padding: 1rem 1.5rem;
        line-height: 1.375;
        border-radius: .375rem;
        border: 1px solid var(--link-color);
        background-color: transparent;
        color: var(--link-color);
        font-weight: 600;
        font-size: 1.6rem;
        cursor: pointer;

        &:hover{
            background: var(--btn-hover-color);
        }
        ${media.phablet`margin-left: 0; 
          width: 100%;
          margin-top: 1.4rem;
          font-size: 1.6rem;
        `}
       }
    }
   }

   .message-box{
        margin-top: 10px;
        font-size: 1.3rem;
   }


`;

export default NewsLetter