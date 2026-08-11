// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsageMetricsAPI from './usage-metrics';
import { UsageMetricAggregateParams, UsageMetricAggregateResponse, UsageMetrics } from './usage-metrics';
import * as UsersAPI from './users';
import { CustomClaims, UserClaims, UserUpdateClaimsParams, Users } from './users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Admin extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  usageMetrics: UsageMetricsAPI.UsageMetrics = new UsageMetricsAPI.UsageMetrics(this._client);

  /**
   * Get File Store Info
   *
   * @example
   * ```ts
   * const response = await client.admin.getFilestoresInfo();
   * ```
   */
  getFilestoresInfo(options?: RequestOptions): APIPromise<AdminGetFilestoresInfoResponse> {
    return this._client.get('/api/v1/admin/filestores/info', options);
  }

  /**
   * Get License Info
   *
   * @example
   * ```ts
   * const response = await client.admin.getLicenseInfo();
   * ```
   */
  getLicenseInfo(
    query: AdminGetLicenseInfoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdminGetLicenseInfoResponse> {
    return this._client.get('/api/v1/admin/license/info', { query, ...options });
  }

  /**
   * Get LlamaExtract feature availability based on available models.
   *
   * @example
   * ```ts
   * const response =
   *   await client.admin.getLlamaextractFeatures();
   * ```
   */
  getLlamaextractFeatures(options?: RequestOptions): APIPromise<AdminGetLlamaextractFeaturesResponse> {
    return this._client.get('/api/v1/admin/llamaextract/features', options);
  }

  /**
   * Get Llm Info
   *
   * @example
   * ```ts
   * const response = await client.admin.getLlmsInfo();
   * ```
   */
  getLlmsInfo(options?: RequestOptions): APIPromise<AdminGetLlmsInfoResponse> {
    return this._client.get('/api/v1/admin/llms/info', options);
  }

  /**
   * Get OCR service health status including GPU availability.
   *
   * @example
   * ```ts
   * const response = await client.admin.getOcrStatus();
   * ```
   */
  getOcrStatus(options?: RequestOptions): APIPromise<AdminGetOcrStatusResponse> {
    return this._client.get('/api/v1/admin/ocr/statusz', options);
  }
}

export interface AdminGetFilestoresInfoResponse {
  status: 'missing_buckets' | 'missing_credentials' | 'ok';

  available_buckets?: { [key: string]: string };

  unavailable_buckets?: { [key: string]: string };
}

export interface AdminGetLicenseInfoResponse {
  /**
   * License expiration date
   */
  expires_at: string;

  /**
   * License validation status
   */
  status: string;

  /**
   * License message
   */
  message?: string | null;

  /**
   * License scopes
   */
  scopes?: Array<string> | null;
}

export interface AdminGetLlamaextractFeaturesResponse {
  available_modes: Array<AdminGetLlamaextractFeaturesResponse.AvailableMode>;

  schema_generation: AdminGetLlamaextractFeaturesResponse.SchemaGeneration;
}

export namespace AdminGetLlamaextractFeaturesResponse {
  export interface AvailableMode {
    mode: string;

    parse_mode: string;

    status: 'available' | 'unavailable';

    available_extract_models?: Array<string>;

    available_parse_models?: Array<string>;

    missing_extract_models?: Array<string>;

    missing_parse_models?: Array<string>;
  }

  export interface SchemaGeneration {
    model: string;

    status: 'available' | 'unavailable';
  }
}

export interface AdminGetLlmsInfoResponse {
  llm_info: { [key: string]: { [key: string]: AdminGetLlmsInfoResponse.ValidationStatus } };
}

export namespace AdminGetLlmsInfoResponse {
  export interface ValidationStatus {
    internal_model_name: string | null;

    valid: boolean;

    error_message?: string | null;

    last_validated?: string;
  }
}

/**
 * Response model for OCR service health/GPU status.
 */
export interface AdminGetOcrStatusResponse {
  status: 'degraded' | 'ok' | 'unavailable';

  device?: string;

  error_message?: string | null;

  gpu_available?: boolean;

  gpu_device_count?: number | null;

  gpu_device_name?: string | null;
}

export interface AdminGetLicenseInfoParams {
  /**
   * Whether to include scopes in the response
   */
  include_scopes?: boolean;
}

Admin.Users = Users;
Admin.UsageMetrics = UsageMetrics;

export declare namespace Admin {
  export {
    type AdminGetFilestoresInfoResponse as AdminGetFilestoresInfoResponse,
    type AdminGetLicenseInfoResponse as AdminGetLicenseInfoResponse,
    type AdminGetLlamaextractFeaturesResponse as AdminGetLlamaextractFeaturesResponse,
    type AdminGetLlmsInfoResponse as AdminGetLlmsInfoResponse,
    type AdminGetOcrStatusResponse as AdminGetOcrStatusResponse,
    type AdminGetLicenseInfoParams as AdminGetLicenseInfoParams,
  };

  export {
    Users as Users,
    type CustomClaims as CustomClaims,
    type UserClaims as UserClaims,
    type UserUpdateClaimsParams as UserUpdateClaimsParams,
  };

  export {
    UsageMetrics as UsageMetrics,
    type UsageMetricAggregateResponse as UsageMetricAggregateResponse,
    type UsageMetricAggregateParams as UsageMetricAggregateParams,
  };
}
