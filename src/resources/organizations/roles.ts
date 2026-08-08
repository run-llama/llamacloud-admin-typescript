// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from './organizations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * List all roles in an organization.
   */
  list(organizationID: string, options?: RequestOptions): APIPromise<RoleListResponse> {
    return this._client.get(path`/api/v1/organizations/${organizationID}/roles`, options);
  }
}

export type RoleListResponse = Array<OrganizationsAPI.Role>;

export declare namespace Roles {
  export { type RoleListResponse as RoleListResponse };
}
