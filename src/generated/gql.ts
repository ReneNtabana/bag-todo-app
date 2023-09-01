/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetCompletedQueries {\n  Tasks(where: {status: {_eq: \"completed\"}}) {\n    id\n    tasks\n    description\n    status\n  }\n}": types.GetCompletedQueriesDocument,
    "mutation insert_single_Task($description: String!, $tasks: String!, $status: Boolean) {\n  insert_Tasks_one(object: {tasks: $tasks, description: $description}) {\n    id\n    tasks\n    description\n    status\n  }\n}": types.Insert_Single_TaskDocument,
    "mutation DeleteTask($id: uuid!) {\n  delete_Tasks_by_pk(id: $id) {\n    id\n    tasks\n    description\n    status\n  }\n}": types.DeleteTaskDocument,
    "query GetTaskQuery {\n  Tasks {\n    id\n    tasks\n    description\n    status\n  }\n}": types.GetTaskQueryDocument,
    "mutation MarkOneTaskAsComplete($id: uuid!, $completed: String!) {\n  update_Tasks_by_pk(pk_columns: {id: $id}, _set: {status: $completed}) {\n    id\n    status\n    tasks\n  }\n}": types.MarkOneTaskAsCompleteDocument,
    "query GetPendingQueries {\n  Tasks(where: {status: {_eq: \"pending\"}}) {\n    id\n    tasks\n    description\n    status\n  }\n}": types.GetPendingQueriesDocument,
    "mutation UpdateTask($id: uuid!, $task: String!, $description: String!) {\n  update_Tasks_by_pk(\n    pk_columns: {id: $id}\n    _set: {tasks: $task, description: $description}\n  ) {\n    id\n    tasks\n    description\n    status\n  }\n}": types.UpdateTaskDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCompletedQueries {\n  Tasks(where: {status: {_eq: \"completed\"}}) {\n    id\n    tasks\n    description\n    status\n  }\n}"): (typeof documents)["query GetCompletedQueries {\n  Tasks(where: {status: {_eq: \"completed\"}}) {\n    id\n    tasks\n    description\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation insert_single_Task($description: String!, $tasks: String!, $status: Boolean) {\n  insert_Tasks_one(object: {tasks: $tasks, description: $description}) {\n    id\n    tasks\n    description\n    status\n  }\n}"): (typeof documents)["mutation insert_single_Task($description: String!, $tasks: String!, $status: Boolean) {\n  insert_Tasks_one(object: {tasks: $tasks, description: $description}) {\n    id\n    tasks\n    description\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteTask($id: uuid!) {\n  delete_Tasks_by_pk(id: $id) {\n    id\n    tasks\n    description\n    status\n  }\n}"): (typeof documents)["mutation DeleteTask($id: uuid!) {\n  delete_Tasks_by_pk(id: $id) {\n    id\n    tasks\n    description\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTaskQuery {\n  Tasks {\n    id\n    tasks\n    description\n    status\n  }\n}"): (typeof documents)["query GetTaskQuery {\n  Tasks {\n    id\n    tasks\n    description\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation MarkOneTaskAsComplete($id: uuid!, $completed: String!) {\n  update_Tasks_by_pk(pk_columns: {id: $id}, _set: {status: $completed}) {\n    id\n    status\n    tasks\n  }\n}"): (typeof documents)["mutation MarkOneTaskAsComplete($id: uuid!, $completed: String!) {\n  update_Tasks_by_pk(pk_columns: {id: $id}, _set: {status: $completed}) {\n    id\n    status\n    tasks\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPendingQueries {\n  Tasks(where: {status: {_eq: \"pending\"}}) {\n    id\n    tasks\n    description\n    status\n  }\n}"): (typeof documents)["query GetPendingQueries {\n  Tasks(where: {status: {_eq: \"pending\"}}) {\n    id\n    tasks\n    description\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateTask($id: uuid!, $task: String!, $description: String!) {\n  update_Tasks_by_pk(\n    pk_columns: {id: $id}\n    _set: {tasks: $task, description: $description}\n  ) {\n    id\n    tasks\n    description\n    status\n  }\n}"): (typeof documents)["mutation UpdateTask($id: uuid!, $task: String!, $description: String!) {\n  update_Tasks_by_pk(\n    pk_columns: {id: $id}\n    _set: {tasks: $task, description: $description}\n  ) {\n    id\n    tasks\n    description\n    status\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;