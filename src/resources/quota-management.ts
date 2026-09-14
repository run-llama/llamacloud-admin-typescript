// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class QuotaManagement extends APIResource {
  /**
   * Create a quota configuration for your organization, or for a single project
   * within it.
   */
  create(params: QuotaManagementCreateParams, options?: RequestOptions): APIPromise<QuotaConfiguration> {
    const { organization_id, ...body } = params;
    return this._client.post('/api/v1/beta/quota-management', {
      query: { organization_id },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a paginated list of quota configurations with optional filtering. When
   * expand=true, returns resolved quotas (effective values after fallback chain) and
   * pagination parameters are ignored.
   */
  list(query: QuotaManagementListParams, options?: RequestOptions): APIPromise<QuotaManagementListResponse> {
    return this._client.get('/api/v1/beta/quota-management', { query, ...options });
  }

  /**
   * Delete a quota configuration by removing the override.
   */
  delete(quotaID: string, params: QuotaManagementDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organization_id } = params;
    return this._client.delete(path`/api/v1/beta/quota-management/${quotaID}`, {
      query: { organization_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Full quota configuration model.
 */
export interface QuotaConfiguration {
  /**
   * The configuration metadata
   */
  configuration_metadata: { [key: string]: unknown } | null;

  /**
   * The quota configuration type
   */
  configuration_type:
    | 'allow_pay_as_you_go'
    | 'limit_agent_coder_daily_usage_usd'
    | 'limit_agent_deployments'
    | 'limit_batch_files'
    | 'limit_classify_input_tokens'
    | 'limit_daily_usage_credits'
    | 'limit_directories'
    | 'limit_directory_files_per_directory'
    | 'limit_directory_ingest_download_size_bytes'
    | 'limit_directory_ingest_files'
    | 'limit_directory_sync_plan_actions'
    | 'limit_embedding_character'
    | 'limit_files_per_index'
    | 'limit_max_monthly_invoice_total_usd_cents'
    | 'limit_monthly_usage_credits'
    | 'limit_projects'
    | 'limit_split_categories'
    | 'limit_total_file_count'
    | 'limit_total_file_storage_bytes'
    | 'limit_users'
    | 'rate_limit_batch_api_creation'
    | 'rate_limit_chat_api_message'
    | 'rate_limit_classify_api_creation'
    | 'rate_limit_classify_api_list'
    | 'rate_limit_classify_api_query'
    | 'rate_limit_concurrent_jobs_in_execution_default'
    | 'rate_limit_concurrent_jobs_in_execution_doc_ingest'
    | 'rate_limit_concurrent_jobs_in_execution_metadata_update'
    | 'rate_limit_default_api_read'
    | 'rate_limit_default_api_write'
    | 'rate_limit_directory_file_api_read'
    | 'rate_limit_directory_file_api_write'
    | 'rate_limit_directory_ingest_project_job_creation'
    | 'rate_limit_extract_agent_creation'
    | 'rate_limit_extract_api_creation'
    | 'rate_limit_extract_api_list'
    | 'rate_limit_extract_api_query'
    | 'rate_limit_extract_concurrent_default'
    | 'rate_limit_file_api_read'
    | 'rate_limit_file_api_write'
    | 'rate_limit_index_v1_pipeline_concurrent_jobs'
    | 'rate_limit_parse_api_creation'
    | 'rate_limit_parse_api_list'
    | 'rate_limit_parse_api_query'
    | 'rate_limit_parse_concurrent_default'
    | 'rate_limit_parse_concurrent_pages_agentic'
    | 'rate_limit_parse_concurrent_pages_agentic_plus'
    | 'rate_limit_parse_concurrent_pages_cost_effective'
    | 'rate_limit_parse_concurrent_premium'
    | 'rate_limit_parse_token_bucket_agentic'
    | 'rate_limit_parse_token_bucket_agentic_plus'
    | 'rate_limit_parse_token_bucket_cost_effective'
    | 'rate_limit_parse_token_bucket_unknown_tier'
    | 'rate_limit_project_concurrent_jobs'
    | 'rate_limit_project_concurrent_turbo_jobs'
    | 'rate_limit_split_api_creation'
    | 'rate_limit_split_api_query'
    | 'rate_limit_spreadsheet_api_list'
    | 'rate_limit_spreadsheet_api_query'
    | 'rate_limit_spreadsheet_creation'
    | 'rate_limit_usage_api_query'
    | 'rate_limit_verify_api_creation'
    | 'rate_limit_verify_api_list'
    | 'rate_limit_verify_api_query';

  /**
   * The quota configuration value
   */
  configuration_value: QuotaConfiguration.ConfigurationValue;

  /**
   * The source ID, e.g. the organization ID
   */
  source_id: string;

  /**
   * The source type, e.g. 'organization'
   */
  source_type: 'GLOBAL' | 'organization' | 'plan_tier' | 'project';

  /**
   * The status of the quota, i.e. 'ACTIVE' or 'INACTIVE'
   */
  status: 'ACTIVE' | 'INACTIVE';

  /**
   * The system-generated UUID for the quota
   */
  id?: string | null;

  /**
   * The creation date of the quota configuration in the database
   */
  created_at?: string | null;

  /**
   * The end date of the quota
   */
  ended_at?: string | null;

  /**
   * The idempotency key
   */
  idempotency_key?: string | null;

  /**
   * The start date of the quota
   */
  started_at?: string;

  /**
   * The last updated date of the quota configuration in the database
   */
  updated_at?: string | null;
}

export namespace QuotaConfiguration {
  /**
   * The quota configuration value
   */
  export interface ConfigurationValue {
    /**
     * The rate numerator
     */
    numerator: number;

    /**
     * The rate limit denominator
     */
    denominator?: number | null;

    /**
     * The default rate limit denominator units
     */
    denominator_units?: 'day' | 'hour' | 'minute' | 'second' | null;
  }
}

/**
 * Paginated list of quota configurations.
 */
export interface QuotaManagementListResponse {
  items: Array<QuotaConfiguration>;

  page: number;

  pages: number;

  size: number;

  total: number;
}

export interface QuotaManagementCreateParams {
  /**
   * Query param
   */
  organization_id: string;

  /**
   * Body param: The quota setting to update
   */
  setting: 'allow_pay_as_you_go' | 'limit_daily_usage_credits' | 'limit_monthly_usage_credits';

  /**
   * Body param: The value for the setting. For boolean settings, use 1 (enabled) or
   * 0 (disabled). For credit limits, the number of credits allowed in the window;
   * delete the setting to remove the limit. For limits denominated in USD cents, a
   * whole number of dollars (a multiple of 100).
   */
  value: number;

  /**
   * Body param: Limit this project on its own. Omit to limit the organization as a
   * whole. A project limit does not inherit from the organization limit: both apply,
   * and whichever is reached first stops the work. Credit limits only.
   */
  project_id?: string | null;
}

export interface QuotaManagementListParams {
  source_id: string;

  source_type: 'GLOBAL' | 'organization' | 'plan_tier' | 'project';

  configuration_type?:
    | 'allow_pay_as_you_go'
    | 'limit_agent_coder_daily_usage_usd'
    | 'limit_agent_deployments'
    | 'limit_batch_files'
    | 'limit_classify_input_tokens'
    | 'limit_daily_usage_credits'
    | 'limit_directories'
    | 'limit_directory_files_per_directory'
    | 'limit_directory_ingest_download_size_bytes'
    | 'limit_directory_ingest_files'
    | 'limit_directory_sync_plan_actions'
    | 'limit_embedding_character'
    | 'limit_files_per_index'
    | 'limit_max_monthly_invoice_total_usd_cents'
    | 'limit_monthly_usage_credits'
    | 'limit_projects'
    | 'limit_split_categories'
    | 'limit_total_file_count'
    | 'limit_total_file_storage_bytes'
    | 'limit_users'
    | 'rate_limit_batch_api_creation'
    | 'rate_limit_chat_api_message'
    | 'rate_limit_classify_api_creation'
    | 'rate_limit_classify_api_list'
    | 'rate_limit_classify_api_query'
    | 'rate_limit_concurrent_jobs_in_execution_default'
    | 'rate_limit_concurrent_jobs_in_execution_doc_ingest'
    | 'rate_limit_concurrent_jobs_in_execution_metadata_update'
    | 'rate_limit_default_api_read'
    | 'rate_limit_default_api_write'
    | 'rate_limit_directory_file_api_read'
    | 'rate_limit_directory_file_api_write'
    | 'rate_limit_directory_ingest_project_job_creation'
    | 'rate_limit_extract_agent_creation'
    | 'rate_limit_extract_api_creation'
    | 'rate_limit_extract_api_list'
    | 'rate_limit_extract_api_query'
    | 'rate_limit_extract_concurrent_default'
    | 'rate_limit_file_api_read'
    | 'rate_limit_file_api_write'
    | 'rate_limit_index_v1_pipeline_concurrent_jobs'
    | 'rate_limit_parse_api_creation'
    | 'rate_limit_parse_api_list'
    | 'rate_limit_parse_api_query'
    | 'rate_limit_parse_concurrent_default'
    | 'rate_limit_parse_concurrent_pages_agentic'
    | 'rate_limit_parse_concurrent_pages_agentic_plus'
    | 'rate_limit_parse_concurrent_pages_cost_effective'
    | 'rate_limit_parse_concurrent_premium'
    | 'rate_limit_parse_token_bucket_agentic'
    | 'rate_limit_parse_token_bucket_agentic_plus'
    | 'rate_limit_parse_token_bucket_cost_effective'
    | 'rate_limit_parse_token_bucket_unknown_tier'
    | 'rate_limit_project_concurrent_jobs'
    | 'rate_limit_project_concurrent_turbo_jobs'
    | 'rate_limit_split_api_creation'
    | 'rate_limit_split_api_query'
    | 'rate_limit_spreadsheet_api_list'
    | 'rate_limit_spreadsheet_api_query'
    | 'rate_limit_spreadsheet_creation'
    | 'rate_limit_usage_api_query'
    | 'rate_limit_verify_api_creation'
    | 'rate_limit_verify_api_list'
    | 'rate_limit_verify_api_query'
    | null;

  exclude_self_service?: boolean;

  expand?: boolean;

  page?: number;

  page_size?: number;
}

export interface QuotaManagementDeleteParams {
  organization_id: string;
}

export declare namespace QuotaManagement {
  export {
    type QuotaConfiguration as QuotaConfiguration,
    type QuotaManagementListResponse as QuotaManagementListResponse,
    type QuotaManagementCreateParams as QuotaManagementCreateParams,
    type QuotaManagementListParams as QuotaManagementListParams,
    type QuotaManagementDeleteParams as QuotaManagementDeleteParams,
  };
}
