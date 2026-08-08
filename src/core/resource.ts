// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { LlamaCloudAdmin } from '../client';

export abstract class APIResource {
  protected _client: LlamaCloudAdmin;

  constructor(client: LlamaCloudAdmin) {
    this._client = client;
  }
}
