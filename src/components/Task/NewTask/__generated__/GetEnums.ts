/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEnums
// ====================================================

export interface GetEnums___type_enumValues {
  __typename: "__EnumValue";
  name: string;
}

export interface GetEnums___type {
  __typename: "__Type";
  name: string | null;
  enumValues: GetEnums___type_enumValues[] | null;
}

export interface GetEnums {
  __type: GetEnums___type | null;
}
