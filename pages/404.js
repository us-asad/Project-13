import { ErrorPage } from 'containers'
import React from 'react'

export default function NotFound() {
  return <ErrorPage error_code={404} text="Sahifa topilmadi" />;
}
