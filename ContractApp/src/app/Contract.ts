import { Stage } from './Stage'

export default class Contract {
     contractId: number
     contractName: string
     planCost: number
     factCost: number
     stages?: Stage[]
}
