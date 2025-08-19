import { useState } from "react";
import type { IModalState, IPropsGallery } from "../../interfaces/IGame";
import butonPlay from "../../assets/imgs/botao-play.png";
import butonZoom from "../../assets/imgs/mais-zoom.png";
import close from "../../assets/imgs/close.png";
import { Overlay } from "../../styles/GlobalStyles";
import * as S from "./GalleryStyled";

type Props = { defaultCover: string; name: string, midias: IPropsGallery[] };

const Gallery = ({ defaultCover, name, midias }: Props) => {
  const [stateModal, setStateModal] = useState<IModalState>({ type: "image", visible: false, url: 'https://http.cat/images/404.jpg' });

  const getMediaCover = (media: IPropsGallery) => {
    if (media.type === "image") return media.url;
    return defaultCover;
  };

  const getMediaIcon = (media: IPropsGallery) => {
    if (media.type === "image") return butonZoom;
    return butonPlay;
  };

  const openModal = (media: IModalState) => {
    setStateModal({ type: media.type, url: media.url, visible: true })
  };

  const closeModal = () => {
    setStateModal({ type: "image", url: "https://http.cat/images/404.jpg", visible: false })
  };

  return (
    <>
      <S.ListImg>
        {midias.map((media, index) => (
          <S.Item key={index} onClick={() => openModal(media as IModalState)}>
            <img src={getMediaCover(media)} alt={`Mídia ${index + 1} de ${name}`} />
            <S.Action>
              <img src={getMediaIcon(media)} alt="Mídia" />
            </S.Action>
          </S.Item>
        ))}
      </S.ListImg>

      <S.Modal visible={stateModal.visible}>
        <S.ModalContent>
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Fechar" onClick={closeModal} />
          </header>

          {stateModal.type === "image" ?
            <img src={stateModal.url} alt="Midia" />
            : <iframe src={stateModal.url} />
          }

        </S.ModalContent>
        <Overlay onClick={() => closeModal()} />
      </S.Modal >
    </>
  )
};

export default Gallery;
