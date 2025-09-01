import { useState } from "react";
import { useFormik } from "formik";
import { FaCreditCard } from "react-icons/fa";
import { IoBarcodeSharp } from "react-icons/io5";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./CheckoutStyled";
import * as Yup from "yup";

export const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false);
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
      console.log(values);
    }
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in formAttributes.touched;
    const isInvalid = fieldName in formAttributes.errors;
    if (isTouched && isInvalid) {
      return <small>{message}</small>
    }
    return '';
  };

  return (
    <Container as="form" onSubmit={formAttributes.handleSubmit}>
      <Card title="Dados de cobrança">
        <>
          <S.Row>
            <S.InputGrup>
              <label htmlFor="name">Nome Completo</label>
              <input id="name" type="text"
                value={formAttributes.values.name}
                onChange={formAttributes.handleChange}
                onBlur={formAttributes.handleBlur} />
              {getErrorMessage('name', formAttributes.errors.name)}
            </S.InputGrup>

            <S.InputGrup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email"
                value={formAttributes.values.email}
                onChange={formAttributes.handleChange}
                onBlur={formAttributes.handleBlur} />
              {getErrorMessage('email', formAttributes.errors.email)}
            </S.InputGrup>

            <S.InputGrup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text"
                value={formAttributes.values.cpf}
                onChange={formAttributes.handleChange}
                onBlur={formAttributes.handleBlur} />
              {getErrorMessage('cpf', formAttributes.errors.cpf)}
            </S.InputGrup>
          </S.Row>

          <h3 style={{ marginTop: '24px' }}>Dados de entrega - conteúdo digital</h3>
          <S.Row>
            <S.InputGrup>
              <label htmlFor="deliveryEmail">E-mail de envio</label>
              <input type="email" id="deliveryEmail"
                value={formAttributes.values.deliveryEmail}
                onChange={formAttributes.handleChange}
                onBlur={formAttributes.handleBlur} />
              {getErrorMessage('deliveryEmail', formAttributes.errors.deliveryEmail)}
            </S.InputGrup>

            <S.InputGrup>
              <label htmlFor="confirmDeliveryEmail">Confirmar E-mail</label>
              <input type="email" id="confirmDeliveryEmail"
                value={formAttributes.values.confirmDeliveryEmail}
                onChange={formAttributes.handleChange}
                onBlur={formAttributes.handleBlur} />
              {getErrorMessage('confirmDeliveryEmail', formAttributes.errors.confirmDeliveryEmail)}
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
                      onBlur={formAttributes.handleBlur} />
                    {getErrorMessage('cardOwner', formAttributes.errors.cardOwner)}
                  </S.InputGrup>

                  <S.InputGrup>
                    <label htmlFor="cpfCardOwner">CPF do titular do cartão</label>
                    <input id="cpfCardOwner" type="text"
                      value={formAttributes.values.cpfCardOwner}
                      onChange={formAttributes.handleChange}
                      onBlur={formAttributes.handleBlur} />
                    {getErrorMessage('cpfCardOwner', formAttributes.errors.cpfCardOwner)}
                  </S.InputGrup>
                </S.Row>

                <S.Row style={{ marginTop: "24px" }}>
                  <S.InputGrup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input id="cardDisplayName" type="text"
                      value={formAttributes.values.cardDisplayName}
                      onChange={formAttributes.handleChange}
                      onBlur={formAttributes.handleBlur} />
                    {getErrorMessage('cardDisplayName', formAttributes.errors.cardDisplayName)}
                  </S.InputGrup>

                  <S.InputGrup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="text"
                      value={formAttributes.values.cardNumber}
                      onChange={formAttributes.handleChange}
                      onBlur={formAttributes.handleBlur} />
                    {getErrorMessage('cardNumber', formAttributes.errors.cardNumber)}
                  </S.InputGrup>

                  <S.InputGrup style={{ maxWidth: "123px" }}>
                    <label htmlFor="expiresMonth">Mês de expiração</label>
                    <input id="expiresMonth" type="text"
                      value={formAttributes.values.expiresMonth}
                      onChange={formAttributes.handleChange}
                      onBlur={formAttributes.handleBlur} />
                    {getErrorMessage('cardOwner', formAttributes.errors.cardOwner)}
                  </S.InputGrup>

                  <S.InputGrup style={{ maxWidth: "123px" }}>
                    <label htmlFor="expiresYear">Ano de expiração</label>
                    <input id="expiresYear" type="text"
                      value={formAttributes.values.expiresYear}
                      onChange={formAttributes.handleChange}
                      onBlur={formAttributes.handleBlur} />
                    {getErrorMessage('expiresYear', formAttributes.errors.expiresYear)}
                  </S.InputGrup>

                  <S.InputGrup style={{ maxWidth: "48px" }}>
                    <label htmlFor="cardCode">CVV</label>
                    <input id="cardCode" type="number"
                      value={formAttributes.values.cardCode}
                      onChange={formAttributes.handleChange}
                      onBlur={formAttributes.handleBlur} />
                    {getErrorMessage('cardCode', formAttributes.errors.cardCode)}
                  </S.InputGrup>
                </S.Row>

                <S.Row style={{ marginTop: "24px" }}>
                  <S.InputGrup style={{ maxWidth: "150px" }}>
                    <label htmlFor="installmenst">Parcelamento</label>
                    <select id="installmenst"
                      name="installments"
                      value={formAttributes.values.installments}
                      onChange={formAttributes.handleChange}
                      onBlur={formAttributes.handleBlur} >
                      <option value="1x">1X de R$ 200,00</option>
                      <option value="2x">2X de R$ 100,00</option>
                      <option value="3x">3X de R$ 66,66</option>
                    </select>
                    {getErrorMessage('installments', formAttributes.errors.installments)}
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
    </Container >
  )
};
