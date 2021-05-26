import { Advisor } from './advisor.model'
import { Agency } from './agency.mode'
import { Amount } from './amount.model'
import { Currency } from './currency.model'
import { Customer } from './customer.model'
import { DefaultModel } from './default.model'
import { Project } from './project.model'

export interface Credit extends DefaultModel {
  currency: Currency

  // Nature de contrat
  kind: DefaultModel

  // Type de contrat
  type: DefaultModel

  // Etat
  state: DefaultModel

  // Capital initial
  initialCapital: Amount

  // Capital remboursé
  refundedCapital: Amount

  // Capital restant dû
  remainingCapital: Amount

  // Duree d'amortissement
  amortisationDuration: number

  // Duree restante *
  remainingDuration: number

  // Period d'amortissement*
  amortisationPeriod: DefaultModel

  // Taux nominal *
  nominalRate: number

  // Montant future échéance (méthode à appeler qui enverra l'info)
  futureAmountMaturity: Amount

  // Encours credit *
  amountOutstanding: Amount

  // Date de demande (DDMPRT)
  applicationDate: string

  // Date d'émission d'offre (DEMOFP)
  issueDate: string

  // Date de premiere echeance
  firstMaturityDate: string

  // Montant de premiere echeance
  firstMaturityAmount: Amount

  // Date de cloture du pret
  closingDate: string

  // Objet du prêt (???)
  loanObject: string

  // Motif de financement (MOTFIN)
  financingReason: DefaultModel

  // Montant déblocage restant (MNTDBC)
  remainingUnlockAmount: Amount

  // Montant débloqué
  unlockAmount: Amount

  // Date réelle de signature (DRESGN)
  realSignatureDate: string

  // Date de mise en force (DATMEF)
  releaseDate: string

  // Date accord prêt (DACPRT)
  loanAgreementDate: string

  // Date refus prêt (DRFPRT)
  loanRefusalDate: string

  // Montant future échéance
  nextMaturityDate: string

  // Projet
  project: Project

  // Client
  customer: Customer

  // Agence *
  agency: Agency

  // Conseiller *
  advisor: Advisor
}
