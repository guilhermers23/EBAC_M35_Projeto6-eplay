import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { IMaskInput } from "react-imask";
import * as Yup from "yup";
import { IoBarcodeSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { getTotalPrice, parseToBrl } from "../../utils";
import { usePurchaseMutation } from "../../services/api";
import type { RootReducer } from "../../store";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./CheckoutStyled";
import { clearCart } from "../../store/reducers/cart";

type Installments = { quantity: number, amount: number, formattedAmount: string };

export const Checkout = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [payWithCard, setPayWithCard] = useState(false);
  const [installments, setInstallments] = useState<Installments[]>();
  const [purchase, { isSuccess, isLoading, data }] = usePurchaseMutation();
  const totalPrice = getTotalPrice(items);

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
      installments: 1
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
      installments: Yup.number().when((values, schema) => (payWithCard ? schema.required('Campo obrigatório') : schema)),
    }),
    onSubmit: values => {
      purchase({
        products: items.map(item => ({ id: item.id, price: item.prices.current as number })),
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.name
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: values.installments,
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
              moth: Number(values.expiresMonth),
              year: Number(values.expiresYear)
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

  useEffect(() => {
    //Método para calcular as parcelas
    const calculateInstallments = () => {
      const arrayInstalments: Installments[] = [];
      for (let i = 1; i <= 6; i++) {
        arrayInstalments.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: parseToBrl(totalPrice / i)
        })
      }
      return arrayInstalments;
    }
    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice]);

  useEffect(() => { if (isSuccess) dispatch(clearCart()) }, [isSuccess, dispatch]);
  if (items.length === 0 && !isSuccess) return <Navigate to='/' />;

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
                  <input id="name" name="name" type="text"
                    value={formAttributes.values.name}
                    onChange={formAttributes.handleChange}
                    onBlur={formAttributes.handleBlur}
                    className={checkInputHasError('name') ? 'error' : ''} />
                </S.InputGrup>

                <S.InputGrup>
                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email"
                    value={formAttributes.values.email}
                    onChange={formAttributes.handleChange}
                    onBlur={formAttributes.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''} />
                </S.InputGrup>

                <S.InputGrup>
                  <label htmlFor="cpf">CPF</label>
                  <IMaskInput id="cpf" name="cpf" type="text"
                    onAccept={(value) => {
                      // Chamando a função handleChange do seu formulário
                      formAttributes.handleChange({
                        target: {
                          name: 'cpf',
                          value,
                        },
                      });
                    }}
                    value={formAttributes.values.cpf}
                    onBlur={formAttributes.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                    mask="000.000.000-00"
                  />
                </S.InputGrup>
              </S.Row>

              <h3 style={{ marginTop: '24px' }}>Dados de entrega - conteúdo digital</h3>
              <S.Row>
                <S.InputGrup>
                  <label htmlFor="deliveryEmail">E-mail de envio</label>
                  <input type="email" name="deliveryEmail" id="deliveryEmail"
                    value={formAttributes.values.deliveryEmail}
                    onChange={formAttributes.handleChange}
                    onBlur={formAttributes.handleBlur}
                    className={checkInputHasError('deliveryEmail') ? 'error' : ''} />
                </S.InputGrup>

                <S.InputGrup>
                  <label htmlFor="confirmDeliveryEmail">Confirmar E-mail</label>
                  <input type="email" name="confirmDeliveryEmail" id="confirmDeliveryEmail"
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
                <S.TabButton isActive={payWithCard} type="button"
                  onClick={() => setPayWithCard(false)}>
                  <IoBarcodeSharp />
                  Boleto bancário
                </S.TabButton>
                <S.TabButton isActive={!payWithCard} type="button"
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
                        <input id="cardOwner" name="cardOwner" type="text"
                          value={formAttributes.values.cardOwner}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cardOwner') ? 'error' : ''} />
                      </S.InputGrup>

                      <S.InputGrup>
                        <label htmlFor="cpfCardOwner">CPF do titular do cartão</label>
                        <IMaskInput id="cpfCardOwner" name="cpfCardOwner" type="text"
                          onAccept={(value) => {
                            formAttributes.handleChange({
                              target: {
                                name: 'cpfCardOwner',
                                value,
                              },
                            });
                          }}
                          value={formAttributes.values.cpfCardOwner}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cpfCardOwner') ? 'error' : ''}
                          mask="000.000.000-00" />
                      </S.InputGrup>
                    </S.Row>

                    <S.Row style={{ marginTop: "24px" }}>
                      <S.InputGrup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input id="cardDisplayName" name="cardDisplayName" type="text"
                          value={formAttributes.values.cardDisplayName}
                          onChange={formAttributes.handleChange}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cardDisplayName') ? 'error' : ''} />
                      </S.InputGrup>

                      <S.InputGrup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <IMaskInput id="cardNumber" name="cardNumber" type="text"
                          onAccept={(value) => {
                            formAttributes.handleChange({
                              target: {
                                name: 'cardNumber',
                                value,
                              },
                            });
                          }}
                          value={formAttributes.values.cardNumber}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cardNumber') ? 'error' : ''}
                          mask="0000 0000 0000 0000" />
                      </S.InputGrup>

                      <S.InputGrup style={{ maxWidth: "123px" }}>
                        <label htmlFor="expiresMonth">Mês de expiração</label>
                        <IMaskInput id="expiresMonth" name='expiresMonth' type="text"
                          onAccept={(value) => {
                            formAttributes.handleChange({
                              target: {
                                name: 'expiresMonth',
                                value,
                              },
                            });
                          }}
                          value={formAttributes.values.expiresMonth}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('expiresMonth') ? 'error' : ''}
                          mask="00" />
                      </S.InputGrup>

                      <S.InputGrup style={{ maxWidth: "123px" }}>
                        <label htmlFor="expiresYear">Ano de expiração</label>
                        <IMaskInput id="expiresYear" name="expiresYear" type="text"
                          onAccept={(value) => {
                            formAttributes.handleChange({
                              target: {
                                name: 'expiresYear',
                                value,
                              },
                            });
                          }}
                          value={formAttributes.values.expiresYear}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('expiresYear') ? 'error' : ''}
                          mask="00" />
                      </S.InputGrup>

                      <S.InputGrup style={{ maxWidth: "48px" }}>
                        <label htmlFor="cardCode">CVV</label>
                        <IMaskInput id="cardCode" name="cardCode" type="number"
                          onAccept={(value) => {
                            formAttributes.handleChange({
                              target: {
                                name: 'cardCode',
                                value,
                              },
                            });
                          }}
                          value={formAttributes.values.cardCode}
                          onBlur={formAttributes.handleBlur}
                          className={checkInputHasError('cardCode') ? 'error' : ''}
                          mask="000" />
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
                          {installments?.map((item) =>
                            <option key={item.quantity} value={item.quantity} >
                              {item.quantity}X de {item.formattedAmount}
                            </option>
                          )}
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
          <Button title="Finalizar compra"
            type="submit"
            variantbutton="primary"
            disabled={isLoading}>
            {isLoading ? 'Finalizando compra...' : "Finalizar compra"}
          </Button>
        </form >
      )}
    </Container>
  )
};
