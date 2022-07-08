import { ErrorPage } from 'containers'
import React from 'react'

export default function ServerError() {
  return <ErrorPage error_code={500} text="Serverda xatolik yuz berdi" />;
}
