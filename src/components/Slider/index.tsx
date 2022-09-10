import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper'

import { v4 as uuidv4 } from 'uuid'

export function Slider() {
  return (
    <>
      <Box
        w="100%"
        py={10}
        px={5}
        display="flex"
        justifyContent="center"
        fontSize={['35px', '2.4rem']}
        color="white"
        bg="#0E6086"
        textAlign="center"
        fontWeight="bold"
      >
        <Text as="h1">
          A Isis já ajudou mais de 10 mil mamães em todo o
          Brasil
        </Text>
      </Box>
      <Flex
        pos="relative"
        w="100%"
        h={['400px', '445px']}
        mx="auto"
        textAlign="center"
      >
        <Box
          pos="absolute"
          top={0}
          zIndex={9999999}
          w="100%"
        >
          <Text fontSize="38px"></Text>
        </Box>
        <Swiper
          modules={[
            Autoplay,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
          ]}
          loop={true}
          spaceBetween={22}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          style={{
            padding: '80px',
            width: '100%',
            flex: '1',
            backgroundImage:
              "url('/images/slide/ProvaSocial.jpg')",
            backgroundSize: 'cover',
            backgroundPositionY: 'bottom',
          }}
          scrollbar={{ draggable: true, hide: true }}
          effect={'coverflow'}
        >
          <Box>
            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/1.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              >
                <Heading
                  fontWeight="bold"
                  color="white"
                  fontSize={['1.3rem', '1xl', '4xl']}
                  mt={['-305px', '-340px']}
                >
                  {''}
                </Heading>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/2.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              >
                <Heading
                  fontWeight="bold"
                  color="white"
                  fontSize={['1.3rem', '1xl', '4xl']}
                  mt={['-305px', '-340px']}
                >
                  {''}
                </Heading>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/3.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              >
                <Heading
                  fontWeight="bold"
                  color="white"
                  fontSize={['1.3rem', '1xl', '4xl']}
                  mt={['-305px', '-340px']}
                >
                  {''}
                </Heading>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/4.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              >
                <Heading
                  fontWeight="bold"
                  color="white"
                  fontSize={['1.3rem', '1xl', '4xl']}
                  mt={['-305px', '-340px']}
                >
                  {''}
                </Heading>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/5.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              >
                <Heading
                  fontWeight="bold"
                  color="white"
                  fontSize={['1.3rem', '1xl', '4xl']}
                  mt={['-305px', '-340px']}
                >
                  {''}
                </Heading>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/6.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              >
                <Heading
                  fontWeight="bold"
                  color="white"
                  fontSize={['1.3rem', '1xl', '4xl']}
                  mt={['-305px', '-340px']}
                >
                  {''}
                </Heading>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/7.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              >
                <Heading
                  fontWeight="bold"
                  color="white"
                  fontSize={['1.3rem', '1xl', '4xl']}
                  mt={['-305px', '-340px']}
                >
                  {''}
                </Heading>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/8.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              >
                <Heading
                  fontWeight="bold"
                  color="white"
                  fontSize={['1.3rem', '1xl', '4xl']}
                  mt={['-305px', '-340px']}
                >
                  {''}
                </Heading>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/9.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              >
                <Heading
                  fontWeight="bold"
                  color="white"
                  fontSize={['1.3rem', '1xl', '4xl']}
                  mt={['-305px', '-340px']}
                >
                  {''}
                </Heading>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              key={uuidv4()}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={'/images/slide/fotos/10.png'}
                bgRepeat="no-repeat"
                bgSize={['contain', 'contain']}
                textAlign="center"
                bgPosition="center"
              ></Flex>
            </SwiperSlide>
          </Box>
        </Swiper>
      </Flex>
    </>
  )
}
