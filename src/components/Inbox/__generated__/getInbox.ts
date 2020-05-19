/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Dificulty, Ickyness, Duration, Priority } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getInbox
// ====================================================

export interface getInbox_inbox {
  __typename: "Task";
  id: string;
  dificulty: Dificulty;
  ickyness: Ickyness;
  duration: Duration;
  priority: Priority;
  title: string;
  description: string;
}

export interface getInbox_projects {
  __typename: "Project";
  name: string;
  id: string;
}

export interface getInbox {
  /**
   * The inbox
   */
  inbox: getInbox_inbox[];
  /**
   * All the projects
   */
  projects: getInbox_projects[];
}
