// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloudAdmin from '@llamaindex/llama-cloud-admin';

const client = new LlamaCloudAdmin({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.organizations.users.delete('member_user_id', {
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
    const response = await client.organizations.users.delete('member_user_id', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      body: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.organizations.users.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body: [{ project_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] }],
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
  test.skip('add: required and optional params', async () => {
    const response = await client.organizations.users.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body: [
        {
          project_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          email: 'dev@stainless.com',
          role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          user_id: 'user_id',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('addToProject: only required params', async () => {
    const responsePromise = client.organizations.users.addToProject('user_id', {
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
  test.skip('addToProject: required and optional params', async () => {
    const response = await client.organizations.users.addToProject('user_id', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('assignRole: only required params', async () => {
    const responsePromise = client.organizations.users.assignRole('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      user_id: 'user_id',
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
  test.skip('assignRole: required and optional params', async () => {
    const response = await client.organizations.users.assignRole('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      user_id: 'user_id',
    });
  });

  // Mock server tests are disabled
  test.skip('listMembers', async () => {
    const responsePromise = client.organizations.users.listMembers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listProjects: only required params', async () => {
    const responsePromise = client.organizations.users.listProjects('user_id', {
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
  test.skip('listProjects: required and optional params', async () => {
    const response = await client.organizations.users.listProjects('user_id', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('listRoles', async () => {
    const responsePromise = client.organizations.users.listRoles('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listRoles: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.users.listRoles(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloudAdmin.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('removeFromProject: only required params', async () => {
    const responsePromise = client.organizations.users.removeFromProject(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', user_id: 'user_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('removeFromProject: required and optional params', async () => {
    const response = await client.organizations.users.removeFromProject(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', user_id: 'user_id' },
    );
  });
});
