import { Cycle } from '../cycles/reducer'

export enum ActionTypesCycle {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypesCycle.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypesCycle.INTERRUPT_CURRENT_CYCLE
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypesCycle.MARK_CURRENT_CYCLE_AS_FINISHED
  }
}