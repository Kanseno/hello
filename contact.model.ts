import { Address } from './address.model'

export interface ContactInformation {
  phone: string
  cellphone: string
  email: string
  addresses: Address[]
}
