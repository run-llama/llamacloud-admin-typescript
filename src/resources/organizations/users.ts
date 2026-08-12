// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from './organizations';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Remove users from an organization.
   */
  delete(memberUserID: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organization_id, body } = params;
    return this._client.delete(path`/api/v1/organizations/${organization_id}/users/${memberUserID}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Add a user to an organization.
   */
  add(organizationID: string, params: UserAddParams, options?: RequestOptions): APIPromise<UserAddResponse> {
    const { body } = params;
    return this._client.put(path`/api/v1/organizations/${organizationID}/users`, { body: body, ...options });
  }

  /**
   * Add a user to a project.
   */
  addToProject(
    userID: string,
    params: UserAddToProjectParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { organization_id, project_id } = params;
    return this._client.put(path`/api/v1/organizations/${organization_id}/users/${userID}/projects`, {
      query: { project_id },
      ...options,
    });
  }

  /**
   * Assign a role to a user in an organization.
   */
  assignRole(
    organizationID: string,
    body: UserAssignRoleParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationsAPI.UserOrganizationRole> {
    return this._client.put(path`/api/v1/organizations/${organizationID}/users/roles`, { body, ...options });
  }

  /**
   * Get all users in an organization.
   */
  listMembers(organizationID: string, options?: RequestOptions): APIPromise<UserListMembersResponse> {
    return this._client.get(path`/api/v1/organizations/${organizationID}/users`, options);
  }

  /**
   * List all projects for a user in an organization.
   */
  listProjects(
    userID: string,
    params: UserListProjectsParams,
    options?: RequestOptions,
  ): APIPromise<UserListProjectsResponse> {
    const { organization_id } = params;
    return this._client.get(path`/api/v1/organizations/${organization_id}/users/${userID}/projects`, options);
  }

  /**
   * Get the role of a user in an organization.
   */
  listRoles(
    organizationID: string,
    query: UserListRolesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationsAPI.UserOrganizationRole | null> {
    return this._client.get(path`/api/v1/organizations/${organizationID}/users/roles`, { query, ...options });
  }

  /**
   * Remove a user from a project.
   */
  removeFromProject(
    projectID: string,
    params: UserRemoveFromProjectParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { organization_id, user_id } = params;
    return this._client.delete(
      path`/api/v1/organizations/${organization_id}/users/${user_id}/projects/${projectID}`,
      options,
    );
  }
}

export type UserAddResponse = Array<OrganizationsAPI.OrganizationMember>;

export type UserAddToProjectResponse = unknown;

export type UserListMembersResponse = Array<OrganizationsAPI.OrganizationMember>;

export type UserListProjectsResponse = Array<UserListProjectsResponse.UserListProjectsResponseItem>;

export namespace UserListProjectsResponse {
  /**
   * Schema for a project.
   */
  export interface UserListProjectsResponseItem {
    /**
     * Unique identifier
     */
    id: string;

    name: string;

    /**
     * The Organization ID the project is under.
     */
    organization_id: string;

    /**
     * Creation datetime
     */
    created_at?: string | null;

    /**
     * Whether this project is the default project for the user.
     */
    is_default?: boolean;

    /**
     * Update datetime
     */
    updated_at?: string | null;
  }
}

export type UserRemoveFromProjectResponse = unknown;

export interface UserDeleteParams {
  /**
   * Path param
   */
  organization_id: string;

  /**
   * Body param
   */
  body?: Array<string> | null;
}

export interface UserAddParams {
  body: Array<UserAddParams.Body>;
}

export namespace UserAddParams {
  /**
   * Request to add a user to an organization.
   */
  export interface Body {
    /**
     * The project IDs to add the user to.
     */
    project_ids: Array<string> | null;

    /**
     * The user's email address.
     */
    email?: string | null;

    /**
     * The role ID to assign to the user.
     */
    role_id?: string | null;

    /**
     * The user's ID.
     */
    user_id?: string | null;
  }
}

export interface UserAddToProjectParams {
  /**
   * Path param
   */
  organization_id: string;

  /**
   * Query param
   */
  project_id?: string | null;
}

export interface UserAssignRoleParams {
  /**
   * The organization's ID.
   */
  organization_id: string;

  /**
   * The role's ID.
   */
  role_id: string;

  /**
   * The user's ID.
   */
  user_id: string;
}

export interface UserListProjectsParams {
  organization_id: string;
}

export interface UserListRolesParams {
  project_id?: string | null;
}

export interface UserRemoveFromProjectParams {
  organization_id: string;

  user_id: string;
}

export declare namespace Users {
  export {
    type UserAddResponse as UserAddResponse,
    type UserAddToProjectResponse as UserAddToProjectResponse,
    type UserListMembersResponse as UserListMembersResponse,
    type UserListProjectsResponse as UserListProjectsResponse,
    type UserRemoveFromProjectResponse as UserRemoveFromProjectResponse,
    type UserDeleteParams as UserDeleteParams,
    type UserAddParams as UserAddParams,
    type UserAddToProjectParams as UserAddToProjectParams,
    type UserAssignRoleParams as UserAssignRoleParams,
    type UserListProjectsParams as UserListProjectsParams,
    type UserListRolesParams as UserListRolesParams,
    type UserRemoveFromProjectParams as UserRemoveFromProjectParams,
  };
}
