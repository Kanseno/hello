import { ContactInformation } from './contact.model'
import { DefaultModel } from './default.model'

export interface Advisor extends DefaultModel {
  contactInformation: ContactInformation
}
