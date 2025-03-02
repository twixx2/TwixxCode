import { useState } from "react";

const Contacts = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleReset = () => {
        setName('');
        setEmail('');
        setText('');
    };

    return (
        <section id="contacts" className="contacts">

            <div className="titles">
                <h2>Остались вопросы?</h2>


                <h3>Напишите мне!</h3>
            </div>

            <div className="container">


                <div className="contact">

                    <div className="contacts__content">
                        <input
                            type="name"
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <input type="email"
                            placeholder="Почта"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <textarea
                            placeholder="Сообщение"
                            value={text}
                            onChange={(e) => setText(e.target.value)}>
                        </textarea>


                        <button onClick={handleReset}><span>Отправить</span></button>
                    </div>

                </div>


            </div>


        </section>
    );


}

export default Contacts;