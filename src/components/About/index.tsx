import React from 'react'

import { Text, Grid } from '@chakra-ui/react'

export function About() {
  return (
    <Grid
      h={['auto', '100vh']}
      justifyContent="center"
      alignItems="center"
      bgImage="url('/images/QuemSomos.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
    >
      <Grid justifyItems="center" gap="35px" py="60px">
        <Text
          as="h1"
          w={['90vw', , '70vw', '80vw']}
          textAlign={['center']}
          color="white"
          fontSize="35px"
          fontWeight="bold"
          lineHeight="8"
        >
          Quem somos:
        </Text>
        <Grid
          color="white"
          fontSize="20px"
          textAlign={['start', 'center']}
          gap="15px"
          p="20px"
          w={['auto']}
        >
          <Text minW={['80vw', '80vw']} maxW="840px">
            A ISIS PREVI, nasceu da necessidade de
            “facilitar” o acesso de nossos clientes junto
            aos órgãos privados e públicos. Somos uma
            empresa atuante no mercado há mais de seis anos,
            sempre fazendo nosso trabalho de forma íntegra e
            transparente. Especializada em documentação e
            nas diversas formas do regime previdenciário,
            podendo tanto ajudar na forma de consultoria,
            como assessorando nossos clientes junto ao INSS.
          </Text>
          <Text minW={['80vw', '80vw']} maxW="840px">
            Já auxiliamos mais de 10.000 mamães a
            conseguirem seu direito de salário maternidade
            junto ao INSS e resgatamos mais de 1000 que já
            haviam sido indeferidos. Trabalhamos com amor e
            dedicação, buscando a excelência em nosso
            atendimento. Compromisso e dedicação são nossos
            lemas. Como somos especialistas em documentação,
            podemos auxiliar nos tramites extrajudiciais e
            na documentação de vários processos
            administrativos. Caso os processos não alcancem
            o objetivo estimado, contamos com parceiros
            advogados experientes, que darão andamento com
            os mesmos na parte jurídica.
          </Text>
          <Text minW={['80vw', '80vw']} maxW="840px">
            Atendemos em todo o território nacional.
          </Text>
        </Grid>
      </Grid>
    </Grid>
  )
}
