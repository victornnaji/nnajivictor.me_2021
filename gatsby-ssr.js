import '@src/styles/global.css'
import React from 'react';
import { AnimatingProvider, LoadingProvider, MenuProvider } from "@src/_hooks"
import Layout from '@src/components/Layout';

export const wrapRootElement = ({ element }) => (
  <LoadingProvider>
    <AnimatingProvider>
      <MenuProvider>{element}</MenuProvider>
    </AnimatingProvider>
  </LoadingProvider>
)

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}