import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import { Checkbox } from '@chakra-ui/react'

import {
  Box,
  Text,
  Flex,
  Button,
  Fade,
  Grid,
} from '@chakra-ui/react'

import { QuestionList } from './QuestionList';
import Link from 'next/link'
import { toast } from 'react-toastify'

export function Hero() {
  const router = useRouter()
  const BOT_URL = '/chatbot'

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [error, setError] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isDisplayed, setIsDisplayed] = useState(true)
  const [checkBoxBlock, setCheckBoxBlock] = useState(false)

  const colorChange = value => {
    return value
  }

  async function handleCorrectAnswer(isCorrect) {
    setTimeout(async () => {
      await setIsDisplayed(true)
    }, 100)
    setError(false)
    if (checkBoxBlock && isCorrect) {
      toast.info(
        'Só é possível prosseguir caso você concorde com os termos.',
        {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        },
      )
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 425)
    } else {
      if (isCorrect) {
        await setProgress(oldValue => oldValue + 1 + 35)
        setScore(score + 1)
        if (currentQuestion < QuestionList.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
        } else {
          router.push(BOT_URL)
        }
      } else {
        setError(true)
        setProgress(100)
        setCheckBoxBlock(false)
      }
    }
  }

  const handleChange = () => {
    setCheckBoxBlock(current => !current);
  };

  function handleLocalStorage() {
    localStorage.setItem('Continue', JSON.stringify(true));
  }

  useEffect(() => {
    if (currentQuestion === 1) setCheckBoxBlock(true)
  }, [currentQuestion])

  useEffect(() => {
    const Continue = localStorage.getItem('Continue');
    localStorage.removeItem('Continue');

    if (Continue) setCurrentQuestion(1)
    if (currentQuestion === 1)  localStorage.setItem('Continue', JSON.stringify(false));
  },[])

  return (
    <Box
      bgImage="url('/images/Hero.jpg')"
      backgroundPosition={['center', '-1368px -482px']}
      bgRepeat="no-repeat"
      bgSize={['cover', 'auto']}
    >
      <Box maxW="1024px" justifyItems="center" mx="auto">
        <Box
          w="100%"
          display="grid"
          minH="803px"
          alignContent="space-between"
        >
          <Text
            as="h1"
            py={['60px', '100px']}
            px={['10px', '0']}
            h="fit-content"
            color="#0e6188"
            fontSize={['35px', '48px']}
            textAlign="center"
            fontWeight="bold"
            lineHeight="3rem"
          >
            Faça aqui o CADASTRO GRATUITO sem precisar sair de casa e receba até R$7900,00
          </Text>
          {isDisplayed ? (
            <>
              <Fade in={isDisplayed}>
                <Grid justifyItems='center'>
                  { (currentQuestion === 1) && (
                    <Flex
                    justify='center'
                    gap={15}
                    background='white'
                    p={15}
                    w='fit-content'
                    border='2px solid #0e6188'
                    mx='35px'
                    mb='70px'
                    >
                      <Link href='/terms'>
                        <a>
                        <Text
                          fontSize={20}
                          color='#0e6188'
                          _hover={{textDecoration: 'underline'}}
                          onClick={()=>handleLocalStorage()}
                        >
                          Concordo com os termos do contrato
                        </Text>
                        </a>
                      </Link>

                    <Checkbox colorScheme='blue' value={checkBoxBlock as any} onChange={handleChange} type="checkbox"  /></Flex>
                  )
                  }
                  <Text
                    as="h4"
                    p="9px"
                    color="white"
                    background="#0e6188"
                    fontSize={['35px', '35px', '48px']}
                    textAlign="center"
                    fontWeight="bold"
                    lineHeight="1"
                  >
                    RESPONDA ÀS PERGUNTAS:
                  </Text>
                  <Box maxWidth="800px" mx="auto">
                    <Box
                      my={10}
                      p="30px"
                      color="#0e6188"
                      fontSize="32px"
                      textAlign="center"
                      fontWeight="bold"
                      letterSpacing="-2px"
                    >
                      {currentQuestion + 1} /{' '}
                      {QuestionList.length}
                      <Box>
                        <Box my={5}>
                          {error ? (
                            <p>
                              {
                                QuestionList[
                                  currentQuestion
                                ].errorMessage
                              }
                            </p>
                          ) : (
                            <Text>
                              {
                                QuestionList[
                                  currentQuestion
                                ].question
                              }
                            </Text>
                          )}
                        </Box>

                        <Flex
                          justifyContent="center"
                          gap={8}
                        >
                          {QuestionList[
                            currentQuestion
                          ].answersList.map(
                            answerOption => {
                              {
                                <Box my={5}>
                                  {error ? (
                                    <Text>
                                      {
                                        QuestionList[
                                          currentQuestion
                                        ].errorMessage
                                      }
                                    </Text>
                                  ) : (
                                    QuestionList[
                                      currentQuestion
                                    ].question
                                  )}
                                </Box>
                              }
                              {
                                if (!error) {
                                  return (
                                    <Box key={uuidv4()}>
                                      <Button
                                        onClick={() =>
                                          handleCorrectAnswer(
                                            answerOption.isCorrect,
                                          )
                                        }
                                        width="100px"
                                        height="45px"
                                        color="white"
                                        bg={colorChange(
                                          answerOption.color,
                                        )}
                                        _hover={{
                                          opacity: '0.8',
                                        }}
                                      >
                                        {
                                          answerOption.answer
                                        }
                                      </Button>
                                    </Box>
                                  )
                                }
                              }
                            },
                          )}
                        </Flex>

                        {error ? (
                          <Box key={uuidv4()}>
                            <Button
                              onClick={() => {
                                setError(false)
                                setCurrentQuestion(0)
                                setProgress(0)
                                router.push('/')
                              }}
                              width="100px"
                              height="45px"
                              color="white"
                              bg="blue"
                              _hover={{
                                opacity: '0.8',
                              }}
                            >
                              {'VOLTAR'}
                            </Button>
                          </Box>
                        ) : null}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Fade>
            </>
          ): null}
          <Box
            display="flex"
            justifyContent="end"
            alignItems="center"
            fontSize="12px"
            fontWeight="bold"
            left="0"
            top="0"
            zIndex={9999}
            w={progress + '%'}
            transition={'width 0.3s ease-in-out'}
            color="white"
            bg="#E5AD36"
            h="20px"
            px={5}
          >
            {progress + '%'}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
