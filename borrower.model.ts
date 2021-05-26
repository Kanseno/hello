import { ContactInformation } from './contact.model'

export interface Borrower {
  id: number
  name: string
  firstname: string
  birthDate: Date
  contactInformation: ContactInformation
}
