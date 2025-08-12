import { useState } from "react";
import butonPlay from "../../assets/imgs/botao-play.png";
import butonZoom from "../../assets/imgs/mais-zoom.png";
import close from "../../assets/imgs/close.png";
import * as S from "./GalleryStyled";

interface PropsGallery { type: "image" | "video"; url: string; };
interface ModalState extends PropsGallery { visible: boolean };
type Props = { defaultCover: string; name: string };

const mock: PropsGallery[] = [
  {
    type: "image",
    url: "https://drop-assets.ea.com/images/2eo3Q9i7mC72rQrPvckk2h/e9a736ea0e9d76fe8e36cdbbb355f384/APXGP_Feature.jpg"
  },
  {
    type: "image",
    url: "https://drop-assets.ea.com/images/2eo3Q9i7mC72rQrPvckk2h/e9a736ea0e9d76fe8e36cdbbb355f384/APXGP_Feature.jpg"
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/u5rWBgBjDsc?si=2Vr00W5n24sxhoBM"
  }
];

const Gallery = ({ defaultCover, name }: Props) => {
  const [stateModal, setStateModal] = useState<ModalState>({ type: "image", visible: false, url: 'https://http.cat/images/404.jpg' });

  const getMediaCover = (media: PropsGallery) => {
    if (media.type === "image") return media.url;
    return defaultCover;
  };

  const getMediaIcon = (media: PropsGallery) => {
    if (media.type === "image") return butonZoom;
    return butonPlay;
  };

  const openModal = (media: ModalState) => {
    setStateModal({ type: media.type, url: media.url, visible: true })
  };

  const closeModal = () => {
    setStateModal({ type: "image", url: "https://http.cat/images/404.jpg", visible: false })
  };

  return (
    <>
      <S.ListImg>
        {mock.map((media, index) => (
          <S.Item key={index} onClick={() => openModal(media as ModalState)}>
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
        <S.Overlay onClick={() => closeModal()} />
      </S.Modal >
    </>
  )
};

export default Gallery;
