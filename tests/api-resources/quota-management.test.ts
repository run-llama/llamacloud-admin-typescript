// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloudAdmin from '@llamaindex/llama-cloud-admin';

const client = new LlamaCloudAdmin({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource quotaManagement', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.quotaManagement.create({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      setting: 'allow_pay_as_you_go',
      value: 0,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.quotaManagement.create({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      setting: 'allow_pay_as_you_go',
      value: 0,
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.quotaManagement.list({ source_id: 'source_id', source_type: 'GLOBAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.quotaManagement.list({
      source_id: 'source_id',
      source_type: 'GLOBAL',
      configuration_type: 'allow_pay_as_you_go',
      exclude_self_service: true,
      expand: true,
      page: 0,
      page_size: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.quotaManagement.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.quotaManagement.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
