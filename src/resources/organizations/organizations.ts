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
  UserListMembersResponse,
  UserListProjectsParams,
  UserListProjectsResponse,
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

  /**
   * Get usage for a specific organization.
   */
  getUsage(
    organizationID: string,
    query: OrganizationGetUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageAndPlan> {
    return this._client.get(path`/api/v1/organizations/${organizationID}/usage`, { query, ...options });
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

export interface UsageAndPlan {
  plan: UsageAndPlan.Plan;

  /**
   * Account usage totals shown alongside the plan.
   */
  usage: UsageAndPlan.Usage;
}

export namespace UsageAndPlan {
  export interface Plan {
    limits: Plan.Limits;

    name:
      | 'enterprise'
      | 'enterprise_contract'
      | 'enterprise_poc'
      | 'free'
      | 'free_contract'
      | 'free_v1'
      | 'free_v2'
      | 'llama_parse'
      | 'pro'
      | 'pro_v1'
      | 'pro_v2'
      | 'starter_v1'
      | 'starter_v2'
      | 'unknown'
      | 'yc_deal_v1';

    plan_frequency: 'ANNUAL' | 'MONTHLY' | 'QUARTERLY';

    /**
     * The ID of the plan in Metronome
     */
    id?: string | null;

    /**
     * The current billing period
     */
    current_billing_period?: Plan.CurrentBillingPeriod | null;

    /**
     * The date the plan ends on
     */
    ending_before?: string | null;

    /**
     * The number of payment failures for this organization
     */
    failure_count?: number;

    /**
     * Whether the organization has a failed payment that requires support contact
     */
    is_payment_failed?: boolean;

    recurring_credits?: Array<Plan.RecurringCredit> | null;

    /**
     * The date the plan starts on
     */
    starting_on?: string | null;
  }

  export namespace Plan {
    export interface Limits {
      /**
       * Whether usage is allowed after credit grants are exhausted
       */
      allow_pay_as_you_go: boolean;

      max_concurrent_index_jobs: number | null;

      max_concurrent_parse_jobs_other: number | null;

      max_concurrent_parse_jobs_premium: number | null;

      max_data_sinks: number | null;

      max_data_sources: number | null;

      max_embedding_models: number | null;

      max_extraction_agents: number | null;

      max_extraction_jobs: number | null;

      max_extraction_runs: number | null;

      max_files_per_index: number | null;

      max_indexes: number | null;

      max_monthly_invoice_total_usd: number | null;

      max_organizations: number | null;

      max_pages_per_index: number | null;

      max_projects: number | null;

      max_published_agents: number | null;

      max_report_agent_sessions: number | null;

      max_users: number | null;

      mfa_enabled: boolean;

      sso_enabled: boolean;

      subscription_cost_usd: number;

      max_directories?: number | null;

      max_directory_files_per_directory?: number | null;

      max_directory_ingest_files?: number | null;

      max_directory_sync_plan_actions?: number | null;

      /**
       * The amount of USD cents at which a soft alert should be triggered
       */
      spending_soft_alerts_usd_cents?: Array<number> | null;
    }

    /**
     * The current billing period
     */
    export interface CurrentBillingPeriod {
      end_date: string;

      start_date: string;
    }

    export interface RecurringCredit {
      credit_amount: number;

      credit_type: RecurringCredit.CreditType;

      name: string;

      priority: number;

      /**
       * The ID of the product in Metronome used to represent the credit grant
       */
      product_id: string;

      /**
       * The fraction of the credit that will roll over to the next period, between 0 and
       * 1
       */
      rollover_fraction: number;

      /**
       * How many billing periods the credit grant will last for
       */
      periods_duration?: number;
    }

    export namespace RecurringCredit {
      export interface CreditType {
        id: string;

        name: string;
      }
    }
  }

  /**
   * Account usage totals shown alongside the plan.
   */
  export interface Usage {
    active_alerts?: Array<
      | 'configured_spend_limit_exceeded'
      | 'free_credits_exhausted'
      | 'has_spending_alert'
      | 'internal_spending_alert'
      | 'plan_spend_limit_exceeded'
      | 'plan_spend_limit_soft_alert'
    >;

    active_free_credits_usage?: Array<Usage.ActiveFreeCreditsUsage>;

    current_invoice_total_usd_cents?: number | null;

    total_extraction_agents?: number;

    total_indexed_pages?: number;

    total_indexes?: number;

    total_users?: number;
  }

  export namespace Usage {
    export interface ActiveFreeCreditsUsage {
      expires_at: string;

      grant_name: string;

      remaining_balance: number;

      starting_balance: number;
    }
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

export interface OrganizationGetUsageParams {
  get_current_invoice_total?: boolean;
}

Organizations.Users = Users;
Organizations.Roles = Roles;

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationMember as OrganizationMember,
    type Role as Role,
    type UsageAndPlan as UsageAndPlan,
    type UserOrganizationRole as UserOrganizationRole,
    type OrganizationsPaginatedCursor as OrganizationsPaginatedCursor,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationGetUsageParams as OrganizationGetUsageParams,
  };

  export {
    Users as Users,
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
    type UserRemoveFromProjectParams as UserRemoveFromProjectParams,
  };

  export { Roles as Roles, type RoleListResponse as RoleListResponse };
}
