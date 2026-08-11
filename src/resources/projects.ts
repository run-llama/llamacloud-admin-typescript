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
  create(params: ProjectCreateParams, options?: RequestOptions): APIPromise<Project> {
    const { organization_id, ...body } = params;
    return this._client.post('/api/v2/projects', { query: { organization_id }, body, ...options });
  }

  /**
   * Update an existing project.
   */
  update(projectID: string, params: ProjectUpdateParams, options?: RequestOptions): APIPromise<Project> {
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
  ): PagePromise<ProjectsPaginatedCursor, Project> {
    return this._client.getAPIList('/api/v2/projects', PaginatedCursor<Project>, { query, ...options });
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
  ): APIPromise<Project> {
    return this._client.get(path`/api/v2/projects/${projectID}`, { query, ...options });
  }

  /**
   * Get usage for a project
   */
  getUsage(
    projectID: string,
    query: ProjectGetUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectGetUsageResponse> {
    return this._client.get(path`/api/v1/projects/${projectID}/usage`, { query, ...options });
  }
}

export type ProjectsPaginatedCursor = PaginatedCursor<Project>;

/**
 * API response schema for a project.
 */
export interface Project {
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

export interface ProjectGetUsageResponse {
  plan: ProjectGetUsageResponse.Plan;

  /**
   * Account usage totals shown alongside the plan.
   */
  usage: ProjectGetUsageResponse.Usage;
}

export namespace ProjectGetUsageResponse {
  export interface Plan {
    limits: Plan.Limits;

    metronome_plan_type: 'contract' | 'plan';

    metronome_rate_card_alias: string | null;

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

    /**
     * The ID of the customer in Metronome
     */
    metronome_customer_id?: string | null;

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

export interface ProjectGetUsageParams {
  get_current_invoice_total?: boolean;

  organization_id?: string | null;
}

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectGetUsageResponse as ProjectGetUsageResponse,
    type ProjectsPaginatedCursor as ProjectsPaginatedCursor,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectGetParams as ProjectGetParams,
    type ProjectGetUsageParams as ProjectGetUsageParams,
  };
}
