import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import * as Yup from "yup";
import { IoBarcodeSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { usePurchaseMutation } from "../../services/api";
import type { RootReducer } from "../../store";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./CheckoutStyled";

export const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [payWithCard, setPayWithCard] = useState(false);
  const [purchase, { isSuccess, data }] = usePurchaseMutation();

  const formAttributes = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatório').min(5, 'No mínimo 5 caracteres'),
      email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
      cpf: Yup.string().required('Campo obrigatório').max(14, 'Máximo 14 caracteres').min(14, 'Mínimo 14 caracteres'),
      deliveryEmail: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
      confirmDeliveryEmail: Yup.string().oneOf([Yup.ref('deliveryEmail')], "E-mails devem ser iguais.").required('Campo obrigatório'),

      cardOwner: Yup.string().when((values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      cardDisplayName: Yup.string().when((values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      cardNumber: Yup.string().when((values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      expiresMonth: Yup.string().when((values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      expiresYear: Yup.string().when((values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      cardCode: Yup.string().when((values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
      installments: Yup.string().when((values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
    }),
    onSubmit: values => {
      purchase({
        products: [{ id: 1, price: 200 }],
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.name
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              moth: 12,
              year: 2027
            },
          }
        },
      })
    }
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formAttributes.touched;
    const isInvalid = fieldName in formAttributes.errors;
    const hasError = isTouched && isInvalid;
    return hasError;
  };

  if (items.length === 0) return <Navigate to='/' />;

  return (
    <Container>
      {isSuccess && data ? (
        <Card title="Muito obrigado pela sua compra!">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p style={{ marginTop: '24px' }}>
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p style={{ marginTop: '24px' }}>
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p style={{ marginTop: '24px' }}>
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente
            </p>
            <p style={{ marginTop: '24px' }}>
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={formAttributes.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGrup>
                  <label htmlFor="name">Nome Completo</label>
                  <input id="name" type="text"
                    value={formAttributes.values.name}
                    onChange={formAttributes.handleChange}
                    onBlur={formAttributes.handleBlur}
                    className={checkInputHasError('name') ? 'error' : ''} />
                </S.InputGrup>

                <S.InputGrup>
                  <label htmlFor="email">E-mail</label>
                  <input id="email" type="email"
                    value={formAttributes.values.email}
                    onChange={formAttributes.handleChange}
                    onBlur={formAttributes.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''} />
                </S.InputGrup>

                <S.InputGrup>
                  <label htmlFor="cpf">CPF</label>
                  <input id="cpf" type="text"
                    value={formAttributes.values.cpf}
                    onChange={formAttributes.handleChange}
                    onBlur={formAttributes.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''} />
                </S.InputGrup>
              </S.Row>

              <h3 style={{ marginTop: '24px' }}>Dados de entrega - conteúdo digital</h3>
              <S.Row>
                <S.InputGrup>
                  <label htmlFor="deliveryEmail">E-mail de envio</label>
                  <input type="email" id="deliveryEmail"
                    value={formAttributes.values.deliveryEmail}
                    onChange={formAttributes.handleChange}
                    onBlur={formAttributes.handleBlur}
                    className={checkInputHasError('deliveryEmail') ? 'error' : ''} />
                </S.InputGrup>

                <S.InputGrup>
                  <label htmlFor="confirmDeliveryEmail">Confirmar E-mail</label>
                  <input type="email" id="confirmDeliveryEmail"
                    value={formAttributes.values.confirmDeliveryEmail}
                    onChange={formAttributes.handleChange}
                    onBlur={formAttributes.handleBlur}
                    className={checkInputHasError('confirmDeliveryEmail') ? 'error' : ''} />
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
                        <input id="cardOwner" type="text"
                          value={formAttributes.values.cardOwner}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cardOwner') ? 'error' : ''} />
                      </S.InputGrup>

                      <S.InputGrup>
                        <label htmlFor="cpfCardOwner">CPF do titular do cartão</label>
                        <input id="cpfCardOwner" type="text"
                          value={formAttributes.values.cpfCardOwner}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cpfCardOwner') ? 'error' : ''} />
                      </S.InputGrup>
                    </S.Row>

                    <S.Row style={{ marginTop: "24px" }}>
                      <S.InputGrup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input id="cardDisplayName" type="text"
                          value={formAttributes.values.cardDisplayName}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cardDisplayName') ? 'error' : ''} />
                      </S.InputGrup>

                      <S.InputGrup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input id="cardNumber" type="text"
                          value={formAttributes.values.cardNumber}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cardNumber') ? 'error' : ''} />
                      </S.InputGrup>

                      <S.InputGrup style={{ maxWidth: "123px" }}>
                        <label htmlFor="expiresMonth">Mês de expiração</label>
                        <input id="expiresMonth" type="text"
                          value={formAttributes.values.expiresMonth}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('expiresMonth') ? 'error' : ''} />
                      </S.InputGrup>

                      <S.InputGrup style={{ maxWidth: "123px" }}>
                        <label htmlFor="expiresYear">Ano de expiração</label>
                        <input id="expiresYear" type="text"
                          value={formAttributes.values.expiresYear}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('expiresYear') ? 'error' : ''} />
                      </S.InputGrup>

                      <S.InputGrup style={{ maxWidth: "48px" }}>
                        <label htmlFor="cardCode">CVV</label>
                        <input id="cardCode" type="number"
                          value={formAttributes.values.cardCode}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cardCode') ? 'error' : ''} />
                      </S.InputGrup>
                    </S.Row>

                    <S.Row style={{ marginTop: "24px" }}>
                      <S.InputGrup style={{ maxWidth: "150px" }}>
                        <label htmlFor="installmenst">Parcelamento</label>
                        <select id="installmenst"
                          name="installments"
                          value={formAttributes.values.installments}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('installments') ? 'error' : ''}>
                          <option value="1x">1X de R$ 200,00</option>
                          <option value="2x">2X de R$ 100,00</option>
                          <option value="3x">3X de R$ 66,66</option>
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
          <Button title="Finalizar compra" type="submit"
            variantbutton="primary">Finalizar compra</Button>
        </form >
      )}
    </Container>
  )
};
