// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class UsageMetrics extends APIResource {
  /**
   * Aggregate usage metrics by one or more dimensions, reporting total credits used.
   * Global admin only.
   *
   * A date range is required, which bounds the scan via the `day`-leading index.
   * Supplying `organization_id` narrows it further via the `(organization_id, day)`
   * index.
   *
   * Supported `group_by` dimensions: `day`, `organization_id`, `project_id`,
   * `event_type`, `user_id`. Buckets are ordered by total credits descending.
   *
   * @example
   * ```ts
   * const response = await client.admin.usageMetrics.aggregate({
   *   day_on_or_after: 'day_on_or_after',
   *   day_on_or_before: 'day_on_or_before',
   *   group_by: ['string'],
   * });
   * ```
   */
  aggregate(
    query: UsageMetricAggregateParams,
    options?: RequestOptions,
  ): APIPromise<UsageMetricAggregateResponse> {
    return this._client.get('/api/v1/admin/usage-metrics/aggregate', { query, ...options });
  }
}

/**
 * Response containing usage metrics aggregated by one or more dimensions.
 */
export interface UsageMetricAggregateResponse {
  /**
   * The aggregation buckets, ordered by total credits descending
   */
  buckets: Array<UsageMetricAggregateResponse.Bucket>;

  /**
   * The dimensions the metrics were grouped by
   */
  group_by: Array<'day' | 'event_type' | 'organization_id' | 'project_id' | 'user_id'>;
}

export namespace UsageMetricAggregateResponse {
  /**
   * A single aggregation bucket grouped by the requested dimensions.
   */
  export interface Bucket {
    /**
     * The dimension values that define this bucket
     */
    dimensions: { [key: string]: string };

    /**
     * Number of metric rows in this bucket
     */
    metric_count: number;

    /**
     * Total credits consumed by metrics in this bucket
     */
    total_credits: number | string;

    /**
     * Total of the metric `value` field in this bucket
     */
    total_value: number;
  }
}

export interface UsageMetricAggregateParams {
  /**
   * Inclusive lower bound on the day (YYYY-MM-DD, UTC)
   */
  day_on_or_after: string;

  /**
   * Inclusive upper bound on the day (YYYY-MM-DD, UTC)
   */
  day_on_or_before: string;

  /**
   * Dimensions to group by: day, organization_id, project_id, event_type, user_id
   */
  group_by: Array<string>;

  /**
   * Filter by event types
   */
  event_types?: Array<
    | 'audio_seconds_parsed'
    | 'chart_parsing_agentic'
    | 'chart_parsing_efficient'
    | 'chart_parsing_plus'
    | 'chat_message_sent'
    | 'confidence_score_high'
    | 'directory_count_snapshot'
    | 'directory_file_count_snapshot'
    | 'directory_files_exported'
    | 'directory_files_ingested'
    | 'directory_pages_exported'
    | 'extraction_num_pages'
    | 'form_parsing_pages'
    | 'image_classified'
    | 'index_retrieve_query'
    | 'layout_aware_chart_extraction'
    | 'layout_aware_parsing'
    | 'layout_extracted'
    | 'pages_classified'
    | 'pages_embedded'
    | 'pages_indexed'
    | 'pages_parsed'
    | 'pages_split'
    | 'pages_verified'
    | 'precise_bbox_extraction'
    | 'set_total_indexes'
    | 'set_total_pages_indexed'
    | 'spreadsheet_regions_extracted'
    | 'stored_file_count'
    | 'stored_file_mb'
  > | null;

  /**
   * Filter by organization ID
   */
  organization_id?: string | null;

  /**
   * Filter by project ID
   */
  project_id?: string | null;

  /**
   * Filter by user ID
   */
  user_id?: string | null;
}

export declare namespace UsageMetrics {
  export {
    type UsageMetricAggregateResponse as UsageMetricAggregateResponse,
    type UsageMetricAggregateParams as UsageMetricAggregateParams,
  };
}
