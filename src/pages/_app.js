import '@/styles/globals.css'
import * as React from 'react'
import {
	HydrationContext,
	HydrationProvider,
	useHydrated,
	Server,
	Client,
	createHydration,
	useComponentHydrated,
} from "react-hydration-provider";

import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <HydrationProvider>
  <ChakraProvider>
  <Component {...pageProps} />
  </ChakraProvider>
  </HydrationProvider>
  )
}
