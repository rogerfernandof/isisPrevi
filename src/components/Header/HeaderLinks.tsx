import Link from 'next/link'
import { Box, Image } from '@chakra-ui/react';

export function HeaderLinks() {
  return (
    <>
        <Link
        href="/">
          <a>
            <Box>
              <Image
              alt=""
              src="/images/Logo.png"
              width="200px"
              height='120px'
              />
            </Box>
          </a>
        </Link>
    </>
  )
}
