import { fetchJsonOrError } from '../../../../../lib/requests/fetchWithAuthenticityToken';
import { getRegistrationConfigUrl } from '../../../../../lib/requests/routes.js.erb';

export default async function getRegistrationConfig(
  competitionId,
) {
  const route = getRegistrationConfigUrl(competitionId);
  const { data } = await fetchJsonOrError(route);
  return data;
}
