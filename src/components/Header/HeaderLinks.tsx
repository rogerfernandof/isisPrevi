import Link from 'next/link'

export function HeaderLinks() {
  return (
    <>
        <Link
        href="/">
          <a>
            <img
              alt=""
              src="/images/Logo.png"
              width="200px"
            />
          </a>
        </Link>
    </>
  )
}
