// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloudAdmin from '@llamaindex/llama-cloud-admin';

const client = new LlamaCloudAdmin({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usageMetrics', () => {
  // Mock server tests are disabled
  test.skip('aggregate: only required params', async () => {
    const responsePromise = client.admin.usageMetrics.aggregate({
      day_on_or_after: 'day_on_or_after',
      day_on_or_before: 'day_on_or_before',
      group_by: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('aggregate: required and optional params', async () => {
    const response = await client.admin.usageMetrics.aggregate({
      day_on_or_after: 'day_on_or_after',
      day_on_or_before: 'day_on_or_before',
      group_by: ['string'],
      event_types: ['audio_seconds_parsed', 'chart_parsing_agentic'],
      organization_id: 'organization_id',
      project_id: 'project_id',
      user_id: 'user_id',
    });
  });
});
