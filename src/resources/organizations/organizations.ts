// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RolesAPI from './roles';
import { RoleListResponse, Roles } from './roles';
import * as UsersAPI from './users';
import {
  UserAddParams,
  UserAddResponse,
  UserAddToProjectParams,
  UserAddToProjectResponse,
  UserAssignRoleParams,
  UserDeleteParams,
  UserListProjectsParams,
  UserListProjectsResponse,
  UserListResponse,
  UserListRolesParams,
  UserRemoveFromProjectParams,
  UserRemoveFromProjectResponse,
  Users,
} from './users';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * Create a new organization.
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<Organization> {
    return this._client.post('/api/v2/organizations', { body, ...options });
  }

  /**
   * Update an existing organization.
   */
  update(
    organizationID: string,
    body: OrganizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Organization> {
    return this._client.put(path`/api/v2/organizations/${organizationID}`, { body, ...options });
  }

  /**
   * List organizations the current user can access.
   */
  list(
    query: OrganizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrganizationsPaginatedCursor, Organization> {
    return this._client.getAPIList('/api/v2/organizations', PaginatedCursor<Organization>, {
      query,
      ...options,
    });
  }

  /**
   * Delete an organization by ID.
   */
  delete(organizationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/organizations/${organizationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get an organization by ID.
   */
  get(organizationID: string, options?: RequestOptions): APIPromise<Organization> {
    return this._client.get(path`/api/v2/organizations/${organizationID}`, options);
  }
}

export type OrganizationsPaginatedCursor = PaginatedCursor<Organization>;

/**
 * API response schema for an organization.
 */
export interface Organization {
  /**
   * The organization's unique identifier.
   */
  id: string;

  /**
   * The organization's display name.
   */
  name: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Additional organization metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * A user's membership in an organization, including roles.
 */
export interface OrganizationMember {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * The organization's ID.
   */
  organization_id: string;

  /**
   * The roles of the user in the organization.
   */
  roles: Array<UserOrganizationRole>;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * The user's email address.
   */
  email?: string | null;

  /**
   * @deprecated The email address of the user who added the user to the
   * organization.
   */
  invited_by_user_email?: string | null;

  /**
   * The user ID of the user who added the user to the organization.
   */
  invited_by_user_id?: string | null;

  /**
   * Whether the user's membership is pending account signup.
   */
  pending?: boolean;

  /**
   * Update datetime
   */
  updated_at?: string | null;

  /**
   * The user's ID.
   */
  user_id?: string | null;
}

/**
 * Schema for a role.
 */
export interface Role {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * A name for the role.
   */
  name: string;

  /**
   * The actual permissions of the role.
   */
  permissions: Array<Role.Permission>;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export namespace Role {
  /**
   * Schema for a permission.
   */
  export interface Permission {
    /**
     * Unique identifier
     */
    id: string;

    /**
     * Whether the permission is granted or not.
     */
    access: boolean;

    /**
     * A description for the permission.
     */
    description: string | null;

    /**
     * A name for the permission.
     */
    name: string;

    /**
     * Creation datetime
     */
    created_at?: string | null;

    /**
     * Update datetime
     */
    updated_at?: string | null;
  }
}

/**
 * Schema for a user's role in an organization.
 */
export interface UserOrganizationRole {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * The organization's ID.
   */
  organization_id: string;

  /**
   * The role.
   */
  role: Role;

  /**
   * The user's ID.
   */
  user_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * The project ID scope.
   */
  project_ids?: Array<string> | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface OrganizationCreateParams {
  /**
   * The organization's display name.
   */
  name: string;
}

export interface OrganizationUpdateParams {
  /**
   * The organization's new display name.
   */
  name: string;
}

export interface OrganizationListParams extends PaginatedCursorParams {
  name?: string | null;
}

Organizations.Users = Users;
Organizations.Roles = Roles;

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationMember as OrganizationMember,
    type Role as Role,
    type UserOrganizationRole as UserOrganizationRole,
    type OrganizationsPaginatedCursor as OrganizationsPaginatedCursor,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
  };

  export {
    Users as Users,
    type UserListResponse as UserListResponse,
    type UserAddResponse as UserAddResponse,
    type UserAddToProjectResponse as UserAddToProjectResponse,
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

  export { Roles as Roles, type RoleListResponse as RoleListResponse };
}
