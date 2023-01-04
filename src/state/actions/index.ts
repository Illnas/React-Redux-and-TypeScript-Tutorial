/* Each interface created is created for each case,
    this way we defined each action and its type
*/

import {ActionType} from "../action-types"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT,
}

export type Action = DepositAction | WithdrawAction | BankruptAction