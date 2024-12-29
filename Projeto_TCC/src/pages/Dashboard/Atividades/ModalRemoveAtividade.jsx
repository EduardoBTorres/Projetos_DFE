import { useContext, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { Buttons } from "./ModalRemoveAtividadeForm.styles";
import { AtividadesContext } from "../../../contexts/AtividadesProvider";
import axios from "axios";

const ModalRemoveAtividade = ({ close, removedAtividade }) => {
  const { deleteAtividade } = useContext(AtividadesContext);
  const [message, setMessage] = useState(null);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.delete(`http://localhost/api/atividades/${removedAtividade?.id}`);
      setMessage('Atividade removida com sucesso!');
      setTimeout(close, 3000);
    } catch (error) {
      setMessage('Erro ao remover atividade.');
    }
  };

  return (
    <Modal title={`Remover Atividade ${removedAtividade?.titulo}`} close={close}>
      <form onSubmit={onSubmit}>
        <p>
          Tem certeza que deseja remover a atividade
          <strong> {removedAtividade?.titulo}</strong>?
        </p>
        <Buttons>
          <button
            type="submit"
            className="btn btn-danger btn-block"
          >
            Confirmar
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={close}
          >
            Cancelar
          </button>
        </Buttons>
        {message && <p>{message}</p>}
      </form>
    </Modal>
  );
};

export default ModalRemoveAtividade;
