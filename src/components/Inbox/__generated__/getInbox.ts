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
  id: string | null;
  dificulty: Dificulty | null;
  ickyness: Ickyness | null;
  duration: Duration | null;
  priority: Priority | null;
  title: string | null;
  description: string | null;
}

export interface getInbox_projects {
  __typename: "Project";
  name: string | null;
  id: string | null;
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
