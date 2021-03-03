import React, { useState, useEffect, useRef } from 'react'
import { Input, Button} from 'antd';
import emailjs, { init } from 'emailjs-com';
const { TextArea } = Input;



const Contact = () => {
    const [name,setName] = useState('')
    const [contact,setContact] = useState('')
    const [content,setContent] = useState('')
    const [mail,setMail] = useState({})
    const [submit,setSubmit] = useState(false)
    const templateID = 'template_bo07zw6';
    const serviceID = 'service_fjs23hf';

    const mailer = emailjs.init("user_CHz8JO26S29x58Y8Hh5km");
    const isInitialMount = useRef(true);  

    const sendMail = async () => {
        try {
            const sentMail = await emailjs.send(serviceID, templateID, mail)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setMail({
            ...{name},
            ...{contact},
            ...{content}
        });
    }
    useEffect(() => {
        if(isInitialMount.current){
            isInitialMount.current = false
        }else{
            console.log(mail)
            mail && sendMail(); // This is be executed when `post` state changes
        }
    }, [submit])
    return (
        <div>
                <form className="post-form" onSubmit={handleSubmit}>
                    <label htmlFor="post-title">Votre nom : </label>
                    <Input name="post-title" id="post-title" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <label htmlFor="post-title">Votre adresse e-mail : </label>
                    <Input name="post-title" id="post-title" value={contact} onChange={(e)=>setContact(e.target.value)}/>

                    <label htmlFor="post-content">Contenu : </label>
                    <TextArea name="post-content" id="post-content" cols="30" rows="10" value={content} onChange={(e)=>setContent(e.target.value)}></TextArea>
                    <Button key="submit" type="primary" onClick={handleSubmit}>
                        Envoyer le mail !
                    </Button>
                </form>
        </div>
    )
}

export default Contact
