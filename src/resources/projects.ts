// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create a new project in the given organization.
   */
  create(params: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    const { organization_id, ...body } = params;
    return this._client.post('/api/v2/projects', { query: { organization_id }, body, ...options });
  }

  /**
   * Update an existing project.
   */
  update(
    projectID: string,
    params: ProjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProjectUpdateResponse> {
    const { organization_id, ...body } = params;
    return this._client.put(path`/api/v2/projects/${projectID}`, {
      query: { organization_id },
      body,
      ...options,
    });
  }

  /**
   * List projects in an organization. Requires `organization_id` or a project-scoped
   * API key.
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProjectListResponsesPaginatedCursor, ProjectListResponse> {
    return this._client.getAPIList('/api/v2/projects', PaginatedCursor<ProjectListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a project by ID.
   */
  delete(
    projectID: string,
    params: ProjectDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organization_id } = params ?? {};
    return this._client.delete(path`/api/v2/projects/${projectID}`, {
      query: { organization_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a project by ID.
   */
  get(
    projectID: string,
    query: ProjectGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectGetResponse> {
    return this._client.get(path`/api/v2/projects/${projectID}`, { query, ...options });
  }
}

export type ProjectListResponsesPaginatedCursor = PaginatedCursor<ProjectListResponse>;

/**
 * Schema for a project.
 */
export interface Project {
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

/**
 * API response schema for a project.
 */
export interface ProjectCreateResponse {
  /**
   * The project's unique identifier.
   */
  id: string;

  /**
   * The project's display name.
   */
  name: string;

  /**
   * The organization the project belongs to.
   */
  organization_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Whether this project is the default project for its organization.
   */
  is_default?: boolean;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API response schema for a project.
 */
export interface ProjectUpdateResponse {
  /**
   * The project's unique identifier.
   */
  id: string;

  /**
   * The project's display name.
   */
  name: string;

  /**
   * The organization the project belongs to.
   */
  organization_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Whether this project is the default project for its organization.
   */
  is_default?: boolean;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API response schema for a project.
 */
export interface ProjectListResponse {
  /**
   * The project's unique identifier.
   */
  id: string;

  /**
   * The project's display name.
   */
  name: string;

  /**
   * The organization the project belongs to.
   */
  organization_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Whether this project is the default project for its organization.
   */
  is_default?: boolean;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API response schema for a project.
 */
export interface ProjectGetResponse {
  /**
   * The project's unique identifier.
   */
  id: string;

  /**
   * The project's display name.
   */
  name: string;

  /**
   * The organization the project belongs to.
   */
  organization_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Whether this project is the default project for its organization.
   */
  is_default?: boolean;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface ProjectCreateParams {
  /**
   * Query param
   */
  organization_id: string;

  /**
   * Body param: The project's display name.
   */
  name: string;
}

export interface ProjectUpdateParams {
  /**
   * Body param: The project's new display name.
   */
  name: string;

  /**
   * Query param
   */
  organization_id?: string | null;
}

export interface ProjectListParams extends PaginatedCursorParams {
  name?: string | null;

  organization_id?: string | null;
}

export interface ProjectDeleteParams {
  organization_id?: string | null;
}

export interface ProjectGetParams {
  organization_id?: string | null;
}

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectGetResponse as ProjectGetResponse,
    type ProjectListResponsesPaginatedCursor as ProjectListResponsesPaginatedCursor,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectGetParams as ProjectGetParams,
  };
}
