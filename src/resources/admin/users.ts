// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Get a user's resolved custom claims.
   *
   * Claims that have not been explicitly set fall back to their system default.
   * Returns 404 if the user does not exist.
   *
   * Global admin only.
   *
   * @example
   * ```ts
   * const userClaims = await client.admin.users.getClaims(
   *   'user_id',
   * );
   * ```
   */
  getClaims(userID: string, options?: RequestOptions): APIPromise<UserClaims> {
    return this._client.get(path`/api/v1/admin/users/${userID}/claims`, options);
  }

  /**
   * Additively update a user's custom claims.
   *
   * Claims in `set_claims` are added or overwritten; claims named in `remove_claims`
   * are reset to their system default. Claims not referenced by either field are
   * left unchanged, so a single claim can be changed without resending the full set.
   * Returns the user's resolved claims after the update.
   *
   * Returns 404 if the user does not exist.
   *
   * Global admin only.
   *
   * @example
   * ```ts
   * const userClaims = await client.admin.users.updateClaims(
   *   'user_id',
   *   { set_claims: { allowed_org_creation: true } },
   * );
   * ```
   */
  updateClaims(
    userID: string,
    body: UserUpdateClaimsParams,
    options?: RequestOptions,
  ): APIPromise<UserClaims> {
    return this._client.patch(path`/api/v1/admin/users/${userID}/claims`, { body, ...options });
  }
}

/**
 * Custom claims that dictate various limits or allowed behaviors. Currently these
 * claims reside at a per user level. Claims may expand to a per organization level
 * or project in the future.
 */
export interface CustomClaims {
  /**
   * Whether the user is allowed to delete organizations.
   */
  allow_org_deletion?: boolean;

  /**
   * Whether the user is allowed to create organizations.
   */
  allowed_org_creation?: boolean;

  /**
   * Whether the user is allowed to access API data sources.
   */
  api_datasource_access?: boolean;

  /**
   * Cap on how many organizations this user may create. None means unlimited. Only
   * enforced when allowed_org_creation is True.
   */
  maximum_org_creation?: number | null;
}

/**
 * A user's fully resolved custom claims after applying system defaults.
 */
export interface UserClaims {
  /**
   * The user's resolved custom claims.
   */
  claims: CustomClaims;

  /**
   * The user ID the claims belong to.
   */
  user_id: string;
}

export interface UserUpdateClaimsParams {
  /**
   * Names of claims to reset to their system default.
   */
  remove_claims?: Array<
    'allow_org_deletion' | 'allowed_org_creation' | 'api_datasource_access' | 'maximum_org_creation'
  > | null;

  /**
   * A partial set of custom claims for additive updates.
   *
   * Every field is optional. Only the claims explicitly provided in a request are
   * added or overwritten; claims left unset are not touched, so callers can change a
   * single claim without resending the full claim set.
   */
  set_claims?: UserUpdateClaimsParams.SetClaims | null;
}

export namespace UserUpdateClaimsParams {
  /**
   * A partial set of custom claims for additive updates.
   *
   * Every field is optional. Only the claims explicitly provided in a request are
   * added or overwritten; claims left unset are not touched, so callers can change a
   * single claim without resending the full claim set.
   */
  export interface SetClaims {
    /**
     * Whether the user is allowed to delete organizations.
     */
    allow_org_deletion?: boolean | null;

    /**
     * Whether the user is allowed to create organizations.
     */
    allowed_org_creation?: boolean | null;

    /**
     * Whether the user is allowed to access API data sources.
     */
    api_datasource_access?: boolean | null;

    /**
     * Cap on how many organizations this user may create. None means unlimited. Only
     * enforced when allowed_org_creation is True.
     */
    maximum_org_creation?: number | null;
  }
}

export declare namespace Users {
  export {
    type CustomClaims as CustomClaims,
    type UserClaims as UserClaims,
    type UserUpdateClaimsParams as UserUpdateClaimsParams,
  };
}
