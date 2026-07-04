import { fetchJsonOrError } from '../../../../../lib/requests/fetchWithAuthenticityToken';
import { pollingRoute } from '../../../../../lib/requests/routes.js.erb';
import pollingMock from '../../mocks/polling_mock';

export default async function pollRegistrations(
  userId,
  competitionId,
) {
  if (process.env.NODE_ENV === 'production') {
    const route = pollingRoute(userId, competitionId);
    const { data } = await fetchJsonOrError(route);
    return data;
  }
  return pollingMock(userId, competitionId);
}
