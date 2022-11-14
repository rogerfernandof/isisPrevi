import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { Layout } from '../components/Layout'

export default function Terms() {
  useEffect(() => {
    localStorage.setItem('Continue', JSON.stringify(false));
  },[])
  return (
    <Layout>
      <main
      style={{
          display: 'grid',
          gap: '8px',
          padding: '40px',
          fontSize: '1.2rem',
          textAlign: 'justify',
          maxWidth: '995px',
          margin: '0 auto'
        }}
      >
      <Text as="h1" fontWeight="bold" mb="5px">
        CONTRATO DE PRESTAÇÃO DE SERVIÇO
      </Text>
        <Text>
        CONTRATADO: Isis Pires Paiva, Despachante
        Documentalista CPF 005.239.189-25, divorciada, com
        telefones (61) 981918889, ( 47) 992209800, e mail
        isis@isisprevi.com.br.
        </Text>
        <ol style={{
          display: 'grid',
          gap: '8px',
        }}>
        <li>
          Pelo presente instrumento particular, o (a)
          contratante firma contrato de PRESTAÇÃO DE
          SERVIÇOS com a DESPACHANTE contratada face ao
          mandato que lhe foi outorgado, se obrigando a
          contratada a prestar os seus serviços
          profissionais na defesa dos direitos do (a)
          contratante no pedido de Concessão de Salário
          Maternidade, perante a seguridade social, que
          pretende mover para defender seus direitos e
          pleitear o que o(a) contratante entende devido,
          perante os órgãos e juízos do Estado, devendo
          desincumbir-se com zelo as atividades
          encarregadas, podendo a mesma: solicitar senha de
          acesso, excluir ou incluir documentos, solicitar
          extratos, verificar andamento de processo junto a
          autarquia do INSS.
        </li>


        <li>
          O (A) contratante pagará a CONTRATADA a título
          de remuneração de seus serviços de assessoria
          contratados, os valores equivalentes a 25%, (vinte
          e cinco) do proveito econômico bruto.
        </li>

        <li>
          O pagamento deverá ser efetuado em mãos para
          uma pessoa designada pelo contratado ou depósito
          em conta bancaria da contratada, sendo essa
          AGENCIA 0606 CONTA CORRENTE 29741-0 BANCO
          BRADESCO, ISIS PIRES PAIVA DE LIMA, ou através de
          boleto bancário, ou ainda através de PIX Banco
          Bradesco chave PIX CPF 0052391925, no mesmo dia do
          saque ou no prazo máximo 01 (hum) dia útil após o
          recebimento do benefício pleiteado. § 2o. Em caso
          de inadimplemento dos valores acordados após o
          recebimento do benefício, será imediatamente
          realizada a inscrição nos órgãos de proteção ao
          crédito, cartório de protesto e tomadas às medidas
          judiciais cabíveis.
        </li>
        <li>
          Às partes estabelecem que havendo atraso nos
          pagamentos de honorários ensejará multa de 20%
          (vinte por cento) sobre o valor total devido, mais
          a incidência de juros de 1% ao mês, devidamente
          atualizado.
        </li>

        <li>
          Ficará a CONTRATADA isenta de quaisquer
          responsabilidades pela entrega dos documentos e
          cumprimento das exigências, quando feitas fora do
          prazo estabelecido por lei pelo contratante,
          quando essas forem previamente avisadas em tempo
          hábil, para seu cumprimento.
        </li>

        <li>
          O total dos valores acordados poderá ser
          exigido imediatamente, se houver composição
          amigável ou desistência, por qualquer das partes
          litigantes, realizadas dentro ou fora do processo,
          por quaisquer circunstâncias não determinadas
          pelos contratados, por falta de cumprimento de
          exigência do INSS, inclusive caso fortuito ou
          força maior, ou, ainda, se lhes for cassado o
          mandato sem culpa da CONTRATADA.
        </li>
        <li>
          O Contratante deverá cumprir com todas as
          obrigações aqui assumidas, sob pena de quebra de
          contrato e de multa no valor total dos serviços
          contratados. CONTRATO DE PRESTAÇÃO DE SERVIÇO 1 §1
          Em caso de desistência por parte da contratante,
          antes do protocolo do requerimento, será devido a
          contratada o valor de R$300,00 (trezentos reais),
          a título de multa pela rescisão do presente
          contrato e pela consultoria prestada. Caso a
          desistencia for solicitada apos o requerimento
          feito será devido o valor de 01 (Hum), salario
          minimo a titulo de multa pela consultoria prestada
          e trabalho ja iniciado.
        </li>
        <li>
          A Empresa não fica com qualquer documento
          original do cliente somente cópia, declarando o
          cliente que lhe foram devolvidos todos seus os
          documentos. 9. Caso o processo administrativo seja
          indeferido pelo INSS, o contratante fica
          desobrigado de qualquer pagamento a Contratada.
        </li>
        <li>
          Caso seja de comum acordo, a CONTRATADA poderá
          encaminhar o processo indeferido para um advogado
          parceiro.
        </li>
        <li>
          A contratante está ciente que esse contrato
          tem validade, declarando que leu e aceitou todos
          os termos do mesmo, o que é confirmado pelo
          endereço de IP.
        </li>
        <li>
          O presente instrumento encontra-se regido de
          acordo com as leis vigentes na República
          Federativa do Brasil e sobre os assuntos
          referentes à interpretação, cumprimento ou
          questionamento referente a esse instrumento, as
          partes concordam em se submeter ao Foro da Comarca
          de Itajaí - SC.
        </li>
        </ol>

        <Link href="/"  style={{width: 'fit-content'}}>
            <a>
              <Text color='blue' mt='75px'>
                DECLARO QUE LI E ACEITO TODOS OS TERMOS DO
                CONTRATO AO PROSSEGUIR
              </Text>
            </a>
        </Link>
      </main>
    </Layout>
  )
}
