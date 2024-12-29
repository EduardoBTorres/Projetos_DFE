import { useContext, useEffect, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { AtividadesContext } from "../../../contexts/AtividadesProvider";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../../components/Footer/Footer";

const ModalEditAtividade = () => {
  const { data } = useContext(AtividadesContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const close = () => navigate("/dashboard/atividades");

  const [editingAtividade, setEditingAtividade] = useState(null);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    titulo: "",
    local: "",
    distancia: "",
    tempo: "",
    data: "",
    descricao: "",
  });

  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (data && id) {
      const atividade = data.find((atividade) => atividade.id == id);
      setEditingAtividade(atividade);
      if (atividade) {
        setFormData({
          titulo: atividade.titulo,
          local: atividade.local,
          distancia: atividade.distancia,
          tempo: atividade.tempo,
          data: atividade.data,
          descricao: atividade.descricao,
        });
      }
    }
  }, [data, id]);

  useEffect(() => {
    if (editingAtividade) {
      const isFormUnchanged =
        formData.titulo.trim() === editingAtividade.titulo.trim() &&
        formData.local.trim() === editingAtividade.local.trim() &&
        Number(formData.distancia) === editingAtividade.distancia &&
        Number(formData.tempo) === editingAtividade.tempo &&
        formData.data === editingAtividade.data &&
        formData.descricao.trim() === editingAtividade.descricao.trim();

      setDisableButton(isFormUnchanged);
    }
  }, [formData, editingAtividade]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost/api/atividades/${editingAtividade?.id}`,
        formData
      );
      setMessage("Atividade atualizada com sucesso!");
      setTimeout(close, 3000);
    } catch (error) {
      setMessage("Erro ao editar atividade.");
    }
  };

  return (
    <>
      <Modal
        title={`Editar Atividade ${editingAtividade?.titulo}`}
        close={close}
      >
        <form onSubmit={onSubmit}>
          <label>Título:</label>
          <input
            type="text"
            placeholder="Título da Atividade"
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
          />
          <label>Local:</label>
          <input
            type="text"
            placeholder="Local da Atividade"
            name="local"
            value={formData.local}
            onChange={handleInputChange}
          />
          <label>Distância (km):</label>
          <input
            type="number"
            name="distancia"
            value={formData.distancia}
            onChange={handleInputChange}
          />
          <label>Tempo (min):</label>
          <input
            type="number"
            name="tempo"
            value={formData.tempo}
            onChange={handleInputChange}
          />
          <label>Data:</label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleInputChange}
          />
          <label>Descrição:</label>
          <input
            type="text"
            placeholder="Descrição da Atividade"
            name="descricao"
            value={formData.descricao}
            onChange={handleInputChange}
          />

          <button
            className={
              disableButton ? "btn-disabled btn-block" : "btn btn-block"
            }
            disabled={disableButton}
          >
            Atualizar Atividade
          </button>
          {message && <p className="message">{message}</p>}
        </form>
      </Modal>
      <Footer />
    </>
  );
};

export default ModalEditAtividade;
