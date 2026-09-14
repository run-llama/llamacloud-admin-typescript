// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create an API key.
   *
   * Scope it to a project with `project_id`, which requires read access to that
   * project; omit it for a key that reaches every project you can read. A
   * project-scoped key cannot escape its own project: it confines an omitted
   * `project_id` to that project and refuses any other. The response carries the
   * secret in `redacted_api_key`, and only this once.
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
   * Name a `project_id` to list every key on that project, which its members share;
   * naming one you cannot read is a 404. Omit it to list your own. A project-scoped
   * key sees only its own project either way.
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
   * Revoke an API key.
   *
   * Revoking a project key takes access away from everyone using it, so it needs
   * key-management permission on that project. Your own unscoped keys need only that
   * you own them. A project-scoped key revokes only within its own project, unscoped
   * keys included.
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

  /**
   * The key with its middle masked, except on the create response, which returns the
   * full secret once and never again.
   */
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
