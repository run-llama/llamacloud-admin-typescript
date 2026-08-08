# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationMember</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">Role</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">UserOrganizationRole</a></code>

Methods:

- <code title="post /api/v2/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="put /api/v2/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>(organizationID, { ...params }) -> Organization</code>
- <code title="get /api/v2/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationsPaginatedCursor</code>
- <code title="delete /api/v2/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">delete</a>(organizationID) -> void</code>
- <code title="get /api/v2/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">get</a>(organizationID) -> Organization</code>

## Users

Types:

- <code><a href="./src/resources/organizations/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/organizations/users.ts">UserAddResponse</a></code>
- <code><a href="./src/resources/organizations/users.ts">UserAddToProjectResponse</a></code>
- <code><a href="./src/resources/organizations/users.ts">UserListProjectsResponse</a></code>
- <code><a href="./src/resources/organizations/users.ts">UserRemoveFromProjectResponse</a></code>

Methods:

- <code title="get /api/v1/organizations/{organization_id}/users">client.organizations.users.<a href="./src/resources/organizations/users.ts">list</a>(organizationID) -> UserListResponse</code>
- <code title="delete /api/v1/organizations/{organization_id}/users/{member_user_id}">client.organizations.users.<a href="./src/resources/organizations/users.ts">delete</a>(memberUserID, [ ...body ]) -> void</code>
- <code title="put /api/v1/organizations/{organization_id}/users">client.organizations.users.<a href="./src/resources/organizations/users.ts">add</a>(organizationID, [ ...body ]) -> UserAddResponse</code>
- <code title="put /api/v1/organizations/{organization_id}/users/{user_id}/projects">client.organizations.users.<a href="./src/resources/organizations/users.ts">addToProject</a>(userID, { ...params }) -> unknown</code>
- <code title="put /api/v1/organizations/{organization_id}/users/roles">client.organizations.users.<a href="./src/resources/organizations/users.ts">assignRole</a>(organizationID, { ...params }) -> UserOrganizationRole</code>
- <code title="get /api/v1/organizations/{organization_id}/users/{user_id}/projects">client.organizations.users.<a href="./src/resources/organizations/users.ts">listProjects</a>(userID, { ...params }) -> UserListProjectsResponse</code>
- <code title="get /api/v1/organizations/{organization_id}/users/roles">client.organizations.users.<a href="./src/resources/organizations/users.ts">listRoles</a>(organizationID, { ...params }) -> UserOrganizationRole | null</code>
- <code title="delete /api/v1/organizations/{organization_id}/users/{user_id}/projects/{project_id}">client.organizations.users.<a href="./src/resources/organizations/users.ts">removeFromProject</a>(projectID, { ...params }) -> unknown</code>

## Roles

Types:

- <code><a href="./src/resources/organizations/roles.ts">RoleListResponse</a></code>

Methods:

- <code title="get /api/v1/organizations/{organization_id}/roles">client.organizations.roles.<a href="./src/resources/organizations/roles.ts">list</a>(organizationID) -> RoleListResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectGetResponse</a></code>

Methods:

- <code title="post /api/v2/projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="put /api/v2/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">update</a>(projectID, { ...params }) -> ProjectUpdateResponse</code>
- <code title="get /api/v2/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectListResponsesPaginatedCursor</code>
- <code title="delete /api/v2/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(projectID, { ...params }) -> void</code>
- <code title="get /api/v2/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">get</a>(projectID, { ...params }) -> ProjectGetResponse</code>

# Invites

Types:

- <code><a href="./src/resources/invites.ts">Invite</a></code>
- <code><a href="./src/resources/invites.ts">InviteAcceptResponse</a></code>

Methods:

- <code title="get /api/v2/invites">client.invites.<a href="./src/resources/invites.ts">list</a>({ ...params }) -> InvitesPaginatedCursor</code>
- <code title="delete /api/v2/invites/{invite_id}">client.invites.<a href="./src/resources/invites.ts">delete</a>(inviteID) -> void</code>
- <code title="post /api/v2/invites/{invite_id}/accept">client.invites.<a href="./src/resources/invites.ts">accept</a>(inviteID) -> InviteAcceptResponse</code>

# Admin

Types:

- <code><a href="./src/resources/admin/admin.ts">AdminGetFilestoresInfoResponse</a></code>
- <code><a href="./src/resources/admin/admin.ts">AdminGetLicenseInfoResponse</a></code>
- <code><a href="./src/resources/admin/admin.ts">AdminGetLlamaextractFeaturesResponse</a></code>
- <code><a href="./src/resources/admin/admin.ts">AdminGetLlmsInfoResponse</a></code>
- <code><a href="./src/resources/admin/admin.ts">AdminGetOcrStatusResponse</a></code>
- <code><a href="./src/resources/admin/admin.ts">AdminGetS3ConfigResponse</a></code>

Methods:

- <code title="get /api/v1/admin/filestores/info">client.admin.<a href="./src/resources/admin/admin.ts">getFilestoresInfo</a>() -> AdminGetFilestoresInfoResponse</code>
- <code title="get /api/v1/admin/license/info">client.admin.<a href="./src/resources/admin/admin.ts">getLicenseInfo</a>({ ...params }) -> AdminGetLicenseInfoResponse</code>
- <code title="get /api/v1/admin/llamaextract/features">client.admin.<a href="./src/resources/admin/admin.ts">getLlamaextractFeatures</a>() -> AdminGetLlamaextractFeaturesResponse</code>
- <code title="get /api/v1/admin/llms/info">client.admin.<a href="./src/resources/admin/admin.ts">getLlmsInfo</a>() -> AdminGetLlmsInfoResponse</code>
- <code title="get /api/v1/admin/ocr/statusz">client.admin.<a href="./src/resources/admin/admin.ts">getOcrStatus</a>() -> AdminGetOcrStatusResponse</code>
- <code title="get /api/v1/admin/s3/config">client.admin.<a href="./src/resources/admin/admin.ts">getS3Config</a>() -> AdminGetS3ConfigResponse</code>

## Users

Types:

- <code><a href="./src/resources/admin/users.ts">UserGetClaimsResponse</a></code>
- <code><a href="./src/resources/admin/users.ts">UserUpdateClaimsResponse</a></code>

Methods:

- <code title="get /api/v1/admin/users/{user_id}/claims">client.admin.users.<a href="./src/resources/admin/users.ts">getClaims</a>(userID) -> UserGetClaimsResponse</code>
- <code title="patch /api/v1/admin/users/{user_id}/claims">client.admin.users.<a href="./src/resources/admin/users.ts">updateClaims</a>(userID, { ...params }) -> UserUpdateClaimsResponse</code>

## UsageMetrics

Types:

- <code><a href="./src/resources/admin/usage-metrics.ts">UsageMetricAggregateResponse</a></code>

Methods:

- <code title="get /api/v1/admin/usage-metrics/aggregate">client.admin.usageMetrics.<a href="./src/resources/admin/usage-metrics.ts">aggregate</a>({ ...params }) -> UsageMetricAggregateResponse</code>
- <code title="get /api/v1/admin/usage-metrics/export">client.admin.usageMetrics.<a href="./src/resources/admin/usage-metrics.ts">export</a>({ ...params }) -> void</code>
