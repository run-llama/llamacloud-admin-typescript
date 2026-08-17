// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invites extends APIResource {
  /**
   * Accept a pending invitation. Returns the joined organization id.
   */
  accept(inviteID: string, options?: RequestOptions): APIPromise<InviteAcceptResponse> {
    return this._client.post(path`/api/v2/invites/${inviteID}/accept`, options);
  }

  /**
   * Decline a pending invitation.
   */
  decline(inviteID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/invites/${inviteID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List the current user's pending invitations, cursor-paginated.
   */
  listMine(
    query: InviteListMineParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InvitesPaginatedCursor, Invite> {
    return this._client.getAPIList('/api/v2/invites', PaginatedCursor<Invite>, { query, ...options });
  }
}

export type InvitesPaginatedCursor = PaginatedCursor<Invite>;

/**
 * A pending invitation visible to the invitee.
 */
export interface Invite {
  /**
   * The invite's unique identifier.
   */
  id: string;

  /**
   * The organization the user is invited to.
   */
  organization_id: string;

  /**
   * The organization's display name.
   */
  organization_name: string;

  /**
   * The role being granted (e.g. admin, viewer).
   */
  role: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Response for accepting an invitation.
 */
export interface InviteAcceptResponse {
  /**
   * The organization the user just joined.
   */
  organization_id: string;
}

export interface InviteListMineParams extends PaginatedCursorParams {}

export declare namespace Invites {
  export {
    type Invite as Invite,
    type InviteAcceptResponse as InviteAcceptResponse,
    type InvitesPaginatedCursor as InvitesPaginatedCursor,
    type InviteListMineParams as InviteListMineParams,
  };
}
