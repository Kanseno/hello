import { Borrower } from './borrower.model'
import { DefaultModel } from './default.model'

export interface Customer extends DefaultModel {
  borrowers: Borrower[]
}
