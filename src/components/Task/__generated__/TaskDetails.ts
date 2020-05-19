/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Dificulty, Ickyness, Duration, Priority } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: TaskDetails
// ====================================================

export interface TaskDetails {
  __typename: "Task";
  id: string;
  dificulty: Dificulty;
  ickyness: Ickyness;
  duration: Duration;
  priority: Priority;
  title: string;
  description: string;
}
