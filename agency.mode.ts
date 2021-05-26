import { Address } from './address.model'
import { ContactInformation } from './contact.model'
import { DefaultModel } from './default.model'

export interface Agency extends DefaultModel {
  name: string
  adresse: Address
  counselorName: string
  contactInformation: ContactInformation
}
