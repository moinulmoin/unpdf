import { decodePDFText as _decodePDFText } from './text'
import { getImagesFromPage as _getImagesFromPage } from './image'
import { resolvePDFJSImports } from './utils'

export { defineUnPDFConfig } from './utils'

export const decodePDFText: typeof _decodePDFText = async (...args) => {
  await resolvePDFJSImports()
  return await _decodePDFText(...args)
}

export const getImagesFromPage: typeof _getImagesFromPage = async (...args) => {
  await resolvePDFJSImports()
  return await _getImagesFromPage(...args)
}
