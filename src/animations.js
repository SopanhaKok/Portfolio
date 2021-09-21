export const fadeIn = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.4, bounce: 0.2 },
  },
  exit: {
    opacity: 0,
  },
}
