import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { IoBarcodeSharp } from "react-icons/io5";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./CheckoutStyled";

export const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false);

  return (
    <Container>
      <Card title="Dados de cobrança">
        <>
          <S.Row>
            <S.InputGrup>
              <label htmlFor="name">Nome Completo</label>
              <input id="name" type="text" />
            </S.InputGrup>
            <S.InputGrup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </S.InputGrup>
            <S.InputGrup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </S.InputGrup>
          </S.Row>

          <h3 style={{ marginTop: '24px' }}>Dados de entrega - conteúdo digital</h3>
          <S.Row>
            <S.InputGrup>
              <label htmlFor="deliveryEmail">E-mail de envio</label>
              <input type="email" id="deliveryEmail" />
            </S.InputGrup>
            <S.InputGrup>
              <label htmlFor="confirmDeliveryEmail">Confirmar E-mail</label>
              <input type="email" id="confirmDeliveryEmail" />
            </S.InputGrup>
          </S.Row>
        </>
      </Card>

      <Card title="Pagamento">
        <>
          <S.Payments>
            <S.TabButton isActive={payWithCard}
              onClick={() => setPayWithCard(false)}>
              <IoBarcodeSharp />
              Boleto bancário
            </S.TabButton>
            <S.TabButton isActive={!payWithCard}
              onClick={() => setPayWithCard(true)}>
              <FaCreditCard />
              Cartäo de crédito
            </S.TabButton>
          </S.Payments>

          <S.InputGrup>
            {payWithCard ? (
              <>
                {/* Seção Cartão */}
                <S.Row>
                  <S.InputGrup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input id="cardOwner" type="text" />
                  </S.InputGrup>
                  <S.InputGrup>
                    <label htmlFor="cpfCardOwner">CPF do titular do cartão</label>
                    <input id="cpfCardOwner" type="text" />
                  </S.InputGrup>
                </S.Row>

                <S.Row style={{ marginTop: "24px" }}>
                  <S.InputGrup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input id="cardDisplayName" type="text" />
                  </S.InputGrup>
                  <S.InputGrup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="text" />
                  </S.InputGrup>
                  <S.InputGrup style={{ maxWidth: "123px" }}>
                    <label htmlFor="expiresMonth">Mês de expiração</label>
                    <input id="expiresMonth" type="text" />
                  </S.InputGrup>
                  <S.InputGrup style={{ maxWidth: "123px" }}>
                    <label htmlFor="expiresYear">Ano de expiração</label>
                    <input id="expiresYear" type="text" />
                  </S.InputGrup>
                  <S.InputGrup style={{ maxWidth: "48px" }}>
                    <label htmlFor="cardCode">CVV</label>
                    <input id="cardCode" type="number" />
                  </S.InputGrup>
                </S.Row>

                <S.Row style={{ marginTop: "24px" }}>
                  <S.InputGrup style={{ maxWidth: "150px" }}>
                    <label htmlFor="installmenst">Parcelamento</label>
                    <select id="installmenst">
                      <option value="">1X de R$ 200,00</option>
                      <option value="">2X de R$ 100,00</option>
                      <option value="">3X de R$ 66,66</option>
                    </select>
                  </S.InputGrup>
                </S.Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a confirmação pode levar até 3 dias úteis, devido aos prazos estabelecidos pelas instituições financeiras. Portanto, a liberação do código de ativação do jogo adquirido ocorrerá somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </S.InputGrup>
        </>
      </Card>
      <Button title="Finalizar compra" type="button"
        variantbutton="primary">Finalizar compra</Button>
    </Container >
  )
};
