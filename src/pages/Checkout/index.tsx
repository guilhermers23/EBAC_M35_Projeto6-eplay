import Button from "../../components/Button";
import Card from "../../components/Card";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./CheckoutStyled";

export const Checkout = () => {
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
        <S.InputGrup>
          <p>
            Ao optar por essa forma de pagamento, é importante lembrar que a confirmação pode levar até 3 dias úteis, devido aos prazos estabelecidos pelas instituições financeiras. Portanto, a liberação do código de ativação do jogo adquirido ocorrerá somente após a aprovação do pagamento do boleto.
          </p>
        </S.InputGrup>
      </Card>
      <Button title="Finalizar compra" type="button"
        variantbutton="primary">Finalizar compra</Button>
    </Container>
  )
};
