import { SwiperSlide } from 'swiper/react';
import { Flex } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid'

export function SlideWrapper({title, img}) {
  return(
        <SwiperSlide key={uuidv4()}>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage={img}
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Heading
              fontWeight="bold"
              color="white"
              fontSize={['1.3rem', '1xl', '2xl']}
              mt={['2', '4']}
            >
              {title}
            </Heading>
          </Flex>
        </SwiperSlide>
  )
}