/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateNewTaskMutationInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateNewTask
// ====================================================

export interface CreateNewTask_createNewTask_task {
  __typename: "Task";
  id: string | null;
}

export interface CreateNewTask_createNewTask {
  __typename: "CreateNewTaskMutationPayload";
  task: CreateNewTask_createNewTask_task;
}

export interface CreateNewTask {
  createNewTask: CreateNewTask_createNewTask | null;
}

export interface CreateNewTaskVariables {
  input: CreateNewTaskMutationInput;
}
