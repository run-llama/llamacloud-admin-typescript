// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create a new API key.
   *
   * If project_id is specified, validates the user can read that project.
   *
   * Args: api_key_create: API key creation data user: Current user db: Database
   * session
   *
   * Returns: The created API key with the secret key visible in redacted_api_key
   * field
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.create();
   * ```
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.post('/api/v1/beta/api-keys', { body, ...options });
  }

  /**
   * List API keys.
   *
   * If project_id is provided, validates user has access to that project. If
   * project_id is not provided, scopes results to the current user.
   *
   * Args: user: Current user page_size: Number of items per page page_token: Token
   * for pagination name: Filter by API key name project_id: Filter by project ID
   * key_type: Filter by key type
   *
   * Returns: Paginated response with API keys
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const apiKey of client.apiKeys.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<APIKeysPaginatedCursor, APIKey> {
    return this._client.getAPIList('/api/v1/beta/api-keys', PaginatedCursor<APIKey>, { query, ...options });
  }

  /**
   * Delete an API key.
   *
   * If the API key belongs to a project, validates user has admin permissions for
   * that project. If the API key has no project, validates it belongs to the current
   * user.
   *
   * Args: api_key_id: The ID of the API key to delete user: Current user
   *
   * @example
   * ```ts
   * await client.apiKeys.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(apiKeyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/beta/api-keys/${apiKeyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type APIKeysPaginatedCursor = PaginatedCursor<APIKey>;

/**
 * Schema for an API Key.
 */
export interface APIKey {
  /**
   * Unique identifier
   */
  id: string;

  redacted_api_key: string;

  user_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * When the API key expires. Null if the key never expires.
   */
  expires_at?: string | null;

  key_type?: 'agent' | 'user';

  metadata?: { [key: string]: unknown } | null;

  name?: string | null;

  project_id?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface APIKeyCreateParams {
  /**
   * When the API key should expire. If not set, the key never expires.
   */
  expires_at?: string | null;

  key_type?: 'agent' | 'user';

  name?: string | null;

  /**
   * The project ID to associate with the API key.
   */
  project_id?: string | null;
}

export interface APIKeyListParams extends PaginatedCursorParams {
  expand?: Array<string>;

  key_type?: 'agent' | 'user' | null;

  name?: string | null;

  project_id?: string | null;
}

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type APIKeysPaginatedCursor as APIKeysPaginatedCursor,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyListParams as APIKeyListParams,
  };
}
