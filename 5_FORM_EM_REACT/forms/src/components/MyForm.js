import './MyForm.css';
import {useState} from "react";

const MyForm = ({user}) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleName = (e) => {
    setName(e.target.value);
  }

  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email);
  }

  return (
    <div>
      {/* 5 - envio de form */}
      <form onSubmit={handleSubmit}>
        {/* 1 - criação de form */}
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* 4 - simplificando alteracao de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export default MyForm;